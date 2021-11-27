import AxiosClient from "./AxiosClient";
const token = localStorage.getItem("_token_");

const PostApi = {
<<<<<<< HEAD
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
  getListPublish(params){
    const url = '/post/publish/list';
    return AxiosClient.get(url,{
      params,
      headers : {
        authorization : `Bearer ${token}`
      }
    })
  }
=======
    getPostNew() {
        const url = `/post/newest`;
        return AxiosClient.get(url);
    },
    getPostTren() {
        const url = `/post/trending`;
        return AxiosClient.get(url);
    },
    getPostFol() {
        const url = `/post/following`;
        return AxiosClient.get(url, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    },
    getPostMark() {
        const url = `/post/bookmark`;
        return AxiosClient.get(url, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    },
    get(id) {
        const url = `/posts/${id}`;
        return AxiosClient.get(url);
    },
    add(posts) {
        const url = `/posts`;
        return AxiosClient.post(url, posts);
    },
>>>>>>> hanhnguyen
};

export default PostApi;
