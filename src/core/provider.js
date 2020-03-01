import React from 'react';
import PropTypes from 'prop-types';

import OverContext from './overstateful';
import { useOverProvider } from './over-hooks';

export const OverConsumer = OverContext.Consumer;

const OverProvider = ({ initialState, reducers, children }) => {
  return (
    <OverContext.Provider
      value={useOverProvider({
        initialState,
        reducers: reducers ? reducers : [],
      })}
    >
      {children}
    </OverContext.Provider>
  );
};

OverProvider.propTypes = {
  initialState: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  reducers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
export default OverProvider;
