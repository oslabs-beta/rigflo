import React from 'react';
import './tailwind.output.css';

import { RecoilRoot } from 'recoil';
import { ReactFlowProvider } from 'react-flow-renderer';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

const App = () => {
  return (
    <RecoilRoot>
      <ReactFlowProvider>
        <Layout sidebar={<Sidebar />}>
          <Canvas />
        </Layout>
      </ReactFlowProvider>
    </RecoilRoot>
  );
};

export default App;
