import * as reducer from './../Slices/Notification.slice';
import NotificationAPI from './../../Apis/NotificationApi';

export const notificationGets = (token) => dispatch => {
    dispatch(reducer.startCall({ callType: 'list' }));
    return NotificationAPI.gets(token)
        .then(({ data }) => dispatch(reducer.gets({ data: data.data })))
        .catch(err => dispatch(reducer.catchError({ errors: err.response.data, callType: 'list' })))
}
export const notificationReadMore = (token, params) => dispatch => {
    dispatch(reducer.startCall({ callType: 'readMore' }))
    return NotificationAPI.gets(token, params)
        .then(({ data }) => dispatch(reducer.readMore({ data: data.data })))
        .catch(err => dispatch(reducer.catchError({ errors: err.response.data, callType: 'readMore' })))
}