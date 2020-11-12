import create from 'zustand';
import { produce } from 'immer';

const noop = () => {};

const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

export default 

export const createStore = (
  state,
  createActions = noop,
  createSelectors = noop,
) => {
  const useStore = create(
    immer((set) => ({
      ...state,
      ...createActions(set),
    })),
  );

  return {
    useStore,
    ...createSelectors(useStore),
  };
};

export const createStateFragment = ({
  state,
  actions = noop,
  selectors = noop,
  dump = noop,
}) => {
  const useStore = createStore(state, actions, selectors);
  return {
    useStore,
    dump: () => dump(useStore.useStore.getState()),
  };
};
