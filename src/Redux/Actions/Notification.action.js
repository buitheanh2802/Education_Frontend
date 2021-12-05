import * as reducer from './../Slices/Notification.slice';
import NotificationAPI from './../../Apis/NotificationApi';

export const notificationGets = (token) => dispatch => {
    dispatch(reducer.startCall({ callType: 'list' }));
    return NotificationAPI.gets(token)
        .then(({ data: { models } }) => {
            dispatch(reducer.gets({ data: models }))
        })
        .catch(err => {
            dispatch(reducer.catchError({ errors: err.response.data, callType: 'list' }))
        })
}