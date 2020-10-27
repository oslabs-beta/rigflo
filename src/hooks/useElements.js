// import React, { useContext, useState } from 'react';

// const ElementsContext = React.createContext();
// ElementsContext.displayName = 'SelectionContext';

// export const ElementsProvider = (props) => {
//   const [elements, setElements] = useState([
//     {
//       id: '1',
//       type: 'input',
//       data: {
//         label: <strong>Root</strong>,
//         method: 'GET',
//         path: '/',
//         description: 'root',
//       },
//       position: { x: 250, y: 0 },
//       selected: false,
//     },
//   ]);

//   return (
//     <ElementsContext.Provider value={[elements, setElements]}>
//       {props.children}
//     </ElementsContext.Provider>
//   );
// };

// /** Provides access to the currently selected nodes
//  * @returns {import('react-flow-renderer').Elements[]}
//  */
// export const useSelection = () => useContext(ElementsContext);
