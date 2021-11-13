import AxiosClient from "./AxiosClient";

const ImageApi = {
  uploadImage(data) {
    const token = localStorage.getItem("_token_");
    const url = `/picture`;
    return AxiosClient.post(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default ImageApi;
