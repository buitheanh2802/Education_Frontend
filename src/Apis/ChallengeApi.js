import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const ChallengeApi = {
    async get(challengeId) {
        const url = `/challenges/${challengeId}`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async gets(cateid) {
        const url = `/challenges/${cateid}/challenge-categories`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async update(data, id) {
        const url = `/challenges/${id}`;
        return AxiosClient.put(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    async addSubmit(id) {
        const url = `/challenges/submited-user/${id}`;
        return AxiosClient.post(url, {}, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    }
}

export default ChallengeApi
