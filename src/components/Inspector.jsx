import React from 'react';

const Inspector = ({ selectedEl }) => {
  return (
    <div id="inspector">
      <div>
        <pre>{JSON.stringify(selectedEl)}</pre>
      </div>
    </div>
  );
};

export default Inspector;
