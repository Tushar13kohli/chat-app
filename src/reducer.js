import { combineReducers } from 'redux';
import { userReducer } from './containers/App/reducer';

export const rootReducer = combineReducers({
	user: userReducer,
});
