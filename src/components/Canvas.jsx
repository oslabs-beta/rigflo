import React, { useState } from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';

import ServerNode from './nodes/ServerNode';
import PathNode from './nodes/PathNode';

export default function Canvas() {
  // Initial root node state
  // NOTE: This is local state for the convenience of this component.
  //       Use the ReactFlowProvider store to interact with the elements
  //       outside of this component.
  const [elements, setElements] = useState([
    {
      id: `${Date.now()}`,
      type: 'input',
      data: {
        label: 'Root',
        method: 'GET',
        path: '/',
        description: 'root',
      },
      position: { x: 250, y: 0 },
      selected: false,
    },
  ]);

  // The various ReactFlow component handler props
  const reactFlowHandlers = {
    onLoad(instance) {
      instance.fitView();
    },

    onConnect(params) {
      setElements((elements) => addEdge(params, elements));
    },

    onPaneClick() {},

    onElementsRemove(elementsToRemove) {
      setElements((elements) => removeElements(elementsToRemove, elements));
    },
  };

  // Minimap props for rendering node colors properly
  const miniMapFunctions = {
    nodeStrokeColor(node) {
      const nodeColors = {
        input: '#0041d0',
        pathNode: 'green',
        output: '#ff0072',
        default: '#1a192b',
      };
      return nodeColors[node.type] || node.style?.background || '#eee';
    },
    nodeColor(node) {
      return node.style?.background || '#fff';
    },
  };

  return (
    <ReactFlow
      nodeTypes={{ serverNode: ServerNode, pathNode: PathNode }}
      snapToGrid={true}
      snapGrid={[15, 15]}
      elements={elements}
      {...reactFlowHandlers}
    >
      <Background variant="dots" gap={12} size={0.5} />
      <Controls style={{ bottom: '150px' }} />
      <MiniMap
        style={{ marginBottom: 100 }}
        borderRadius={2}
        {...miniMapFunctions}
      />
    </ReactFlow>
  );
}
