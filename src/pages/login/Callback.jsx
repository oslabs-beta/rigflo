import React, { useContext, useEffect } from 'react';
import { useLocation } from '@reach/router';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

// This route is hit when a user is authenticated with GH but we still don't have the user info
export default function Callback() {
  const auth = useContext(AuthContext);
  const { setAuthState } = auth;

  const location = useLocation();

  const { searchParams } = new URL(location.href);
  const code = searchParams.get('code');

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: 'GET',
        url: `https://gh-user.rigflo.workers.dev/?code=${code}`,
      };
      const { data } = await axios(config);

      setAuthState({ token: data.token, userInfo: data });
    }
    fetchData();
  }, [code]);
  return 'Loading...';
}
