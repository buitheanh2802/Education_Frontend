import AxiosClient from './AxiosClient';

const ProfileApi = {
    getUser(username){
        const token = localStorage.getItem("_token_");
        const url = `user/${username}`;
        return AxiosClient.get(url, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    },
    getPost(){   
    }
}

export default ProfileApi
