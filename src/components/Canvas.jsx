import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

import ServerNode from './nodes/ServerNode';
import PathNode from './nodes/PathNode';

const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const nodeTypes = {
  serverNode: ServerNode,
  pathNode: PathNode,
};

const Canvas = (props) => {
  const {
    elements,
    onElementsRemove,
    onElementClick,
    onConnect,
    enableDeleteBtn,
    onSelectionChange,
  } = props;

  return (
    <>
      {/* //add logic to deactivate button if nothing is selected */}
      <button
        type="button"
        onClick={onElementsRemove}
        className="px-4 py-2 font-bold text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
        disabled={false}
      >
        Delete selected node
      </button>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onSelectionChange={onSelectionChange}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
        onElementClick={onElementClick}
        nodeTypes={nodeTypes}
      >
        <Background variant="dots" gap={12} size={0.5} />
        <Controls style={{ bottom: '150px' }} />
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';
            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;
            return '#fff';
          }}
          borderRadius={2}
        />
      </ReactFlow>
    </>
  );
};
export default Canvas;
