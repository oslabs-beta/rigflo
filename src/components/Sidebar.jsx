import React from 'react';
import Inspector from './Inspector';
import Editor from './Editor/Editor';
import Avatar from './Avatar';
import { Home } from 'heroicons-react';

const Sidebar = () => (
  <div className="flex flex-col flex-1 h-0 bg-white border-r border-gray-200">
    <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        {/* add logo */}
        <h1 className="text-4xl text-purple-400">rigflo</h1>
      </div>
      <nav className="px-2 mt-5 space-y-1 bg-white flex-0">
        <a
          href="#"
          className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-white rounded-md group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
        >
          <Home className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
          Dashboard
        </a>
        <Editor />
        <Inspector />
      </nav>
      <Avatar />
    </div>
  </div>
);

export default Sidebar;
