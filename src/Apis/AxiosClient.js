import axios from 'axios';
import queryString from 'query-string';

const AxiosClient = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

AxiosClient.interceptors.response.use(res => res,(async err => {
    const res = err.response.data;
    if (res.message[0] === 'EXPIRED_TOKEN' && res.message[1] === 'RETRY_TOKEN') {
        const config = err.response.config;
        try {
            const { data } = await AxiosClient.get('/auth/profile/me/refreshtoken', { withCredentials: true });
            config.headers.authorization = `Bearer ${data.data}`;
            localStorage.setItem('_token_',data.data);
            return AxiosClient(config)
        } catch (error) {
            const handleError = error.response.data.message[0];
            if (handleError === "EMPTY_TOKEN" || handleError === "EXPIRED_TOKEN") {
                localStorage.removeItem('_token_');
                return Promise.reject(err)
            }
        }
    }
    return Promise.reject(err)
}))


export default AxiosClient;