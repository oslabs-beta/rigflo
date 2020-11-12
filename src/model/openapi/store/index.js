import create from 'zustand';

import middleware from './middleware';
import initialState from './initialState';
import actions from './actions';

export default create(
  middleware(() => ({
    ...initialState,
    ...actions,
  })),
);
