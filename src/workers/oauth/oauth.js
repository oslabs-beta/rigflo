addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

const client_id = '9736e547efbf758aa0dc';
const redirect_uri = 'http://localhost:8080/login/callback';

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

  // redirect GET requests to the OAuth login page on github.com
  if (request.method === 'GET') {
    return Response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`,
      302,
    );
  }
}
