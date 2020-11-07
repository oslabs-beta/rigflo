import React from 'react';
import { useLocation } from '@reach/router';

export default function Callback() {
  // get the url query strings
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const code = urlParams.get('code');
  const state = urlParams.get('state');

  console.log('Callback route');
  return <h1>Calling back....</h1>;
}
