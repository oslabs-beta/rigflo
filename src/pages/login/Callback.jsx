import React, { useContext } from 'react';
import { useLocation } from '@reach/router';
import { useAsync } from 'react-async-hook';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const fetchGithubUser = async (code) => {
  const result = await axios.get(
    `https://gh-user.rigflo.workers.dev/?code=${code}`,
  );
  console.log('fetching user');
  return result;
};

// This route is hit when a user is authenticated with GH but we still don't have the user info
export default function Callback() {
  const auth = useContext(AuthContext);
  const { authState } = auth;

  // Get auth code we receive back from github
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const code = urlParams.get('code');

  const { loading, error, data } = useAsync(fetchGithubUser, code);

  console.log({ data });

  // update auth state manually for now
  authState.token = code;
  authState.userInfo = {
    name: 'James',
  };
  authState.status = 'pending';

  console.log(authState);

  return (
    <div>
      {loading && <div>Loading</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <div>Success!</div>
          <div>Name: {data}</div>
        </div>
      )}
    </div>
  );
}
