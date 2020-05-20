import { useContext, useReducer } from 'react';
import OverContext from './overstateful';

/**
 * Use Over Provider hooks
 * @param {Object} initialState
 * @param {Object} reducers
 * @returns {Object} state, dispatch as _dispatch
 */

export const useOverProvider = ({ initialState, reducers }) => {
  // Receive the initialstate and the reducer
  // then we map the custom dispatch to the usereducer hooks from react

  const [state, _dispatch] = useReducer(
    (state, action) =>
      reducers.reduce((acc, reducer) => reducer(acc, action) || acc, state),
    initialState
  );

  // Return the state after its been reduced and its dispatch object
  return { state, dispatch: _dispatch };
};

/**
 * Use Over State Hooks
 * We consume  our state component and with the use overstate hooks
 * @param {Function} mapOverState
 * @param {Function} mapOverDispatch
 * @returns {Array}
 */

export const useOverState = (mapOverState, mapOverDispatch) => {
  const { state, dispatch } = useContext(OverContext);

  return [
    mapOverState ? mapOverState(state) : state,
    mapOverDispatch ? mapOverDispatch(dispatch) : dispatch,
  ];
};
