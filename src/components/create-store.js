import dispatch from './dispatch';
import dispatch from './dispatch';
import subscribe from './subscribe';
import getState from './get-state';
import thunk from './thunk';

const createStore = (reducer, initialState = {}) => {
	store.state = initialState;
	store.listeners = [];
	store.dispatch = () => dispatch(reducer);
	store.subscribe = listners => subscribe(listners);
	store.getState = () => getState();
	store.thunk = () => thunk();

	return store;
};

export default createStore;
