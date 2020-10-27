import React from 'react';

const Path = ({ pathInput, setPathInput }) => {
  return (
    <div className="mt-6 sm:mt-5">
      <div>
        <label
          htmlFor="path"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Path
        </label>
        <div className="flex mt-1 rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
            /example
          </span>
          <input
            id="path"
            className="flex-1 block w-full px-3 py-2 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
            placeholder="pets"
            value={pathInput}
            onChange={(event) => setPathInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Path;
