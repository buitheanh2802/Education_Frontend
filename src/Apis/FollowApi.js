import AxiosClient from './AxiosClient'

const FollowApi = {
    //follow user
    follow(username) {
        const token = localStorage.getItem('_token_');
        const url = `/follow/${username}`;
        return AxiosClient.post(url, { username: username }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    },
    //unfollow user
    unFollow(username) {
        const token = localStorage.getItem('_token_');
        const url = `/follow/${username}`;
        return AxiosClient.delete(url, {
            headers: {
                authorization : `Bearer ${token}`
            }
        })
    },
    //follow tag
    followTag(id){
        const token = localStorage.getItem('_token_');
        const url = `/follow/${id}`;
        return AxiosClient.post(url, { id: id }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    },
    //unfollow tag
    unfollowTag(id){
        const token = localStorage.getItem('_token_');
        const url = `/follow/${id}`;
        return AxiosClient.post(url, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    }
}

export default FollowApi
