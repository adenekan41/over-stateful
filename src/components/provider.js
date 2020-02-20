const provider = listener => {
  listeners.push(listener);
  return () => {
    listeners.filter(lis => lis !== listener);
  };
};

export default provider;
