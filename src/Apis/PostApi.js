import AxiosClient from "./AxiosClient";
const token = localStorage.getItem('_token_');

const PostApi = {
    getPost(endPoint) {
        const url = `/post/${endPoint}`;
        if(endPoint === "following" || endPoint === "bookmark") {
            return AxiosClient.get(url, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })
        } else {
            return AxiosClient.get(url);
        }
    },
    get(id) {
        const url = `/posts/${id}`;
        return AxiosClient.get(url);
    },
    add(posts) {
        const url = `/posts`;
        return AxiosClient.post(url, posts);
    },
};

export default PostApi;
