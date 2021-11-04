import AxiosClient from './AxiosClient';
const TagAPi = {
    getAll(endPoint) {
        const token = localStorage.getItem('_token_');
        const url = `/tag${endPoint}`;
        if(endPoint === "following") {
            return AxiosClient.get(url, {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            })
        } else {
            return AxiosClient.get(url);
        }
    },
    getDetail(slug){
        const url = `/tag/${slug}`;
        return AxiosClient.get(url);
    }
}
export default TagAPi;