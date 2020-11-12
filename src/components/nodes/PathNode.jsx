import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
const PathNode = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        isValidConnection={(connection) => connection.source === 'some-id'}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <div>
        <strong>{data.label}</strong>
      </div>
    </>
  );
};

export default memo(PathNode);
