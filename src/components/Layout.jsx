import React from 'react';
import Toolbar from './components/toolbar/Toolbar';

const Layout = ({ sidebar, children }) => (
  <div className="flex h-screen overflow-hidden bg-white">
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-96">{sidebar}</div>
    </div>
    <div className="flex flex-col flex-1 w-0 overflow-hidden">
      <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
        <button
          className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          aria-label="Open sidebar"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main
        className="relative z-0 flex-1 overflow-y-auto focus:outline-none"
        tabIndex={0}
      >
        <div className="pb-6">
          <Toolbar />
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div className="py-4">
              <div className="h-screen border-gray-200 border-dashed rounded-lg">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Layout;
