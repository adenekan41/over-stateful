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
      reducers.reduce((acc, reducer) => reducer(acc, action) || acc, state),
    initialState
  );

  return { state, dispatch: _dispatch };
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
