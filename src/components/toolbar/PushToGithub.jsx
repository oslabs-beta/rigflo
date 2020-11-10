import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function PushToGithub() {
  const auth = useContext(AuthContext);
  const { token } = auth.authState;

  async function fetchData() {
    const config = {
      method: 'POST',
      url: `https://create-repo.rigflo.workers.dev/?token=${token}`,
    };
    const { data } = await axios(config);
    console.log({ data });
  }

  return (
    <>
      <button
        onClick={fetchData}
        className="inline-block px-4 py-2 mt-4 ml-4 text-sm leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
      >
        Push to Github
      </button>
    </>
  );
}
