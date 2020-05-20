import React from 'react';

import OverContext from './overstateful';
import { useOverProvider } from './over-hooks';

/**
 * Overstateful Consumer
 * @function
 * @default
 * @constant
 */
export const OverConsumer = OverContext.Consumer;

/**
 * Over Provider Definition
 * @param {Object} object
 * @param {Object} object.store
 * @param {(Node | Object)} object.children
 * @returns {(Node | Object)}
 */
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
