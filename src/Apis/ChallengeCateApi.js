import LocalStorage from "src/Helpers/Storage";
import AxiosClient from "./AxiosClient";

const ChallengeCateApi = {
  async gets(page) {
    const url = `/challenge-categories`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
      params: { page }
    });
  },

  async get(id) {
    const url = `/challenge-categories/${id}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  async delete(id) {
    const url = `/challenge-categories/${id}`;
    return AxiosClient.delete(url, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  async put(data) {
    const url = `/challenge-categories/${data._id}`;
    return AxiosClient.put(url, data, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  async post(data) {
    const url = `/challenge-categories/`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },
};

export default ChallengeCateApi;
