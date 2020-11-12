import create from 'zustand';
import { produce } from 'immer';

// const noop = () => {};

const immer = (config) => (set, get, api) =>
  config((fn) => set(produce(fn)), get, api);

const useStore = create(
  immer(() => ({
    openapi: '3.0.0',
    info: {
      title: 'My New API',
      version: '0.0.1',
      description: '',
      termsOfService: '',
    },
  })),
);

export default useStore;
