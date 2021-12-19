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

  async listSpam() {
    const url = `/spam/list-comment`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("_token_")}`,
      },
    })
  },

  async updateSpam(id) {
    const url = `/comment/spam/${id}`;
    return AxiosClient.put(url, {}, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("_token_")}`,
      },
    })
  }
};
export default SpamApi;
