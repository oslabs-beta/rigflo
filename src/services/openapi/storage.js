/**
 * @file Provides an abstraction layer over loading and saving documents.
 */

/** A simple localStorage storage provider */
export const LocalStorageProvider = {
  async loadDocument(name) {
    const contents = localStorage.getItem(`document-${name}`) || {};
    try {
      return JSON.parse(contents);
    } catch (err) {
      throw new Error(`couldn't load document: ${err}`);
    }
  },
  async saveDocument(name, json) {
    localStorage.setItem(`document-${name}`, JSON.stringify(json));
  },
};

/** A pointless in-memory storage provider just to have another example here. */
export const NoneStorageProvider = {
  async loadDocument(name) {
    if (!window.oasDocuments) window.oasDocuments = {};
    if (!window.oasDocuments[name]) window.oasDocuments[name] = {};

    return window.oasDocuments[name];
  },

  async saveDocument(name, json) {
    window.oasDocuments[name] = json;
  },
};
