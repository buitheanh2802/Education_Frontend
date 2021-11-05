// capitalize the head
export const UpperCaseOneKey = (key) => {
    const string = key.trim();
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const CompactText = (text, start, end) => {
    if (!text || !start || !end) return
    const textUpperCaseOneKey = UpperCaseOneKey(text);
    const arrayText = textUpperCaseOneKey?.split(" ");
    const totalText = arrayText?.length;
    if (totalText <= (start + end)) return text;
    const newArrayText = arrayText?.filter((item, index) => {
        return (start > index) || ((totalText - end) <= index);
    })

    return [...newArrayText.splice(0, start), "...", ...newArrayText]?.join(" ");
}

export const OpenWindownTab = (link) => {
    return window.open(link, "_taget")
}

export const AlartMessage = (type, message) => {
    document.getElementById('alart-message').innerHTML = `<div class="message_animation ${type ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}"><span className="text-[14px]">${message}</span></div>`
}