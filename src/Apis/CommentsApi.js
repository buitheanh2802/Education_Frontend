import LocalStorage from "src/Helpers/Storage";
import AxiosClient from "./AxiosClient";

const CommentsApi = {
  async find(page) {
    const url = `/comment/manager/list?page=${page ? page : 0}`;
    return AxiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${LocalStorage.Get('_token_')}`
      }
    })
  },
  async gets(shortId) {
    const url = `/comment/${shortId}`;
    return AxiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${LocalStorage.Get('_token_')}`
      }
    })
  },
  async post(data) {
    const url = `/comment`;
    return AxiosClient.post(url, data, {
      headers: {
        Authorization: `Bearer ${LocalStorage.Get('_token_')}`
      }
    })
  },
  async put(data) {
    const url = `/comment/${data?._id}`;
    return AxiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${LocalStorage.Get('_token_')}`
      }
    })
  },
  async delete(id) {
    const url = `/comment/${id}`;
    return AxiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${LocalStorage.Get('_token_')}`
      }
    })
  },
  async like(id) {
    const url = `/comment/${id}/like`;
    return AxiosClient.put(url,{}, {
      headers: {
        Authorization: `Bearer ${LocalStorage.Get('_token_')}`
      }
    })
  },
  async dislike(id) {
    const url = `/comment/${id}/dislike`;
    return AxiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${LocalStorage.Get('_token_')}`
      }
    })
  },
  async adminDelete(id) {
    const url = `/comment/manager/delete/${id}`;
    return AxiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${LocalStorage.Get('_token_')}`
      }
    })
  },
};
export default CommentsApi;
