import React from 'react';

const Toolbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-purple-700 p-6">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div>
          <a
            href="#"
            target="_blank"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download YAML
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
