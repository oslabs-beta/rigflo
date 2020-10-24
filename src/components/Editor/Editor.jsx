import React, { useState, useEffect } from 'react';
import Path from './Path';
import SelectMethod from './SelectMethod';
import Description from './Description';
import AddPathBtn from './AddPathBtn';

import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';

const Editor = ({ setElements, elements, selectedEl, setSelectedEl }) => {
  const initialMethod = 'Select a method';
  const [pathInput, setPathInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(initialMethod);

  function updateForm() {
    if (selectedEl !== null) {
      setPathInput(selectedEl.data.path);
      setDescriptionInput(selectedEl.data.description);
      setSelectedMethod(selectedEl.data.method);
    }
  }
  useDidUpdateEffect(updateForm, selectedEl);

  const addNode = (e) => {
    e.preventDefault();

    const node = {
      id: `${selectedMethod}-${elements.length + 1}`,
      data: {
        label: (
          <>
            <strong>
              {selectedMethod}: {pathInput}
            </strong>
          </>
        ),
        method: selectedMethod,
        path: pathInput,
        description: descriptionInput,
      },
      type: `pathNode`,
      position: { x: 100, y: 100 },
      selected: false,
    };
    setElements([...elements, node]);

    setPathInput('');
    setDescriptionInput('');
    setSelectedMethod(initialMethod);
  };

  return (
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
            <SelectMethod
              selectedMethod={selectedMethod}
              setSelectedMethod={setSelectedMethod}
            />
            <Description
              descriptionInput={descriptionInput}
              setDescriptionInput={setDescriptionInput}
            />
            <AddPathBtn addNode={addNode} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Editor;
