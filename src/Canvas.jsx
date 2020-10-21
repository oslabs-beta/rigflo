import React from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'react-flow-renderer';

const initialElements = [
  {
    id: 'provider-1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
  },
  { id: 'provider-2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: 'provider-3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
  { id: 'provider-4', data: { label: 'Node 4' }, position: { x: 400, y: 200 } },
  {
    id: 'provider-e1-2',
    source: 'provider-1',
    target: 'provider-2',
    animated: true,
  },
  { id: 'provider-e1-3', source: 'provider-1', target: 'provider-3' },
];

interface CanvasProps {}

const Canvas = ({}: CanvasProps) => {
  return (
    <ReactFlow elements={initialElements}>
      <Background variant="dots" gap={12} size={0.5} />
      <Controls style={{ width: '32px', height: '32px', bottom: '100px' }} />
    </ReactFlow>
  );
};
export default Canvas;
