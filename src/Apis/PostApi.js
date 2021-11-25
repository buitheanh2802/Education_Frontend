import AxiosClient from "./AxiosClient";
const token = localStorage.getItem("_token_");

const PostApi = {
  getPost(endPoint) {
    const url = `/post/${endPoint}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  get(id) {
    const url = `/posts/${id}`;
    return AxiosClient.get(url);
  },
  add(data) {
    const url = `/post`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default PostApi;
