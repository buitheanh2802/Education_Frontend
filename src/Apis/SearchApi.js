import AxiosClient from "./AxiosClient";

const SearchApi = {
  SuggestSearch(key) {
    const url = `/search/multiple?keyword=${key}`;
    return AxiosClient.get(url);
  },
  searchPost(key) {
    const url = `/search/posts?keyword=${key}`;
    return AxiosClient.get(url);
  },
  searchQuestion(key) {
    const url = `/search/questions?keyword=${key}`;
    return AxiosClient.get(url);
  },
  searchUser(key) {
    const url = `/search/authors?keyword=${key}`;
    return AxiosClient.get(url);
  },
  searchTag(key) {
    const url = `/search/tags?keyword=${key}`;
    return AxiosClient.get(url);
  },
};
export default SearchApi;
