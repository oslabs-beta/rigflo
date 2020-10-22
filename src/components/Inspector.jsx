import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/1337.css';

const Inspector = ({ selectedEl }) => {
  return (
    <div id="inspector">
      <div>
        <JSONPretty
          id="json-pretty"
          data={selectedEl}
          style={{ fontSize: '.64rem' }}
          mainStyle="padding:1em"
          valueStyle="font-size:1em"
        ></JSONPretty>
      </div>
    </div>
  );
};

export default Inspector;
