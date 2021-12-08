import axios from 'axios';
import queryString from 'query-string';

const AxiosClient = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

AxiosClient.interceptors.response.use(res => res,(err => {
    const res = err.response.data;
    console.log(res);
    if (res.message[0] === 'EXPIRED_TOKEN' && res.message[1] === 'RETRY_TOKEN') {

    }
    return Promise.reject(err)
}))


export default AxiosClient;