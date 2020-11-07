import React from 'react';
import './tailwind.output.css';
import { Router, Link } from '@reach/router';

import { ElementsProvider } from './hooks/useElements';
import { ReactFlowProvider } from 'react-flow-renderer';
import Layout from './Layout';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import Callback from './pages/login/Callback';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <ReactFlowProvider>
      <ElementsProvider>
        <AuthProvider>
          <Router>
            <Callback path="/login/callback" />
          </Router>
          <Layout sidebar={<Sidebar />}>
            <Canvas />
          </Layout>
        </AuthProvider>
      </ElementsProvider>
    </ReactFlowProvider>
  );
};

export default App;
