import React from 'react';

import OverContext from './overstateful';
import { useOverProvider } from './over-hooks';

export const OverConsumer = OverContext.Consumer;

export const OverProvider = ({ store, children }) => {
  return React.createElement(
    OverContext.Provider,
    {
      value: useOverProvider({
        initialState: store.state,
        reducers: store.reducers ? store.reducers : [],
      }),
    },
    children
  );
};
