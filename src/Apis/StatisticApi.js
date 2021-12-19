import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const StatisticApi = {
    async totalAll() {
        const url = `/statistic/total-all`;
        return AxiosClient.post(url, {}, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async statisticPost(option) {
        const url = `/statistic/post`;
        return AxiosClient.post(url, option, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async statisticQuestion(option) {
        const url = `/statistic/question`;
        return AxiosClient.post(url, option, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async statisticSolutions(option) {
        const url = `/statistic/solutions`;
        return AxiosClient.post(url, option, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async statisticUser(option) {
        const url = `/statistic/users`;
        return AxiosClient.post(url, option, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async statisticResultSulotion() {
        const url = `/statistic/total-upload-download-challenge`;
        return AxiosClient.post(url, {}, {
            headers: {
                authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    }
}

export default StatisticApi;