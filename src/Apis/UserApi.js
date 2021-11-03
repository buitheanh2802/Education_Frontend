import AxiosClient from './AxiosClient';

const UserApi = {
    async get(userId) {
        const url = `/user/${userId}`;
        return AxiosClient.get(url, { withCredentials: true })
    },

    async update(userId) {
        const url = `/user/${userId}`;
        return AxiosClient.update(url, { withCredentials: true })
    }
}

export default UserApi
