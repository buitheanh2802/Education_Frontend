import AxiosClient from "./AxiosClient";

const PostApi = {
  getPost(endPoint) {
    const url = `/post/${endPoint}`;
    return AxiosClient.get(url);
  },
  get(id) {
    const url = `/posts/${id}`;
    return AxiosClient.get(url);
  },
  add(data) {
    const url = `/posts`;
    return AxiosClient.post(url, data);
  },
};

export default PostApi;
