import AxiosClient from "./AxiosClient";

const BookmarkApi = {
  addBookmarkPost(shortId) {
    const token = localStorage.getItem("_token_");
    const url = `/post/${shortId}/bookmark`;
    return AxiosClient.post(
      url,
      { shortId: shortId },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  addBookmarkQuestion(shortId) {
    const token = localStorage.getItem("_token_");
    const url = `/question/bookmark/${shortId}`;
    return AxiosClient.post(
      url,
      { shortId: shortId },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  delBookmarkQuestion(shortId) {
    const token = localStorage.getItem("_token_");
    const url = `/question/bookmark/${shortId}`;
    return AxiosClient.delete(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default BookmarkApi;
