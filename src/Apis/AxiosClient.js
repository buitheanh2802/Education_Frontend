import axios from "axios";
import queryString from "query-string";

const AxiosClient = axios.create({
<<<<<<< HEAD
    baseURL:"https://devstar-mockapi.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: (params) => queryString.stringify(params)
=======
  // baseURL: process.env.REACT_APP_URL_API,
  baseURL: "https://devstar-mockapi.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
>>>>>>> 0fa62252ff6b2eb346c217f8a126ade0f25b52ef
});

export default AxiosClient;
