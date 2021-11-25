import AxiosClient from "./AxiosClient";
const token = localStorage.getItem("_token_");

const QuestionApi = {
  getQuestion(endPoint) {
    const url = `/question/${endPoint}`;
    if (endPoint === "follow" || endPoint === "listbookmark") {
      return AxiosClient.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      return AxiosClient.get(url);
    }
  },
  // getQuestion() {
  //   const url = `/question`;
  //   return AxiosClient.get(url);
  // },
  getId(id) {
    const url = `/question/${id}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  add(data) {
    const url = `/question`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default QuestionApi;
