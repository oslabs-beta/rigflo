import create from 'zustand';
// import shallow from 'zustand/shallow';
import yaml from 'js-yaml';
import { produce } from 'immer';

export class DocumentModel {
  constructor(
    source = {
      openapi: '3.0.0',
      info: {},
      paths: {},
      servers: {},
      components: {},
      security: [],
      tags: [],
      externalDocs: {},
    },
  ) {
    // TODO: attach __id keys to the entity objects (paths, schemas, etc...)
    // TODO: normalize the data before putting it into the store.
    this._use = create((set) => ({
      ...source,
      set: (fn) => set(produce(fn)),
    }));
  }

  /** Fetch the entire document. Use with caution. */
  use() {
    return this._use();
  }

  /** Convenience method to return the setter for the store. */
  _set() {
    return this._use((doc) => doc.set);
  }

  /** Hook for the info section */
  useInfo() {
    const info = this._use((doc) => doc.info);

    const set = this._set();
    const setInfo = (infoObject) => {
      set((doc) => {
        Object.assign(doc.info, infoObject);
      });
    };

    return [info, setInfo];
  }

  /** Hook for the servers section */
  useServers() {
    const servers = this._use((doc) => doc.servers);

    const set = this._set();
    const setServers = (serversArray) => {
      set((doc) => {
        doc.servers = serversArray;
      });
    };

    return [servers, setServers];
  }

  /** Hooks for the paths section */
  usePaths() {
    const paths = this._use((doc) => doc.paths);

    const set = this._set();
    const setPaths = (pathsObject) => {
      set((doc) => {
        Object.assign(doc.paths, pathsObject);
      });
    };

    return [paths, setPaths];
  }

  /** Convert the current document state to YAML */
  toYAML() {
    // TODO: if the data has been normalized, we'll need logic here for denormalizing it.
    return yaml.dump(this._use.getState());
  }
}
