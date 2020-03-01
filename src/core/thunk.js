/**
 *
 * @param {*} cb
 * @param {*} request
 */

const Async = (cb, request) => {
  request(cb);
};

/**
 *
 * @param {*} cb
 * @param {*} request
 * @param {*} delay
 */

const thunk = (cb, request, delay) => {
  if (delay) {
    return setTimeout(() => {
      Async(cb, request);
    }, delay);
  }
  Async(cb, request);
};

export default thunk;
