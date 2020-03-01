import { useContext, useReducer } from 'react';
import OverContext from './overstateful';

/**
 *
 * @param {*} initialState
 * @param {*} reducers
 */

export const useOverProvider = ({ initialState, reducers }) => {
  const [state, _dispatch] = useReducer(
    (state, action) =>
      reducers.reduce(
        (nextState, reducer) => reducer(nextState, action) || nextState,
        state
      ),
    initialState
  );

  /**
   *
   * @param {*} action
   */

  function dispatch(action) {
    if (typeof action === 'function' && action) {
      return action(dispatch, state);
    }

    return _dispatch(action);
  }

  return { state, dispatch };
};

/**
 *
 * @param {*} mapOverState
 * @param {*} mapOverDispatch
 */

export const useOverState = (mapOverState, mapOverDispatch) => {
  const { state, dispatch } = useContext(OverContext);
  return [
    mapOverState ? mapOverState(state) : state,
    mapOverDispatch ? mapOverDispatch(dispatch) : dispatch,
  ];
};
