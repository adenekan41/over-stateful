import thunk from './thunk';
import store from './store';

/**
 * Create Store Core
 * @param {Object} initialState
 * @param {(Object | Array)} reducers
 * @param  {...any} rest
 * @returns {Object}
 */

const createStore = (initialState = {}, reducers, ...rest) => {
  store.reducers = reducers;
  store.state = initialState;
  store.getState = store;
  store.thunk = () => thunk();
  store.rest = { ...rest };
  return store;
};

export default createStore;
