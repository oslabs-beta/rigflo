import React, { useContext, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { AuthContext } from '../../context/AuthContext';

// This route is hit when a user is authenticated with GH but we still don't have the user info
export default function Callback() {
  const auth = useContext(AuthContext);
  const { setAuthState } = auth;

  const location = useLocation();

  const { searchParams } = new URL(location.href);
  const token = searchParams.get('access_token');
  const login = searchParams.get('login');
  const avatar_url = searchParams.get('avatar_url');

  useEffect(() => {
    setAuthState({ token, userInfo: { login, avatar_url } });
  }, []);
  return null;
}
