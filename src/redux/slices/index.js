import { combineReducers } from 'redux';
import userReducer from './user.slice';
import notificationReducer from './notification.slice';

export default combineReducers({
    user: userReducer,
    notification: notificationReducer,
})