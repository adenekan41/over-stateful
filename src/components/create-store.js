import dispatch from './dispatch';
import provider from './provider';
import getState from './get-state';
import thunk from './thunk';

const createStore = (reducer, initialState = {}) => {
  store.state = initialState;
  store.listeners = [];
  store.dispatch = () => dispatch(reducer);
  store.provider = listners => provider(listners);
  dispatch({});
  store.getState = () => getState();
  store.thunk = () => thunk();

  return store;
};

export default createStore;
