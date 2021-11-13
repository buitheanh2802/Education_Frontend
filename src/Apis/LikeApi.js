import AxiosClient from "./AxiosClient";
// import LocalStorage from 'src/Helpers/Storage';

const LikeApi = {
  likePost(id) {
    const token = localStorage.getItem("_token_");
    const url = `/post/${id}/like`;
    return AxiosClient.post(
      url,
      { shortId: id },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  disLikePost(id) {
    const token = localStorage.getItem("_token_");
    const url = `/post/${id}/dislike`;
    return AxiosClient.delete(
      url,
      // { shortId: id },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  likeQuestion(id) {
    const token = localStorage.getItem("_token_");
    const url = `/question/${id}/like`;
    return AxiosClient.post(
      url,
      { shortId: id },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  delLikeQuestion(id) {
    const token = localStorage.getItem("_token_");
    const url = `/question/${id}/deletelike`;
    return AxiosClient.delete(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  disLikeQuestion(id) {
    const token = localStorage.getItem("_token_");
    const url = `/question/${id}/dislike`;
    return AxiosClient.post(
      url,
      { shortId: id },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  delDisLikeQuestion(id) {
    const token = localStorage.getItem("_token_");
    const url = `/question/${id}/delete-dislike`;
    return AxiosClient.delete(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default LikeApi;
