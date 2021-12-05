import AxiosClient from './AxiosClient';

const NotificationApi = {
    gets(token){
        const url = '/notification';
        return AxiosClient.get(url,{
            headers : {
                authorization : `Bearer ${token}`
            }
        })
    }
}

export default NotificationApi;