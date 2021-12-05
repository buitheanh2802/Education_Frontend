import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const ChallengeCateApi = {
    async gets() {
        const url = `/challenge-categories`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async get(id) {
        const url = `/challenge-categories/${id}`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },

    async post(data){
        const url = '/challenge-categories';
        return AxiosClient.post(url, data, {
            headers:{
                Authorization: `Bearer ${LocalStorage.Get()}`
            }
        }) 
    }
}

export default ChallengeCateApi
