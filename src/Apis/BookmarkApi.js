import AxiosClient from "./AxiosClient";

const BookmarkApi = {
  addBookmark(shortId) {
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
};

export default BookmarkApi;
