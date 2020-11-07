import React, { useState } from 'react';
import { useElements } from '../../hooks/useElements';
import { removeElements } from 'react-flow-renderer';

const DeleteProject = () => {
  const [elements, setElements] = useElements();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setElements(removeElements([elements], elements));
    setIsDeleted(true);
  };

  return (
    <>
      <a
        href="#"
        onClick={handleDelete}
        className="inline-block px-4 py-2 mt-4 ml-4 text-sm leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
      >
        {isDeleted ? 'Successfully Deleted' : 'Delete Project'}
      </a>
    </>
  );
};

export default DeleteProject;
