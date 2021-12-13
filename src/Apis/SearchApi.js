import AxiosClient from "./AxiosClient";

const SearchApi = {
  Search(data) {
    const url = `/search`;
    return AxiosClient.post(url, data);
  },
};
export default SearchApi;
