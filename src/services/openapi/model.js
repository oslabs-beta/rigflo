import { LocalStorageProvider } from './storage';

export class DocumentModel {
  constructor({ source = {}, storageProvider = LocalStorageProvider }) {
    this.source = source;
    this.storageProvider = storageProvider;
  }

  info() {
    // return an object with which you can access the info object
    // but also that acts as a proxy to send
  }

  paths() {
    return new PathsObject();
  }
}

document.paths().getElements();
