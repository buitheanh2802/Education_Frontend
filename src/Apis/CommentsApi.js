import AxiosClient from "./AxiosClient";

const ContactApi = {
    async gets(shortId) {
        const url = `/comment/${shortId}`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    async post(data) {
        const url = `/comment`;
        return AxiosClient.post(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    async put(data) {
        const url = `/comment/${data?._id}`;
        return AxiosClient.put(url, data, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    async put(id) {
        const url = `/comment/${id}`;
        return AxiosClient.delete(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    async like(id) {
        const url = `comment/${id}/like`;
        return AxiosClient.put(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    },
    async dislike(id) {
        const url = `comment/${id}/dislike`;
        return AxiosClient.delete(url, {
            headers: {
                Authorization: `Bearer ${LocalStorage.Get('_token_')}`
            }
        })
    }
};
export default ContactApi;
