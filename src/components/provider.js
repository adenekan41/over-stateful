import store from './store';

const provider = listener => {
  store.listeners = [];
  store.listeners.push(listener);
  return () => {
    store.listeners.filter(lis => lis !== listener);
  };
};

export default provider;
