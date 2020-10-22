import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronRight } from 'heroicons-react';

const methods = [
  { id: 1, name: 'GET', unavailable: false },
  { id: 2, name: 'PUT', unavailable: false },
  { id: 3, name: 'POST', unavailable: false },
];

function SelectMethod() {
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);

  return (
    <div className="mt-6 sm:mt-5">
      <div className="space-y-1">
        <Listbox value={selectedMethod} onChange={setSelectedMethod}>
          <Listbox.Button>
            {({ open }) => (
              <>
                <Listbox.Label
                  id="listbox-label"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Method
                </Listbox.Label>
                {/* <span>More options</span> */}
                <ChevronRight
                  className={`${open ? 'transform rotate-90' : ''}`}
                />
              </>
            )}
          </Listbox.Button>

          <Listbox.Options>
            {methods.map((method) => (
              <Listbox.Option
                key={method.id}
                value={method}
                disabled={method.unavailable}
              >
                {method.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  );
}

export default SelectMethod;
