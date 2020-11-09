// this is a cloudflare worker hosted at https://gh-user.rigflo.workers.dev/

addEventListener('fetch', (event) => {
  console.log(event);
  event.respondWith(handleRequest(event.request));
});

const clientId = '9736e547efbf758aa0dc';
const clientSecret = '70f7de0cf4ef9031dbdb112632731be342384dd3';

async function handleRequest(request) {
  console.log({ request });
  // handle CORS pre-flight request
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
  try {
    // Exchange code for access token
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    console.log({ code });
    const result = await fetch(
      `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
      {
        method: 'post',
        headers: {
          accept: 'application/json',
        },
      },
    );

    console.log({ result });

    // Store the token
    const data = await result.json();

    console.log({ data });
    // Request user info
    const userData = await fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        Authorization: `token ${data.access_token}`,
      },
    });

    const user = await userData.json();

    console.log({ user });

    return new Response(JSON.stringify(user), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response('heyo', {
      status: 500,
    });
  }
}
