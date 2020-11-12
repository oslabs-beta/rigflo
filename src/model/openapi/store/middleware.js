import { produce } from 'immer';

export const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

// TODO: add history middleware to enable undo/redo functionality
// export const history = (config) => (set, get, api) => {
// }
