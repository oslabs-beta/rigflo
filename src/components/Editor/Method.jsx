import React from 'react';

export default function Method(props) {
  return (
    <div className="mt-6 sm:mt-5">
      <div className="space-y-1">
        <label
          id="listbox-label"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Assigned to
        </label>
        <div className="relative">
          <span className="inline-block w-full rounded-md shadow-sm">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
              className="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            >
              <span className="block truncate">GET</span>
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
            </button>
          </span>

          <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg">
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
            >
              <li
                id="listbox-item-0"
                role="option"
                className="relative py-2 pl-8 pr-4 text-gray-900 cursor-default select-none"
              >
                <span className="block font-normal truncate">POST</span>

                <span className="absolute inset-y-0 left-0 flex items-center pl-1.5">
                  {/* Heroicon name: check */}
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
              </li>
              <li
                id="listbox-item-0"
                role="option"
                className="relative py-2 pl-8 pr-4 text-gray-900 cursor-default select-none"
              >
                <span className="block font-normal truncate">PUT</span>

                <span className="absolute inset-y-0 left-0 flex items-center pl-1.5">
                  {/* Heroicon name: check */}
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
              </li>
              <li
                id="listbox-item-0"
                role="option"
                className="relative py-2 pl-8 pr-4 text-gray-900 cursor-default select-none"
              >
                <span className="block font-normal truncate">DELETE</span>

                <span className="absolute inset-y-0 left-0 flex items-center pl-1.5">
                  {/* Heroicon name: check */}
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
              </li>

              {/* More options... */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
