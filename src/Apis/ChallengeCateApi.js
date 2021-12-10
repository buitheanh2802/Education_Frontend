import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const ChallengeCateApi = {
    async gets() {
        const url = `/challenge-categories`;
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async get(id) {
        const url = `/challenge-categories/${id}`;
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async put(data) {
        const url = `/challenge-categories/${data._id}`;
        return AxiosClient.put(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async post(data) {
        const url = `/challenge-categories/`;
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
}

export default ChallengeCateApi
