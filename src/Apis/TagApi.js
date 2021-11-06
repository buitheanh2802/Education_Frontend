import AxiosClient from './AxiosClient';
const TagAPi = {
    getAll(endPoint) {
        const url = `/tag${endPoint}`;
        return AxiosClient.get(url);
    },
    getDetail(tagname){
        const url = `/tag/${tagname}`;
        return AxiosClient.get(url);
    },
    getTagPopular() {
        const url = `/tag/popular`;
        return AxiosClient.get(url);
    },
    getPostInTag(tagname){
        const url = `/tag/${tagname}/post`;         
        return AxiosClient.get(url);
    },
    getQuestionInTag(tagname){
        const url = `/tag/${tagname}/question`;         
        return AxiosClient.get(url);
    },
    getFollowInTag(tagname){
        const token = localStorage.getItem('_token_');
        const url = `/tag/${tagname}/follow`;         
        return AxiosClient.get(url, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    }
}
export default TagAPi;