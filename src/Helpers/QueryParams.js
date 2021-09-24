const queryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param)
}

export default queryParam;
