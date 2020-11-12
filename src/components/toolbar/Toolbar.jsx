import React from 'react';
import YamlButton from './YamlButton';
import DeleteProject from './DeleteProject';
import SaveProject from './SaveProject';
import PushToGithub from './PushToGithub';

const Toolbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-purple-400">
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div>
          <YamlButton />
          <DeleteProject />
<<<<<<< HEAD
          <SaveProject />
          <PushToGithub />
=======
          {/* <SaveProject /> */}
>>>>>>> main
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
