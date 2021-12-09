import AxiosClient from './AxiosClient';

const ProfileUserApi = {
    getUser(username) {
        const token = localStorage.getItem("_token_");
        const url = `/user/${username}`
        return AxiosClient.get(url, {
            headers: {
                authorization : `Bearer ${token}`
            }
        })
    },
    getPostUser(username) {
        const url = `/user/${username}/post`
        return AxiosClient.get(url)
    },
    getFollowerUser(username) {
        const url = `/user/${username}/follower`
        return AxiosClient.get(url)
    },
    getFollowingUser(username) {
        const url = `/user/${username}/following`
        return AxiosClient.get(url)
    },
    getTagUser(username) {
        const url = `/user/${username}/tag`
        return AxiosClient.get(url)
    },
    getBookmarkUser(username) {
        const url = `/user/${username}/bookmark/post`
        return AxiosClient.get(url)
    },
}
export default ProfileUserApi