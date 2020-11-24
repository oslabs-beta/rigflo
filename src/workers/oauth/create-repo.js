addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

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
    // get the access token from the request url
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    // redirect POST requests to the /user/repos
    if (request.method === 'POST') {
      const response = await fetch('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'Content-type': 'application/json',
          'User-Agent': 'request',
          Authorization: `token ${token}`,
        },
        body: JSON.stringify({
          name: `Rigflo YAML File ${Date.now()}`,
          description: 'Test number 2',
          homepage: 'https://example.com',
          private: false,
          has_issues: true,
          has_projects: true,
          has_wiki: true,
        }),
      });

      console.log({ response });

      const result = await response.json();

      const headers = {
        'Access-Control-Allow-Origin': '*',
      };

      if (response.error) {
        return new Response(JSON.stringify(response), { status: 401, headers });
      }

      return new Response(JSON.stringify({ message: 'Success!', result }), {
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
