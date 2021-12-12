import { combineReducers } from 'redux';
import AuthReducer from './Auth.slice';
import UseChallengeCate from './ChallengeCate.slice';
import UseChallenge from './Challenge.slice';
import LoadingReducer from './Loading.slice';
import NotificationReducer from './Notification.slice';
import SocketService from './SocketService.slice';
import CommentsReducer from './Comments.slice';

export default combineReducers({
    Auth: AuthReducer,
    ChallengeCate: UseChallengeCate,
    Challenge: UseChallenge,
    Loading: LoadingReducer,
    Notification: NotificationReducer,
    SocketService: SocketService,
    Comments: CommentsReducer,
})