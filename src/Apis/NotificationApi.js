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
    }
}

export default NotificationApi;