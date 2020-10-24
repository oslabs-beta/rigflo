import React from 'react';
import Inspector from './Inspector';
import Editor from './Editor/Editor';
import Avatar from './Avatar';

const Sidebar = ({
  selectedEl,
  setSelectedEl,
  addNode,
  elements,
  setElements,
}) => {
  return (
    <div className="flex flex-col flex-1 h-0 bg-white border-r border-gray-200">
      <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="w-auto h-8"
            src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
            alt="Workflow"
          />
        </div>
        <nav className="px-2 mt-5 space-y-1 bg-white flex-0">
          <a
            href="/"
            className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-gray-100 rounded-md group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
          >
            {/* Heroicon name: home */}
            <svg
              className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard
          </a>
        </nav>
        <Inspector selectedEl={selectedEl} />
        <Editor
          addNode={addNode}
          elements={elements}
          setElements={setElements}
          selectedEl={selectedEl}
          setSelectedEl={setSelectedEl}
        />
        {/* <Avatar /> */}
      </div>
    </div>
  );
};
export default Sidebar;
