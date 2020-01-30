import thunk from 'redux-thunk';
import RootReducer from './RootReducer';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(
	RootReducer,
	applyMiddleware(thunk)
);

