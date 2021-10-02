import AxiosClient from "./AxiosClient";

const PostApi = {
  getAll() {
    const url = `/posts`;
    return AxiosClient.get(url);
  },
  get(id) {
    const url = `/posts/${id}`;
    return AxiosClient.get(url);
  },
  add(posts) {
    const url = `/posts`;
    return AxiosClient.post(url, posts);
  },
};

export default PostApi;
