import AxiosClient from "./AxiosClient";
import LocalStorage from "src/Helpers/Storage";

const UserApi = {
  async get(userId) {
    const url = `/user/${userId}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  async update(userId) {
    const url = `/user/${userId}`;
    return AxiosClient.update(url, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  getFeaturedAuthor() {
    const url = `/user/featured-author`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${LocalStorage.Get("_token_")}`,
      },
    });
  },

  getListUserAdmin() {
    const token = localStorage.getItem("_token_");
    const url = `/user/manager/list`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },

  getListUser(filter) {
    const token = localStorage.getItem("_token_");
    const url = `/user/featured-author/list?filter=${filter}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },

  editManagerUser(username, data) {
    const token = localStorage.getItem("_token_");
    const url = `/user/manager/edit/${username}`;
    return AxiosClient.put(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },

  searchUser(keySearch) {
    const url = `/user/manager/filter?keyword=${keySearch}`;
    return AxiosClient.post(url);
  },
  pointUser(user, data) {
    const token = localStorage.getItem("_token_");
    const url = `/user/${user}/point`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default UserApi;
