import { createStateFragment } from './utils/store';
import { useCallback } from 'react';

export function createInfoStore(infoObject) {
  const state = { ...infoObject };

  const actions = (set) => ({
    setVersion(version) {
      set((state) => (state.version = version));
    },
    setTitle(title) {
      set((state) => (state.title = title));
    },
    setLicense(license) {
      set((state) => (state.license = license));
    },
  });

  const dump = (state) => state;

  return createStateFragment({ state, actions, dump });
}

export function createPathsStore({ root, entities }) {
  const pathsWithRouteKey = Object.entries(root.paths).reduce(
    (result, [route, id]) => {
      const pathObject = {
        ...entities.paths[id],
        route,
      };

      return {
        [id]: pathObject,
        ...result,
      };
    },
    {},
  );

  const state = {
    pathList: root.paths,
    paths: pathsWithRouteKey,
    operations: entities.operations,
  };

  const actions = (set) => ({});

  const selectors = (useStore) => ({
    usePathList() {
      return useStore((state) => state.pathList);
    },
    usePathOperations(id) {
      if (id === undefined) return useStore((state) => state.paths);
      return useStore(useCallback((state) => state.paths[id], [id]));
    },
    useOperationList(pathId) {},
  });

  return createStore(state, actions, selectors);
}
