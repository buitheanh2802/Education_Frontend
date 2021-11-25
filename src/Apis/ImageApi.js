import AxiosClient from "./AxiosClient";

const token = localStorage.getItem("_token_");

const ImageApi = {
  getImage() {
    const url = `/picture`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  addImage(data) {
    const url = `/picture`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default ImageApi;
