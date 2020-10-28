import React, { useState, useEffect, useCallback } from 'react';
import { Transition } from '@headlessui/react';
import { PencilAlt } from 'heroicons-react';
import {
  useStoreState,
  useStoreActions,
  removeElements,
} from 'react-flow-renderer';

import Path from './Path';
import MethodSelect from './MethodSelect';
import Description from './Description';
import AddPathBtn from './AddPathBtn';
import useSelectedElement from '../../hooks/useSelectedElement';

const Editor = () => {
  // We can access our elements state and actions because the Editor component
  // is a child of the ReactFlowProvider (inside src/App.jsx)
  const elements = useStoreState((store) => store.elements);
  const setElements = useStoreActions((actions) => actions.setElements);

  const selectedElement = useSelectedElement();

  // Node editor form state
  const [path, setPath] = useState('');
  const [description, setDescription] = useState('');
  const [method, setMethod] = useState('');
  const setFormData = ({ path, description, method }) => {
    setPath(path);
    setDescription(description);
    setMethod(method);
  };

  const [isOpen, setIsOpen] = useState(false);

  // When the selectedElement changes, we want to update the form data
  useEffect(() => {
    console.log(
      'When the selectedElement changes, we want to update the form data',
    );
    // If there is no selection, load an empty form
    if (!selectedElement) {
      setFormData({ path: '', description: '', method: '' });
    } else {
      setFormData(selectedElement.data);
    }
  }, [selectedElement]);

  const updateSelectedNode = useCallback(() => {
    // Skip updating if the form data reflects the current node data
    if (
      path === selectedElement.data.path &&
      description === selectedElement.data.path &&
      method === selectedElement.data.method
    )
      return;

    setElements(
      elements.map((element) => {
        if (element.id !== selectedElement.id) return element;

        return {
          ...element,
          data: {
            label: `${method}: ${path}`,
            path,
            description,
            method,
            title: `${method}: ${path}`,
          },
        };
      }),
    );
  });

  const addNode = (e) => {
    e.preventDefault();

    const node = {
      id: `${Date.now()}`,
      data: {
        label: `${method}: ${path}`,
        method,
        path,
        description,
      },
      type: `pathNode`,
      position: { x: 100, y: 100 },
      selected: false,
    };
    console.log('adding node', elements, node);
    setElements([...elements, node]);

    // Clear form input
    // setPath('');
    // setDescription('');
    // setMethod('');
  };

  const removeSelectedNode = () => {
    setElements(removeElements([selectedElement], elements));
  };

  // Helper function to update the currently selected node when setting form data
  const andUpdate = useCallback(
    (setStateCallback) => (value) => {
      setStateCallback(value);
      updateSelectedNode();
    },
    [updateSelectedNode],
  );

  return (
    <div className="flow-root">
      <a
        href="#"
        className="flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out bg-white rounded-md group hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Heroicon name: home */}
        <PencilAlt className="w-6 h-6 mr-3 text-gray-500 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-600" />
        Request Editor
      </a>
      <Transition show={isOpen} style={{ marginBottom: '440px' }}>
        <div className="flex flex-col h-0 bg-white border-r border-gray-200 flex-0">
          <form>
            <div className="px-2 mt-5 space-y-1">
              <div className="pt-8 mt-8 border-t border-gray-200 sm:mt-5 sm:pt-10">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Request Details
                  </h3>
                  <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
                    Enter basic request information
                  </p>
                </div>
                <Path pathInput={path} setPathInput={andUpdate(setPath)} />
                <MethodSelect
                  selectedMethod={method}
                  setSelectedMethod={andUpdate(setMethod)}
                />
                <Description
                  descriptionInput={description}
                  setDescriptionInput={andUpdate(setDescription)}
                />

                {selectedElement ? (
                  <>
                    <button className="px-4 py-2 mt-4 mb-8 mr-8 font-bold text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red sm:text-sm sm:leading-5">
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={removeSelectedNode}
                      className="px-4 py-2 mt-4 text-red-700 bg-transparent border border-red-500 rounded mb-8font-semibold hover:bg-red-500 hover:text-white hover:border-transparent"
                    >
                      Delete selected node
                    </button>
                  </>
                ) : (
                  <AddPathBtn addNode={addNode} />
                )}
              </div>
            </div>
          </form>
        </div>
      </Transition>
    </div>
  );
};

export default Editor;
