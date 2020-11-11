import React from 'react';
import './tailwind.output.css';

import { ReactFlowProvider } from 'react-flow-renderer';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import { ElementsProvider } from './hooks/useElements';

const App = () => {
  return (
    <ElementsProvider>
      <ReactFlowProvider>
        <Layout sidebar={<Sidebar />}>
          <Canvas />
        </Layout>
      </ReactFlowProvider>
    </ElementsProvider>
  );
};

export default App;
