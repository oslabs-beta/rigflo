import React, { useContext, useEffect } from 'react';
import { useLocation } from '@reach/router';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

// This route is hit when a user is authenticated with GH but we still don't have the user info
export default function Callback() {
  const auth = useContext(AuthContext);
  const { authState, setAuthState } = auth;

  const location = useLocation();

  const { searchParams } = new URL(location.href);
  const code = searchParams.get('code');

  console.log('about to async fetch');

  useEffect(() => {
    // call worker with auth code which calls github to get access token and make subsequent request for the user
    // TODO: This needs to be fixed, it currently does not send a request to the server due to CORS issues.
    async function fetchData() {
      const config = {
        method: 'GET',
        url: `https://gh-user.rigflo.workers.dev/?code=${code}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
      const { data } = await axios(config);
      return data;
    }
    fetchData();
  }, [code]);

  return (
    <div>
      <h1>hold up</h1>
    </div>
  );
}
