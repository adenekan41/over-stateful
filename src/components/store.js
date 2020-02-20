const store = new Proxy({}, handler);
const handler = {
	get: function(obj, prop) {
		return prop in obj ? obj[prop] : 'state';
	},
};

export default store;
