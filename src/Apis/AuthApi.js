import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const AuthApi = {
    async login(data) {
        const url = '/auth/signin';
        return AxiosClient.post(url, data, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async register(data) {
        const url = '/auth/signup';
        return AxiosClient.post(url, data, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async logout() {
        const url = '/auth/signout';
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            },
            withCredentials: true
        })
    },

    profile() {
        const token = localStorage.getItem("_token_");
        const url = '/auth/profile/me';
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    },

    async role() {
        const url = '/auth/profile/role';
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async forgotPassword(email) {
        const url = '/auth/reset-password';
        return AxiosClient.post(url, email)
    },

    async resetPassword(password) {
        const url = '/auth/reset-password/confirm';
        return AxiosClient.post(url, password)
    },

    async changePassword(password) {
        const token = localStorage.getItem("_token_");
        const url = '/auth/profile/me/change-password';
        return AxiosClient.post(url, password, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    },

    async changeInfo(data) {
        const token = localStorage.getItem("_token_");
        const url = '/auth/profile/me/change-info';
        return AxiosClient.post(url, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    }
}

export default AuthApi
