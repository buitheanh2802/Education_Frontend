import AxiosClient from "./AxiosClient";

const PostApi = {
  getPostNew(params) {
    const url = `/post/newest`;
    return AxiosClient.get(url, {
      params,
    });
  },
  getPostTren(params) {
    const url = `/post/trending`;
    return AxiosClient.get(url, params);
  },
  getPostFol(params) {
    const token = localStorage.getItem("_token_");
    const url = `/post/following`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params,
    });
  },
  getPostMark(params) {
    const token = localStorage.getItem("_token_");
    const url = `/post/bookmark`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params,
    });
  },
  get(id) {
    const token = localStorage.getItem("_token_");
    const url = `/posts/${id}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  add(posts) {
    const token = localStorage.getItem("_token_");
    const url = `/post`;
    return AxiosClient.post(url, posts, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  remove(id) {
    const token = localStorage.getItem("_token_");
    const url = `/post/${id}`;
    return AxiosClient.delete(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  update(id, data) {
    const token = localStorage.getItem("_token_");
    const url = `/post/${id}`;
    return AxiosClient.put(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getPost(endPoint) {
    const token = localStorage.getItem("_token_");
    const url = `/post/${endPoint}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getListPublish(request) {
    const token = localStorage.getItem("_token_");
    const url = "post/publish/list";
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: request,
    });
  },
  publish(request) {
    const token = localStorage.getItem("_token_");
    const url = `post/publish/${request.shortId}`;
    return AxiosClient.put(url, request.data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  otherPost(userId) {
    const url = `/user/other-post/same-author/${userId}`;
    return AxiosClient.get(url);
  },
  upViews(data){
    const url = '/post/upviews';
    return AxiosClient.post(url,data)
  },
  searchPost(keySearch) {
    const token = localStorage.getItem("_token_");
    const url = `/post/manager/filter?keyword=${keySearch}`;
    return AxiosClient.post(
      url,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
};

export default PostApi;
