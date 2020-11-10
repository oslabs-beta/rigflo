import React, { useRef, useState } from 'react';
import { useElements } from '../../hooks/useElements';
import yaml from 'js-yaml';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
const YamlButton = () => {
  const [elements] = useElements();
  const downloadRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  //putting here for now. will move back to server later
  const jsonToYaml = () => {
    const isEdge = (el) => el.source || el.target;

    const edges = [];
    const nodes = [];

    // Sort the nodes and edges
    elements.forEach((el) => (isEdge(el) ? edges : nodes).push(el));

    // Format the path nodes
    nodes.forEach(({ id, type, data: { path, method, description } }, i) => {
      nodes[i] = { id, type, path, method, description, paths: {} };
    });

    // Connect all the edges
    edges.forEach(({ source, target }) => {
      // Find the source and target nodes
      const sourceNode = nodes.find((n) => n.id === source);
      const targetNode = nodes.find((n) => n.id === target);

      // Note: this only works if every target has exactly one source
      const targetPaths = sourceNode.paths[targetNode.path] || {};
      targetPaths[targetNode.method] = targetNode;
      sourceNode.paths[targetNode.path] = targetPaths;
    });

    const root = nodes.find((n) => n.type === 'input');
    return yaml.dump(root);
  };

  const toDataURL = (yamlData) => {
    const base64Yaml = window.btoa(yamlData);
    const href = `data:text/yaml;base64,${base64Yaml}`;
    return href;
  };

  const downloadYaml = (event) => {
    try {
      event.preventDefault();
      const yamlData = jsonToYaml();
      // downloadRef.current.href = toDataURL(yamlData);
      const link = document.createElement('a');
      link.href = toDataURL(yamlData);
      link.download = 'spec.yaml';
      link.click();
      // window.open(toDataURL(yamlData));
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  const handleError = (e) => {
    e.preventDefault();
    setModalOpen(!isModalOpen);
    setIsError(false);
  };
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <a
        href="#"
        onClick={downloadYaml}
        ref={downloadRef}
        className="inline-block px-4 py-2 mt-4 text-sm font-bold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
        download
      >
        Download YAML
      </a>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Save project dialog"
      >
        <h1 className="text-center">Download Error</h1>
        <form className="w-full max-w-sm">
          <div className="flex items-center py-2 border-b border-teal-500">
            <h3>Node connection error:</h3>
            <p>
              All nodes must be connected from the root. Please look at your
              connections.
            </p>
            <button
              className="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
              type="button"
              onClick={handleError}
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default YamlButton;
