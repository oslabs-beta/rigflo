import React from 'react';

const Inspector = (props) => {
  return (
    <div id="inspector">
      <div>
        <pre>{JSON.stringify(props)}</pre>
      </div>
    </div>
  );
};

export default Inspector;
