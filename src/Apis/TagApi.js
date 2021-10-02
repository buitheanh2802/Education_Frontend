import AxiosClient from './AxiosClient';
const TagAPi = {
    getAll() {
        const url = `/tags`;
        return AxiosClient.get(url)
    }
}
export default TagAPi;