const Async = (cb, request) => {
  request(cb);
};
const thunk = (cb, request, delay) => {
  if (delay) {
    return setTimeout(() => {
      Async(cb, request);
    }, delay);
  }
  Async(cb, request);
};

export default thunk;
