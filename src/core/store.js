/**
 * @constant
 */
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 'state';
  },
};

/**
 * Proxy Store
 * @constant
 * @default
 */
const store = new Proxy({}, handler);

export default store;
