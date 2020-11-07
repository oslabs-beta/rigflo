import React from 'react';
import YamlButton from './YamlButton';
import DeleteProject from './DeleteProject';

const Toolbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-purple-500">
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div>
          <YamlButton />
          <DeleteProject />
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
