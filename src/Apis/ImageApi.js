import AxiosClient from "./AxiosClient";
const token = localStorage.getItem("_token_");

const ImageApi = {
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
