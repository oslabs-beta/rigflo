import React, { useEffect } from 'react';
import './tailwind.output.css';

import Shell from './components/Shell';
import OASDocument from './services/document';

function App() {
  useEffect(() => {
    (async () => {
      try {
        const document = OASDocument;
        await document.init();
        const paths = await document.getPaths();
        console.log(paths);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return <Shell />;
}

export default App;
