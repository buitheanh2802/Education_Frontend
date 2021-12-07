import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const SulotionApi = {
    async gets() {
        const url = `/solution`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async get(id) {
        const url = `/solution/${id}`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async post(data) {
        const url = `/solution`;
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    }
}

export default SulotionApi