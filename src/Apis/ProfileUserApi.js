import AxiosClient from './AxiosClient';

const ProfileUserApi = {
    getUser(username) {
        const token = localStorage.getItem("_token_");
        const url = `/user/${username}`
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${token}`
            },
        })
    },
    getPostUser(username, params) {
        const url = `/user/${username}/post`
        return AxiosClient.get(url, {
            params,
        })
    },
    getQuestionUser(username, params) {
        const url = `/user/${username}/question`
        return AxiosClient.get(url, {
            params,
        })
    },

    getFollowerUser(username, params) {
        const token = localStorage.getItem("_token_");
        const url = `/user/${username}/follower`
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${token}`
            },
                params,
        })
    },
    getFollowingUser(username, params) {
        const token = localStorage.getItem("_token_");
        const url = `/user/${username}/following`
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${token}`
            },
            params,
        })
    },
    getTagUser(username, params) {
        const token = localStorage.getItem("_token_");
        const url = `/user/${username}/tag`
        return AxiosClient.get(url, {
            headers: {
                authorization: `Bearer ${token}`
            },
            params,
        })
    },
    getBookmarkUser(username,params) {
        const url = `/user/${username}/bookmark/post`
        return AxiosClient.get(url, {
            params,
        })
    },
}
export default ProfileUserApi