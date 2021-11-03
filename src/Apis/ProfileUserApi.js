import axios from 'axios';
import AxiosClient from './AxiosClient';
const ProfileUserApi = {
    getUser(username) {
        const url = `/user/${username}`
        return AxiosClient.get(url)
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
    getBookmarkUser(username) {
        const url = `/user/${username}/bookmark/post`
        return AxiosClient.get(url)
    },
}
export default ProfileUserApi