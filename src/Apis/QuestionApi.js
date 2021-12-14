import AxiosClient from "./AxiosClient";

const QuestionApi = {
  // getQuestion(endPoint) {
  //   const token = localStorage.getItem("_token_");
  //   const url = `/question/${endPoint}`;
  //   if (endPoint === "follow" || endPoint === "listbookmark") {
  //     return AxiosClient.get(url, {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //   } else {
  //     return AxiosClient.get(url);
  //   }
  // },
  getQuestion() {
    const url = `/question`;
    return AxiosClient.get(url);
  },
  getQuestionTren() {
    const url = `/question/trending`;
    return AxiosClient.get(url);
  },
  getQuestionFol() {
    const token = localStorage.getItem("_token_");
    const url = `/question/follow`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getQuestionBookmark() {
    const token = localStorage.getItem("_token_");
    const url = `/question/listbookmark`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
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
  add(data) {
    const token = localStorage.getItem("_token_");
    const url = `/question`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  remove(id) {
    const token = localStorage.getItem("_token_");
    const url = `/question/${id}`;
    return AxiosClient.delete(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  update(id, data) {
    const token = localStorage.getItem("_token_");
    const url = `/question/${id}`;
    return AxiosClient.put(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getListPublish() {
    const token = localStorage.getItem("_token_");
    const url = `/question`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  questionSpam(id) {
    const token = localStorage.getItem("_token_");
    const url = `question/spam/${id}`;
    return AxiosClient.put(
      url,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  },
  view(id) {
    const token = localStorage.getItem("_token_");
    const url = `question/${id}/view`;
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
  otherQuestion(userId) {
    const url = `/question/other-question/same-author/${userId}`;
    return AxiosClient.get(url);
  },
};

export default QuestionApi;
