import React, { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const methods = ['GET', 'PUT', 'POST', 'DELETE'];

const SelectMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);

  return (
    <div className="mt-6 sm:mt-5">
      <div className="space-y-1">
        <Listbox
          as="div"
          className="space-y-1"
          value={selectedMethod}
          onChange={setSelectedMethod}
        >
          {({ open }) => (
            <>
              <Listbox.Label className="block text-sm font-medium leading-5 text-gray-700">
                Methods
              </Listbox.Label>
              <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                    <span id="method" className="block truncate">
                      {selectedMethod}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute w-full mt-1 bg-white rounded-md shadow-lg"
                >
                  <Listbox.Options
                    static
                    className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
                  >
                    {methods.map((method) => (
                      <Listbox.Option key={method} value={method}>
                        {({ selected, active }) => (
                          <div
                            className={`${
                              active
                                ? 'text-white bg-blue-600'
                                : 'text-gray-900'
                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                          >
                            <span
                              className={`${
                                selected ? 'font-semibold' : 'font-normal'
                              } block truncate`}
                            >
                              {method}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active ? 'text-white' : 'text-blue-600'
                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                              >
                                <svg
                                  className="w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default SelectMethod;
