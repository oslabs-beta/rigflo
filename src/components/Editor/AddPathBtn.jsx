import React from 'react';

const AddPathBtn = ({ addNode }) => {
  return (
    <div>
      <button
        className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={addNode}
        id="add-path-btn"
        data-value="pathNode"
      >
        Add Path
      </button>
    </div>
  );
};

export default AddPathBtn;
