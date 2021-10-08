import AxiosClient from './AxiosClient';

const ProfileApi = {
    getAll(){
        const url = `/nguyen-profile`;
        return AxiosClient.get(url) ;;
    },
    get(id){
        const url = `/nguyen-profile/${id}`;
        return AxiosClient.get(url);
    },
    getPost(){
        const url = `/nguyen-posts`;
        return AxiosClient.get(url);
    }
}

export default ProfileApi
