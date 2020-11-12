import React, { useContext } from 'react';
import { DocumentModel } from '../model/DocumentModel';

const DocumentContext = React.createContext();
DocumentContext.displayName = 'DocumentContext';

export const DocumentProvider = (props) => {
  const document = new DocumentModel();

  return (
    <DocumentContext.Provider value={document}>
      {props.children}
    </DocumentContext.Provider>
  );
};

/** Provides access to the OpenAPI Document
 * @returns {DocumentModel}
 */
export const useDocument = () => useContext(DocumentContext);
