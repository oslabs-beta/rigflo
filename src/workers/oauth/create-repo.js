addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

const client_id = '9736e547efbf758aa0dc';
const client_secret = '70f7de0cf4ef9031dbdb112632731be342384dd3';

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
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
    // redirect POST requests to the /user/repos
    if (request.method === 'POST') {
      const response = await fetch('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'Content-type': 'application/json',
          'User-Agent': 'request',
          Authorization: 'token 798577036f555b1192566d45e51959e87c5898b2',
        },
        body: JSON.stringify({
          name: 'Rigflo Test Repo',
          description: 'Test number 2',
          homepage: 'https://example.com',
          private: false,
          has_issues: true,
          has_projects: true,
          has_wiki: true,
        }),
      });

      console.log({ response });

      const headers = {
        'Access-Control-Allow-Origin': '*',
      };

      if (response.error) {
        return new Response(JSON.stringify(response), { status: 401, headers });
      }

      return new Response(JSON.stringify({ message: 'Success!', response }), {
        status: 201,
        headers,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(error.message, {
      status: 500,
    });
  }
}
