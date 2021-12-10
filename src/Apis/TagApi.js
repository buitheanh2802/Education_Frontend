import AxiosClient from './AxiosClient';
const TagAPi = {
    getAll() {
        const token = localStorage.getItem("_token_");
        const url = `/tag`;
        return AxiosClient.get(url,  {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    getDetail(tagname){
        const token = localStorage.getItem("_token_");
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
    },
    addTag(data){
        const token = localStorage.getItem("_token_");
        const url = `/tag`;
        return AxiosClient.post(url, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    editTag(slug, data) {
        const token = localStorage.getItem("_token_");
        const url = `/tag/${slug}`;
        return AxiosClient.put(url, data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    },
    deleteTag(slug){
        const token = localStorage.getItem("_token_");
        const url = `/tag/${slug}`;
        return AxiosClient.delete(url, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    }
    
}
export default TagAPi;
