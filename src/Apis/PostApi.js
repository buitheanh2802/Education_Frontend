import AxiosClient from "./AxiosClient";
const token = localStorage.getItem("_token_");

const PostApi = {
    getPostNew() {
        const url = `/post/newest`;
        return AxiosClient.get(url);
    },
    getPostTren() {
        const url = `/post/trending`;
        return AxiosClient.get(url);
    },
    getPostFol() {
        const url = `/post/following`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    getPostMark() {
        const url = `/post/bookmark`;
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    get(id) {
        const url = `/posts/${id}`;
        return AxiosClient.get(url);
    },
    add(posts) {
        const url = `/posts`;
        return AxiosClient.post(url, posts);
    },
    getListPublish(request) {
        const url = 'post/publish/list';
        return AxiosClient.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: request
        })
    }
};

export default PostApi;
