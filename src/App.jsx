import React from 'react';
import './tailwind.output.css';

import { ElementsProvider } from './hooks/useElements';
import { ReactFlowProvider } from 'react-flow-renderer';
import Layout from './Layout';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <ReactFlowProvider>
      <ElementsProvider>
        <Layout sidebar={<Sidebar />}>
          <Canvas />
        </Layout>
      </ElementsProvider>
    </ReactFlowProvider>
  );
};

export default App;
