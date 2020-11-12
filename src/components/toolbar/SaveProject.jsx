import React, { useState, useEffect } from 'react';
import { useElements } from '../../hooks/useElements';
import Modal from 'react-modal';
import { X } from 'heroicons-react';

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

const SaveProject = () => {
  // Hook
  const useLocalStorage = (key, initialValue) => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    // console.log(key, initialValue);
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Save state
        setIsSaved(true);
        setStoredValue(initialValue);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  };

  const [elements, setElements] = useElements();
  const [isSaved, setIsSaved] = useState(false);
  const [savedText, setSavedText] = useState('Save Project');
  const [projectName, setProjectName] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useLocalStorage('rigflo-project', elements);
  const [modalText, setModalText] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setProject('rigflo-project', elements);
    setModalOpen(!isModalOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setSavedText('Saved!');
    const timer = setTimeout(() => {
      setIsSaved(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [isSaved]);

  return (
    <>
      <a
        href="#"
        onClick={toggleModal}
        className="inline-block px-4 py-2 mt-4 ml-4 text-sm font-bold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
      >
        {isSaved ? savedText : 'Save Project'}
      </a>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Save project dialog"
      >
        {!elements.length ? (
          <div
            className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
            role="alert"
          >
            <p className="font-bold">
              Warning
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3 mt-4 mr-4">
                <X
                  className="w-6 h-6 text-orange-700 cursor-pointer fill-current"
                  onClick={toggleModal}
                />
              </span>
            </p>
            <p>Cannot save an empty project. Add some nodes.</p>
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
