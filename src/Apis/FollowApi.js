import AxiosClient from './AxiosClient'
const token = localStorage.getItem('_token_');

const FollowApi = {
    //follow user
    follow(username) {
        const url = `/follow/${username}`;
        return AxiosClient.post(url, { username: username }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    //unfollow user
    unFollow(username) {
        const url = `/follow/${username}`;
        return AxiosClient.delete(url, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    },
    followTag(id) {
        const url = `/follow/${id}`;
        return AxiosClient.post(url, { _id: id }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    unFollowTag(id) {
        const url = `/follow/${id}`;
        return AxiosClient.delete(url, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    }
}

export default FollowApi
