import LocalStorage from "src/Helpers/Storage";
import AxiosClient from "./AxiosClient";

const SulotionApi = {
  async gets() {
    const url = `/solution`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  async get(id) {
    const url = `/solution/${id}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  async put(data) {
    const url = `/solution/${data?._id}`;
    return AxiosClient.put(url, data, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  async post(data) {
    const url = `/solution`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  async upVote(id) {
    const url = `/solution/${id}/vote`;
    return AxiosClient.post(url, {}, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  }
};

export default SulotionApi;
