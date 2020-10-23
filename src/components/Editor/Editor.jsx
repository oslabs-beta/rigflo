import React from 'react';
import Path from './Path';
import SelectMethod from './SelectMethod';
import Description from './Description';
import AddPathBtn from './AddPathBtn';

export default function Editor({ addNode }) {
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
            <Path />
            <SelectMethod />
            {/* <Description /> */}
            <AddPathBtn addNode={addNode} />
          </div>
        </div>
      </form>
    </div>
  );
}
