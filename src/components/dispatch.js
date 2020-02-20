import store from './store';

const dispatch = action => {
  store.state = reducer(store.state, action);
  store.listeners.forEach(listener => listener());
};

export default dispatch;
