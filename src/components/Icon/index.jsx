import './style.css';

export const IconBell = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512">
            <path xmlns="http://www.w3.org/2000/svg" fill={color} d="M467.812 431.851l-36.629-61.056a181.363 181.363 0 01-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04V42.667C298.66 19.136 279.524 0 255.993 0s-42.667 19.136-42.667 42.667V80.96C151.716 99.371 106.66 156.48 106.66 224v53.483c0 32.853-8.939 65.109-25.835 93.291L44.196 431.83a10.653 10.653 0 00-.128 10.752c1.899 3.349 5.419 5.419 9.259 5.419H458.66c3.84 0 7.381-2.069 9.28-5.397 1.899-3.329 1.835-7.468-.128-10.753zM188.815 469.333C200.847 494.464 226.319 512 255.993 512s55.147-17.536 67.179-42.667H188.815z" data-original="#000000"></path>
        </svg>
    )
}

export const IconList = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 515.555 515.555">
            <path fill={color} d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path>
        </svg>
    )
}

export const IconDetele = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path fill={color} d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path>
        </svg>
    )
}

export const IconDone = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path fill={color} d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
        </svg>
    )
}

export const IconProfile = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill={color} d="M3 5v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 00-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>
        </svg>
    )
}

export const IconAdmin = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0H24V24H0z"></path>
            <path fill={color} d="M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z"></path>
            <path fill={color} d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"></path>
        </svg>
    )
}


export const IconSetting = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path fill={color} d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
        </svg>
    )
}

export const IconLogOut = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill={color} d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
        </svg>
    )
}

export const IconCancel = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill={color} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
    )
}

export const IconBack = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            enableBackground="new 0 0 492 492"
            version="1.1"
            viewBox="0 0 492 492"
            xmlSpace="preserve">
            <path fill={color} d="M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z"></path>
        </svg>
    )
}

export const IconLoading = ({ w, h, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            x="0"
            y="0"
            enableBackground="new 0 0 50 50"
            version="1.1"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
            className="mx-auto">
            <path fill={color} d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z">
                <animateTransform
                    attributeName="transform"
                    attributeType="xml"
                    dur="0.6s"
                    from="0 25 25"
                    repeatCount="indefinite"
                    to="360 25 25"
                    type="rotate">
                </animateTransform>
            </path>
        </svg>
    )
}
