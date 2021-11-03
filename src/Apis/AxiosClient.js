import axios from "axios";
import queryString from "query-string";

const AxiosClient = axios.create({
    baseURL: 'https://devstar-api.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

export default AxiosClient;
