import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/1337.css';

const Inspector = ({ selectedEl }) => {
  const [isOpen, setIsOpen] = useState(true);
  const closeInspector = () => {
    if (selectedEl) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="flow-root">
      {selectedEl ? (
        <Transition show={isOpen}>
          <div id="inspector">
            <div>
              <JSONPretty
                id="json-pretty"
                data={selectedEl}
                style={{ fontSize: '.64rem' }}
                mainStyle="padding:1em"
                valueStyle="font-size:1em"
              ></JSONPretty>
            </div>
          </div>
        </Transition>
      ) : null}
    </div>
  );
};

export default Inspector;
