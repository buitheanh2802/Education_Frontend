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

    async gets(cateid) {
        const url = `/challenges/${cateid}/challenge-categories`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async post(data) {
        const url = `/challenges/`;
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    async put(data) {
        const url = `/challenges/${data?._id}`;
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
    },
    async solutionSubmited(id) {
        const url = `/challenges/solution-submited/${id}`;
        return AxiosClient.post(url, {}, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    async UploadFile(data) {
        const url = 'challenges/upload-file';
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    }
}

export default ChallengeApi
