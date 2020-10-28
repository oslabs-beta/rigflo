import React, { useRef } from 'react';
import { useElements } from '../hooks/useElements';
import yaml from 'js-yaml';

const Toolbar = () => {
  const [elements] = useElements();
  const downloadRef = useRef(null);
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
    event.preventDefault();
    const yamlData = jsonToYaml();
    // downloadRef.current.href = toDataURL(yamlData);
    const link = document.createElement('a');
    link.href = toDataURL(yamlData);
    link.download = 'spec.yaml';
    link.click();
    // window.open(toDataURL(yamlData));
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-purple-700">
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div>
          <a
            href="#"
            onClick={downloadYaml}
            ref={downloadRef}
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0"
            download
          >
            Download YAML
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
