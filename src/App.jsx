import React, { useEffect } from 'react';
import './tailwind.output.css';

import Shell from './components/Shell';
import { OASDocumentClient } from './services/document';

function App() {
  useEffect(() => {
    (async () => {
      try {
        const doc = new OASDocumentClient();
        await doc.isReady;
        const paths = await doc.getPaths();
        console.log(paths);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return <Shell />;
}

export default App;
