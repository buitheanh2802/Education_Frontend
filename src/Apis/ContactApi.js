import AxiosClient from "./AxiosClient";

const ContactApi = {
  sendContact(data) {
    const token = localStorage.getItem("_token_");
    const url = `/contact/create`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getContact() {
    const token = localStorage.getItem("_token_");
    const url = `/contact`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  getContactDetail(id) {
    const token = localStorage.getItem("_token_");
    const url = `/contact/${id}`;
    return AxiosClient.get(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  deleteContact(id) {
    const token = localStorage.getItem("_token_");
    const url = `/contact/${id}`;
    return AxiosClient.delete(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  feedbackContact(id) {
    const token = localStorage.getItem("_token_");
    const url = `/contact/${id}`;
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
  searchContact(keySearch) {
    const token = localStorage.getItem("_token_");
    const url = `/contact/manager/filter?keyword=${keySearch}`;
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
};
export default ContactApi;
