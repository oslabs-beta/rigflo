import React from 'react';

const AddPathBtn = ({ addNode, path, method }) => {
  return (
    <div>
      {path === '' || method === 'Select Method' ? (
        <button
          className="px-4 py-2 mt-4 font-bold text-white bg-indigo-700 rounded hover:bg-indigo-600 cursor-not-allowed opacity-50"
          onClick={addNode}
          id="add-path-btn"
          disabled
        >
          Add Path
        </button>
      ) : (
        <button
          className="px-4 py-2 mt-4 font-bold text-white bg-indigo-700 rounded hover:bg-indigo-600"
          onClick={addNode}
          id="add-path-btn"
        >
          Add Path
        </button>
      )}
    </div>
  );
};

export default AddPathBtn;
