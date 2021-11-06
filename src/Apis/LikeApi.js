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
};

export default LikeApi;
