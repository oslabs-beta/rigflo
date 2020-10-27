import React from 'react';
import './tailwind.output.css';

import { SelectionProvider } from './hooks/useSelection';
import Shell from './components/Shell';

const App = () => {
  return (
    <SelectionProvider>
      <Shell />
    </SelectionProvider>
  );
};

export default App;
