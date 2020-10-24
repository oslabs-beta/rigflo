import React from 'react';

const Description = () => {
  return (
    <div className="mt-6 sm:mt-5">
      <div>
        <label
          htmlFor="path"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Description
        </label>
        <div className="flex mt-1 rounded-md shadow-sm">
          <textarea
            id="description"
            className="flex-1 block w-full px-3 py-2 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
            placeholder="a little about the route"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
