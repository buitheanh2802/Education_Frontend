import AxiosClient from "./AxiosClient";

const QuestionApi = {
  getQuestion() {
    const url = `/question`;
    return AxiosClient.get(url);
  },
};

export default QuestionApi;
