import AxiosClient from './AxiosClient'
import LocalStorage from 'src/Helpers/Storage';

const FollowApi = {
    follow(username) {
        const token = localStorage.getItem('_token_');
        const url = `/follow/${username}`;
        return AxiosClient.post(url, { username: username }, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    unFollow(username) {
        const token = localStorage.getItem('_token_');
        const url = `/follow/${username}`;
        return AxiosClient.delete(url, { username: username }, {
            headers: {
                authorization : `Bearer ${token}`
            }
        })
    }
}

export default FollowApi
