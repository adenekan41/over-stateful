import React from 'react';
import PropTypes from 'prop-types';

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

OverProvider.propTypes = {
  initialState: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  reducers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
