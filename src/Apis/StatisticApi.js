import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const StatisticApi = {
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
    }
}

export default StatisticApi;