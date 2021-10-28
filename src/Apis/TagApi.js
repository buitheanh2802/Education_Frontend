import AxiosClient from './AxiosClient';
const TagAPi = {
    getAll() {
        // const url = `/tags`;
        const url = `/tag`;
        return AxiosClient.get(url)
    }
}
export default TagAPi;