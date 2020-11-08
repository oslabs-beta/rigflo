import React, { useState, useEffect } from 'react';
import { useElements } from '../../hooks/useElements';

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
  const [project, setProject] = useLocalStorage('project', elements);

  const handleSave = () => {
    setProject('project', elements);
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
        onClick={handleSave}
        className="inline-block px-4 py-2 mt-4 ml-4 text-sm leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
      >
        {isSaved ? savedText : 'Save Project'}
      </a>
    </>
  );
};

export default SaveProject;
