import AxiosClient from './AxiosClient';
import LocalStorage from 'src/Helpers/Storage';

const UserApi = {
    async get(userId) {
        const url = `/user/${userId}`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async update(userId) {
        const url = `/user/${userId}`;
        return AxiosClient.update(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    }
}

export default UserApi
