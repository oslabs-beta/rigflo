import React, { useContext, useState } from 'react';

const SelectionContext = React.createContext();
SelectionContext.displayName = 'SelectionContext';

export const SelectionProvider = (props) => {
  const [selection, setSelection] = useState([]);

  // const memoizedSelection = useMemo(() => selection, [selection]);

  return (
    <SelectionContext.Provider value={[selection, setSelection]}>
      {props.children}
    </SelectionContext.Provider>
  );
};

/** Provides access to the currently selected nodes
 * @returns {[import('react-flow-renderer').Elements[], Function]}
 */
export const useSelection = () => useContext(SelectionContext);
