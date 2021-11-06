import AxiosClient from "./AxiosClient";

const QuestionApi = {
  getQuestion() {
    const url = `/question`;
    return AxiosClient.get(url);
  },
  getId(id) {
    const token = localStorage.getItem("_token_");
    const url = `/question/${id}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default QuestionApi;
