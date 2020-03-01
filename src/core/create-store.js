import thunk from './thunk';
import store from './store';

const createStore = (initialState = {}, reducers, ...rest) => {
  store.reducers = reducers;
  store.state = initialState;
  store.getState = store;
  store.thunk = () => thunk();
  store.rest = { ...rest };
  return store;
};

export default createStore;
