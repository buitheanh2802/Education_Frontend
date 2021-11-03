import AxiosClient from "./AxiosClient";

const TagApi = {
  getAll() {
    const url = `/tag`;
    return AxiosClient.get(url);
  },
};

export default TagApi;
