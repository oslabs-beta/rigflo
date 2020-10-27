import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

import ServerNode from './nodes/ServerNode';
import PathNode from './nodes/PathNode';
import { OASDocumentClient } from '../services/document';

const doc = new OASDocumentClient();

const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const nodeTypes = {
  serverNode: ServerNode,
  pathNode: PathNode,
};

const Canvas = ({
  elements,
  onElementsRemove,
  onElementClick,
  onConnect,
  onSelectionChange,
  onPaneClick,
}) => {
  const saveYAML = async () => {
    console.log({ doc });
    // await doc.isReady;
    const json = await doc.toYAML(elements);
    console.log(json);
  };

  const getMiniMapNodeStrokeColor = (node) => {
    const nodeColors = {
      input: '#0041d0',
      pathNode: 'green',
      output: '#ff0072',
      default: '#1a192b',
    };
    return nodeColors[node.type] || node.style?.background || '#eee';
  };

  const getMiniMapNodeColor = (node) => node.style?.background || '#fff';

  return (
    <>
      <button onClick={saveYAML}>Save YAML</button>
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
        onPaneClick={onPaneClick}
      >
        <Background variant="dots" gap={12} size={0.5} />
        <Controls style={{ bottom: '150px' }} />
        <MiniMap
          style={{ marginBottom: 100 }}
          nodeStrokeColor={getMiniMapNodeStrokeColor}
          nodeColor={getMiniMapNodeColor}
          borderRadius={2}
        />
      </ReactFlow>
    </>
  );
};
export default Canvas;
