addEventListener('fetch', (event) => {
  event.respondWith(handle(event.request));
});

// Note: Cloudflare workers do not support access to environment variables.
// The process.env.* variables are being replaced before deployment using github actions
const client_id = '9736e547efbf758aa0dc';
const client_secret = '70f7de0cf4ef9031dbdb112632731be342384dd3';

async function handle(request) {
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

  // redirect GET requests to the OAuth login page on github.com
  if (request.method === 'GET') {
    return Response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${client_id}`,
      302,
    );
  }

  try {
    const { code } = await request.json();

    const response = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({ client_id, client_secret, code }),
      },
    );
    const result = await response.json();
    const headers = {
      'Access-Control-Allow-Origin': '*',
    };

    if (result.error) {
      return new Response(JSON.stringify(result), { status: 401, headers });
    }

    return new Response(JSON.stringify({ token: result.access_token }), {
      status: 201,
      headers,
    });
  } catch (error) {
    console.error(error);
    return new Response(error.message, {
      status: 500,
    });
  }
}
