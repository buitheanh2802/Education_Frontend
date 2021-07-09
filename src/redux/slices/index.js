import { combineReducers } from 'redux';
import accountReducer from './account.slice';

export default combineReducers({
    account : accountReducer
})