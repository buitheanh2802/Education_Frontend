import { combineReducers } from 'redux';
import AuthReducer from './Auth.slice';
import LoadingReducer from './Loading.slice'
export default combineReducers({
    Auth: AuthReducer,
    Loading: LoadingReducer
})