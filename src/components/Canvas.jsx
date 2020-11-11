import React, { useState, useEffect } from 'react';
import * as ReactFlow from 'react-flow-renderer';

const { removeElements, addEdge, MiniMap, Controls, Background } = ReactFlow;

import ServerNode from './nodes/ServerNode';
import PathNode from './nodes/PathNode';
import { useElements } from '../hooks/useElements';

const Canvas = () => {
  const [elements, setElements] = useElements();
  // Hook
  const useLocalStorage = (key, initialValue) => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    // console.log(key, initialValue);
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Save state
        setStoredValue(initialValue);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  };

  const [project, setProject] = useLocalStorage('rigflo-project', elements);

  useEffect(() => {
    //hard coded for launch, can be updated later
    if (window.localStorage.getItem('rigflo-project')) {
      const savedData = JSON.parse(
        window.localStorage.getItem('rigflo-project'),
      );
      setElements(savedData);
    } else {
      setElements([
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
    }
  }, []);
  //update elemnts JSON in localStroage
  useEffect(() => {
    setProject('rigflo-project', elements);
  }, [elements]);

  // The various ReactFlow component handler props
  const reactFlowHandlers = {
    onLoad(instance) {
      instance.fitView();
      setProject('rigflo-project', elements);
    },

    onConnect(params) {
      setElements((elements) => addEdge(params, elements));
    },

    onPaneClick(event) {},

    onElementsRemove(elementsToRemove) {
      setElements((elements) => removeElements(elementsToRemove, elements));
    },
    onNodeDragStop(event, node) {
      elements.map((el) => {
        if (node.id === el.id) {
          el.position = node.position;
        }
      });
      setElements([...elements]);
      //update localStorage object
      setProject('rigflo-project', elements);
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
};

export default Canvas;
