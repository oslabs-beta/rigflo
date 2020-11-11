import React, { useContext, useState } from 'react';

const ElementsContext = React.createContext();
ElementsContext.displayName = 'ElementsContext';

export const ElementsProvider = (props) => {
  const [elements, setElements] = useState([]);

  return (
    <ElementsContext.Provider value={[elements, setElements]}>
      {props.children}
    </ElementsContext.Provider>
  );
};

/** Provides access to the elements in the flow
 * @returns {[import('react-flow-renderer').Elements[], Function]}
 */
export const useElements = () => {
  const [elements, setElements] = useContext(ElementsContext);
  return [elements || [], setElements];
};
