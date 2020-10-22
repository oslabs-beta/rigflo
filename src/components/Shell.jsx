import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';

import { removeElements, addEdge } from 'react-flow-renderer';

import initialElements from '../data/elements.js';

const Shell = () => {
  const [elements, setElements] = useState(initialElements);
  const [selectedEl, setSelectedEl] = useState(null);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const addNode = () => {
    const node = {
      id: '44444',
      data: {
        label: (
          <>
            This is a <strong>default node</strong>
          </>
        ),
      },
      type: 'serverNode',
      position: { x: 100, y: 100 },
    };
    setElements([...elements, node]);
  };

  const onElementClick = (event, element) => {
    setSelectedEl(element);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <Sidebar selectedEl={selectedEl} />
        </div>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
          >
            {/* Heroicon name: menu */}
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
          <div className="pt-2 pb-6 md:py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="h-screen border-gray-200 border-dashed rounded-lg">
                  <Canvas
                    elements={elements}
                    onElementsRemove={onElementsRemove}
                    onConnect={onConnect}
                    addNode={addNode}
                    onElementClick={onElementClick}
                  />
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shell;
