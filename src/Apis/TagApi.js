import AxiosClient from './AxiosClient';
const token = localStorage.getItem('_token_');
const TagAPi = {
    getAll() {
        const url = `/tag`;
        return AxiosClient.get(url);
    },
    getDetail(tagname){
        const url = `/tag/${tagname}`;
        return AxiosClient.get(url,  {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
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
        const url = `/tag/${tagname}/follower`;
        return AxiosClient.get(url)
    }
}
export default TagAPi;
