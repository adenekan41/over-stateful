const handler = {
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : 'state';
  },
};
const store = new Proxy({}, handler);

export default store;
