const createStore = (reducer, initialState = {}) => {
	const handler = {
		get: function(obj, prop) {
			return prop in obj ? obj[prop] : 'state';
		},
	};

	const store = new Proxy({}, handler);
	store.state = initialState;
	store.listeners = [];

	store.getState = () => store.state;

	store.subscribe = listener => {
		store.listeners.push(listener);
	};

	store.dispatch = action => {
		store.state = reducer(store.state, action);
		store.listeners.forEach(listener => listener());
	};

	return store;
};
