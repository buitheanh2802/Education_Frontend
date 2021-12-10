import AxiosClient from './AxiosClient';

const NotificationApi = {
    gets(token,params){
        const url = '/notification';
        return AxiosClient.get(url,{
            headers : {
                authorization : `Bearer ${token}`
            },
            params : params
        })
    },
    create(token,body,sendToUserId){
        const url = `/notification/${sendToUserId}`;
        return AxiosClient.post(url,body,{
            headers : {
                authorization : `Bearer ${token}`
            },
        })
    }
}

export default NotificationApi;