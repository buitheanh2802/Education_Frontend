import AxiosClient from "./AxiosClient";

const ContactApi = {
  sendContact(data) {
    const token = localStorage.getItem("_token_");
    const url = `/contact`;
    return AxiosClient.post(url, data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};
export default ContactApi;
