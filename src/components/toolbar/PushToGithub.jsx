import React, { useState, useEffect } from 'react';
import { useElements } from '../../hooks/useElements';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PushToGithub = () => {
  return (
    <>
      <a
        href="#"
        className="inline-block px-4 py-2 mt-4 ml-4 text-sm leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
      >
        Push to Github
      </a>
    </>
  );
};

export default PushToGithub;
