/**
 *
 * @param {Function} cb
 * @param {Function} request
 * @callback request
 */

const Async = (cb, request) => {
  request(cb);
};

/**
 * Thunk Definition
 * @param {Function} cb
 * @param {Function} request
 * @param {Boolean} delay
 * @default
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
