import { combineReducers } from 'redux';
import AuthReducer from './Auth.slice';
import UseChallengeCate from './ChallengeCate.slice';

export default combineReducers({
    Auth: AuthReducer,
    ChallengeCate: UseChallengeCate
})