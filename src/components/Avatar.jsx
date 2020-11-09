import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function Avatar() {
  const auth = useContext(AuthContext);
  const { authState, logout } = auth;

  const { login, avatar_url } = authState.userInfo;

  if (!authState.token) {
    return (
      <a
        href="https://new-auth.rigflo.workers.dev"
        className="text-center border border-solid border-gray-400 w-1/2 py-2 rounded-md hover:bg-black hover:text-white mt-6 ml-2"
      >
        <FontAwesomeIcon icon={faGithub} /> Sign in with Github
      </a>
    );
  }
  return (
    <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
      <div href="/" className="flex-shrink-0 block w-full group">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block rounded-full h-9 w-9"
              src={avatar_url}
              alt={login}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900">
              {login}
            </p>
            <button
              onClick={logout}
              className="text-xs font-medium leading-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
