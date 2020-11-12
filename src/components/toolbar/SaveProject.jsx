import React, { useState } from 'react';
import { useElements } from '../../hooks/useElements';
import Modal from 'react-modal';
import { X } from 'heroicons-react';

// Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
  },
};

Modal.setAppElement('#root');

// helper
const saveToDatabase = (uri, config = {}) => {
  fetch(uri, config).then((res) => console.log(res));
};

// Saves a project to local storage and database
const SaveProject = () => {
  const [elements] = useElements();
  const [isModalOpen, setModalOpen] = useState(false);
<<<<<<< HEAD

  const initialProject = () => 'rigflo-project';
  const [projectName, setProjectName] = useState(initialProject);

  const handleSave = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    // update local storage
    window.localStorage.setItem(projectName, JSON.stringify(elements));

    // close modal
=======
  const [project, setProject] = useLocalStorage('rigflo-project', elements);
  const [modalText, setModalText] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setProject('rigflo-project', elements);
>>>>>>> main
    setModalOpen(!isModalOpen);

    // send to database
    try {
      console.log('sending to database');
      saveToDatabase('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project: elements }),
      });
    } catch (error) {
      console.error({ error });
      return error.message;
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setProjectName(value);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="inline-block px-4 py-2 mt-4 ml-4 text-sm font-bold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
      >
        Save Project
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Save project dialog"
      >
<<<<<<< HEAD
        <h1 className="text-center">Save Project</h1>
        <form className="w-full max-w-sm" onSubmit={handleSave}>
          <div className="flex items-center py-2 border-b border-teal-500">
            <input
              className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
              type="text"
              placeholder="Project name"
              aria-label="Project name"
              value={projectName}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button
              className="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
              type="submit"
            >
              Save
            </button>
=======
        {!elements.length ? (
          <div
            class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
            role="alert"
          >
            <p class="font-bold">
              Warning
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3 mt-4 mr-4">
                <X
                  className="w-6 h-6 text-orange-700 cursor-pointer fill-current"
                  onClick={toggleModal}
                />
              </span>
            </p>
            <p>Cannot save an empty project. Add some nodes.</p>
>>>>>>> main
          </div>
        ) : (
          <>
            <h1 className="text-center">Save Project</h1>
            <form className="w-full max-w-sm">
              <div className="flex items-center py-2 border-b border-teal-500">
                <input
                  className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                  type="text"
                  placeholder="Project name"
                  aria-label="Project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
                <button
                  className="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </>
        )}
      </Modal>
    </>
  );
};

export default SaveProject;
