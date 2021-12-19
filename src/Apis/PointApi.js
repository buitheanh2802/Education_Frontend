import LocalStorage from 'src/Helpers/Storage';
import AxiosClient from './AxiosClient';

const PointApi = {
    async upPoint(username, points) {
        const url = `/user/${username}/point`;
        return AxiosClient.post(url,
            {
                type: "up",
                points
            },
            {
                headers: {
                    authorization: `Bearer ${LocalStorage.Get('_token_')}`
                }
            })
    },

    async downPoint(username, points) {
        const url = `/user/${username}/point`;
        return AxiosClient.post(url,
            {
                type: "down",
                points
            },
            {
                headers: {
                    authorization: `Bearer ${LocalStorage.Get('_token_')}`
                }
            })
    },

}

export default PointApi
