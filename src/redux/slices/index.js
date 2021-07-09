import { combineReducers } from 'redux';
import accountReducer from './account.slice';
import todoReducer from './todo.slice';

export default combineReducers({
    account : accountReducer,
    todos : todoReducer
})