import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function PushToGithub() {
  const auth = useContext(AuthContext);
  const { token } = auth.authState;

  // helper
  // const fetchRequest = (uri, config = {}) => {
  //   fetch(uri, config).then((res) => console.log(res));
  // };

  async function createRepo() {
    console.log('before request');
    const { data, error } = axios.post(
      `http://localhost:3000/api/repos?token=${token}`,
    );
    if (error) console.error(error.message);

    console.log({ data });
  }

  return (
    <>
      <button
        onClick={createRepo}
        className="inline-block px-4 py-2 mt-4 ml-4 text-sm font-bold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
      >
        Push to Github
      </button>
    </>
  );
}
