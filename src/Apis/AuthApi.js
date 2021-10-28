import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const AuthApi = {
    async login(data) {
        const url = '/auth/signin';
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async register(data) {
        const url = '/auth/signup';
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async logout() {
        const url = '/auth/signout';
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async profile() {
        const url = '/auth/profile/me';
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async role() {
        const url = '/auth/profile/role';
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    }
}

export default AuthApi
