const LocalStorage = {
    Get(key) {
        return localStorage.getItem(key);
    },

    Set(key, value) {
        return localStorage.setItem(key, value);
    },

    Remote(key) {
        return localStorage.removeItem(key);
    },

    Clear() {
        return localStorage.clear();
    }
}

export default LocalStorage