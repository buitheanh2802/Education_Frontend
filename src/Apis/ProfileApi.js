import AxiosClient from './AxiosClient';
const token = localStorage.getItem('_token_');

const ProfileApi = {
    getUser(username){
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
