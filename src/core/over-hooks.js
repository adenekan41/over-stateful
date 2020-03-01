import { useContext, useReducer } from 'react';
import OverContext from './overstateful';

export function useOverState(mapOverState, mapOverDispatch) {
  const { state, dispatch } = useContext(OverContext);
  return [
    mapOverState ? mapOverState(state) : state,
    mapOverDispatch ? mapOverDispatch(dispatch) : dispatch,
  ];
}

function reduceState(reducers, state, action) {
  return reducers.reduce(
    (nextState, reducer) => reducer(nextState, action) || nextState,
    state
  );
}

export function useOverProvider({ initialState, reducers, middleware = [] }) {
  const [state, _dispatch] = useReducer(
    (state, action) => reduceState(reducers, state, action),
    initialState
  );

  function dispatch(action) {
    if (typeof action === 'function' && action) {
      return action(dispatch, state);
    }

    return _dispatch(action);
  }

  return { state, dispatch };
}
