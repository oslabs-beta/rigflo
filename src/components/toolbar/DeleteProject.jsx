import React, { useState, useEffect } from 'react';
import { useElements } from '../../hooks/useElements';
import { removeElements } from 'react-flow-renderer';

const DeleteProject = () => {
  const [elements, setElements] = useElements();
  const [isDeleted, setIsDeleted] = useState(false);
  const [deletedText, setDeletedText] = useState('Delete Project');

  const handleDelete = () => {
    const removeAllButRoot = elements.filter((el) => el.type !== 'input');
    setElements(removeElements(removeAllButRoot, elements));
    setIsDeleted(true);
    // delete project from localstorage
    if (window.localStorage.getItem('project-1')) {
      window.localStorage.removeItem('project-1');
    }
  };

  useEffect(() => {
    setDeletedText('Deleted!');
    const timer = setTimeout(() => {
      setIsDeleted(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isDeleted]);
  return (
    <>
      <a
        href="#"
        onClick={handleDelete}
        className="inline-block px-4 py-2 mt-4 ml-4 text-sm font-bold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
      >
        {isDeleted ? deletedText : 'Delete Project'}
      </a>
    </>
  );
};

export default DeleteProject;
