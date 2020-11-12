import React, { useRef, useState, useEffect } from 'react';
import { useElements } from '../../hooks/useElements';
import yaml from 'js-yaml';
import Modal from 'react-modal';
import { X } from 'heroicons-react';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    background: 'transparent',
    border: 'transparent',
  },
};

Modal.setAppElement('#root');
const YamlButton = () => {
  const [elements] = useElements();
  const downloadRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');
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
      if (elements.length) {
        const yamlData = jsonToYaml();
        const link = document.createElement('a');
        link.href = toDataURL(yamlData);
        link.download = 'spec.yaml';
        link.click();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleError = (e) => {
    e.preventDefault();
    setModalOpen(!isModalOpen);
  };
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  useEffect(() => {
    !elements.length ? setIsError(true) : setIsError(false);
    !elements.length
      ? setErrorText('No nodes on canvas. Cannot download YAML file.')
      : setErrorText(
          'All nodes must be connected from the root. Please look at your connections.',
        );
  }, [elements]);

  return (
    <>
      <a
        href="#"
        onClick={isError ? toggleModal : downloadYaml}
        ref={downloadRef}
        className="inline-block px-4 py-2 mt-4 text-sm font-bold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
        download={isError ? false : true}
      >
        Download YAML
      </a>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Save project dialog"
      >
        <div role="alert">
          <div className="p-8 px-4 py-2 font-bold text-white bg-red-500 rounded-t">
            Download error
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 mt-4 mr-4">
              <X
                className="w-6 h-6 text-white cursor-pointer fill-current"
                onClick={handleError}
              />
            </span>
          </div>

          <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b">
            <p>{errorText}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default YamlButton;
