import { produce } from 'immer';

const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

// TODO: add history middleware to enable undo/redo functionality
// export const history = (config) => (set, get, api) => {
// }

function chain(...fns) {
  return fns.reduce((chained, fn) => (...args) => fn(chained(...args)));
}

export default chain(immer);
