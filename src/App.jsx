import React from 'react';
import './tailwind.output.css';

import { SelectionProvider } from './hooks/useSelection';
import { ReactFlowProvider } from 'react-flow-renderer';
import Layout from './Layout';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

const App = () => {
  return (
    <ReactFlowProvider>
      <SelectionProvider>
        <Layout sidebar={<Sidebar />}>
          <Canvas />
        </Layout>
      </SelectionProvider>
    </ReactFlowProvider>
  );
};

export default App;
