import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { PencilAlt } from 'heroicons-react';

import Path from './Path';
import MethodSelect from './MethodSelect';
import Description from './Description';
import AddPathBtn from './AddPathBtn';
import { useSelection } from '../../hooks/useSelection';

const Editor = ({ setElements, elements, onElementsRemove }) => {
  const initialMethod = 'Select a method';
  // ! LOCAL STATE: Could use something like MobX to simplify this and make it more readable
  const [pathInput, setPathInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(initialMethod);
  const [isOpen, setIsOpen] = useState(false);

  const [selection] = useSelection();
  const selectedEl = selection[0];

  // update the node in the elements list when a form value is changed
  // useEffect(() => {
  //   if (!selectedEl) return;
  //   // ! For updating nodes, could take the logic out into a utils file, so that we can reuse it
  //   const newElements = elements.map((element) => {
  //     if (element.id !== selectedEl.id) return element;

  //     return {
  //       ...element,
  //       data: {
  //         label: `${selectedMethod}: ${pathInput}`,
  //         path: pathInput,
  //         description: descriptionInput,
  //         method: selectedMethod,
  //         title: `${selectedMethod}: ${pathInput}`,
  //       },
  //     };
  //   });
  //   setElements(newElements);
  // }, [
  //   selectedEl,
  //   selectedMethod,
  //   descriptionInput,
  //   pathInput,
  //   elements,
  //   setElements,
  // ]);
  const updateNode = () => {
    // ! For updating nodes, could take the logic out into a utils file, so that we can reuse it
    const newElements = elements.map((element) => {
      if (element.id !== selectedEl.id) return element;

      return {
        ...element,
        data: {
          label: `${selectedMethod}: ${pathInput}`,
          path: pathInput,
          description: descriptionInput,
          method: selectedMethod,
          title: `${selectedMethod}: ${pathInput}`,
        },
      };
    });
    setElements(newElements);
  };
  // Set the form input boxes to the data of a node when it is selected
  // ! See line 17, this may change depending on what happens with that
  useEffect(() => {
    if (!selectedEl) return;
    setPathInput(selectedEl.data.path);
    setDescriptionInput(selectedEl.data.description);
    setSelectedMethod(selectedEl.data.method);
  }, [selectedEl]);

  const addNode = (e) => {
    e.preventDefault();

    const node = {
      id: `${Date.now()}`,
      data: {
        label: `${selectedMethod}: ${pathInput}`,
        method: selectedMethod,
        path: pathInput,
        description: descriptionInput,
      },
      type: `pathNode`,
      position: { x: 100, y: 100 },
      selected: false,
    };
    setElements([...elements, node]);

    // Clear form input
    setPathInput('');
    setDescriptionInput('');
    setSelectedMethod(initialMethod);
  };

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
                <Path pathInput={pathInput} setPathInput={setPathInput} />
                <MethodSelect
                  selectedMethod={selectedMethod}
                  setSelectedMethod={setSelectedMethod}
                />
                <Description
                  descriptionInput={descriptionInput}
                  setDescriptionInput={setDescriptionInput}
                />

                {selectedEl ? (
                  <>
                    <button
                      onClick={updateNode}
                      className="px-4 py-2 mt-4 mb-8 mr-8 font-bold text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={onElementsRemove}
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
