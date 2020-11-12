import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import JSONPretty from 'react-json-pretty';
import { Code } from 'heroicons-react';
import 'react-json-pretty/themes/1337.css';
import useSelectedElement from '../hooks/useSelectedElement';

export default function Inspector() {
  const selectedElement = useSelectedElement();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flow-root">
      <a
        href="#"
        className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-white rounded-md group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Code className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
        Inspector
      </a>
      <Transition show={isOpen}>
        <div id="inspector">
          <div>
            <JSONPretty
              id="json-pretty"
              data={selectedElement}
              style={{ fontSize: '.64rem' }}
              mainStyle="padding:1em"
              valueStyle="font-size:1em"
            ></JSONPretty>
          </div>
        </div>
      </Transition>
    </div>
  );
}
