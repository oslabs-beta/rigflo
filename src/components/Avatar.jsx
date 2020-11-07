import React from 'react';

const Avatar = () => (
  <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
    <a id="github-button" className="btn btn-block btn-social btn-github">
      <i className="fa fa-github"></i> Sign in with Github
    </a>
    <a href="/" className="flex-shrink-0 block w-full group">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block rounded-full h-9 w-9"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900">
            Tom Cook
          </p>
          <p className="text-xs font-medium leading-4 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-700">
            View profile
          </p>
        </div>
      </div>
    </a>
  </div>
);

export default Avatar;
