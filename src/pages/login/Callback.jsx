import React, { useEffect, useContext } from 'react';
import { useLocation } from '@reach/router';
import { AuthContext } from '../../context/AuthContext';

export default function Callback() {
  const auth = useContext(AuthContext);
  const { authState, setAuthState } = auth;

  // Get auth code we receive back from github
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const code = urlParams.get('code');

  authState.token = code;
  authState.userInfo = {
    name: 'James',
    status: 'Still working on this feature :)',
  };

  // setAuthState(payload);

  console.log(authState);

  console.log('Callback route');
  return <h1>Auth Code: {code}.</h1>;
}
