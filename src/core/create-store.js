import dispatch from './dispatch';
import provider from './provider';
import getState from './get-state';
import thunk from './thunk';
import store from './store';

export const createStore = (reducer, initialState = {}) => {
  store.reducer = reducer;
  store.state = initialState;
  store.listeners = [];
  store.dispatch = action => {
    store.state = reducer(store.state, action);
    store.listeners.forEach(listener => listener());
  };
  store.provider = listners => provider(listners);
  store.getState = () => getState();
  store.thunk = () => thunk();

  return store;
};
