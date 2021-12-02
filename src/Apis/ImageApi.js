import AxiosClient from "./AxiosClient";

const ImageApi = {
  getImage() {
    const token = localStorage.getItem("_token_");
    const url = `/picture`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  addImage(data) {
    const token = localStorage.getItem("_token_");
    const url = `/picture`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default ImageApi;
