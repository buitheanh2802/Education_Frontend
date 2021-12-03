import AxiosClient from "./AxiosClient";

const SpamApi = {
  reportSpamQuestion(data) {
    const token = localStorage.getItem("_token_");
    const url = `/spam/question-or-comment`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};
export default SpamApi;
