import AxiosClient from './axiosClient';

const AuthApi = {
    async login(data) {
        const url = '/auth/signin';
        return AxiosClient.post(url, data, { withCredentials: true })
    },

    async register(data) {
        const url = '/auth/signup';
        return AxiosClient.post(url, data, { withCredentials: true })
    },

    async logout() {
        const url = '/auth/signout';
        return AxiosClient.get(url, { withCredentials: true })
    }
}

export default AuthApi