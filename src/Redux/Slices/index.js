import { combineReducers } from 'redux';
import AuthReducer from './Auth.slice';

export default combineReducers({
    Auth: AuthReducer
})