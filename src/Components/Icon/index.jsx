import React from "react";
export const Icon = {
    Bell({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" >
                <path d="M467.812 431.851l-36.629-61.056a181.363 181.363 0 01-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04V42.667C298.66 19.136 279.524 0 255.993 0s-42.667 19.136-42.667 42.667V80.96C151.716 99.371 106.66 156.48 106.66 224v53.483c0 32.853-8.939 65.109-25.835 93.291L44.196 431.83a10.653 10.653 0 00-.128 10.752c1.899 3.349 5.419 5.419 9.259 5.419H458.66c3.84 0 7.381-2.069 9.28-5.397 1.899-3.329 1.835-7.468-.128-10.753zM188.815 469.333C200.847 494.464 226.319 512 255.993 512s55.147-17.536 67.179-42.667H188.815z"></path>
            </svg>
        )
    },

    Undo({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 438.483 438.483" version="1.1" viewBox="0 0 438.483 438.483" xmlSpace="preserve" >
                <path d="M431.168 230.762c-23.552-75.776-98.304-127.488-187.904-129.024V13.162c0-4.096-3.584-7.68-7.68-7.68-1.536 0-3.072.512-4.608 1.536L3.136 171.882c-3.584 2.56-4.096 7.168-1.536 10.752l1.536 1.536 227.84 163.84c3.584 2.56 8.192 1.536 10.752-1.536 1.024-1.536 1.536-3.072 1.536-4.608v-88.064c55.296 0 101.888 26.112 118.272 65.536 13.824 33.792 2.56 70.144-30.208 100.352-3.072 3.072-3.584 7.68-.512 10.752 1.536 1.536 3.584 2.56 5.632 2.56h6.144c1.536 0 3.072-.512 4.096-1.536 75.264-49.664 107.52-126.976 84.48-200.704z"></path>
            </svg>
        )
    },

    Checked({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.556 515.556" >
                <path d="M0 274.226l176.549 176.886L515.556 112.44l-48.67-47.997-290.337 290L47.996 225.891z"></path>
            </svg>
        )
    },

    Warning({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 488.451 488.451" version="1.1" viewBox="0 0 488.451 488.451" xmlSpace="preserve" >
                <path d="M484.125 412.013l-212.2-367.6c-12.3-21.3-43.1-21.3-55.4 0l-212.2 367.6c-12.3 21.3 3.1 48 27.7 48h424.4c24.6 0 40-26.7 27.7-48zm-239.6-254.4c13.6 0 24.6 11.3 24.2 24.9l-4 139.6c-.3 11-9.3 19.7-20.3 19.7s-20-8.8-20.3-19.7l-3.9-139.6c-.3-13.6 10.6-24.9 24.3-24.9zm-.3 252.5c-13.9 0-25.2-11.3-25.2-25.2 0-13.9 11.3-25.2 25.2-25.2s25.2 11.3 25.2 25.2-11.3 25.2-25.2 25.2z"></path>
            </svg>
        )
    },

    Username({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 490 490" version="1.1" viewBox="0 0 490 490" xmlSpace="preserve" >
                <path d="M424 49.8H312.8C303.5 20.9 276.5 0 244.5 0s-59 20.9-68.3 49.8H66c-23.2 0-42 18.8-42 42V448c0 23.2 18.8 42 42 42h358c23.2 0 42-18.8 42-42V91.8c0-23.2-18.8-42-42-42zm-179.5-3.1c13.8 0 25 11.2 25 25s-11.2 25-25 25-25-11.2-25-25 11.2-25 25-25zm124.7 360.6c0 7.7-6.3 14-14 14H135c-7.7 0-14-6.3-14-14v-6.5c0-17.1 8-33.3 21.7-43.5 27.6-20.4 54-33.8 60-36.7.8-.4 1.3-1.2 1.3-2v-24.1c-3.7-6.4-6.1-13.2-7.1-19.3-2.7-.2-6.3-4-10.1-17.5-5.2-18.5.3-21.2 5-20.8-.9-2.6-1.6-5.1-2-7.6-1.7-8.6-2.1-16.7-.1-24.4 2.4-10.3 8-18.6 14.2-24.9 3.9-4.2 8.4-7.9 13.2-10.9 3.9-2.7 8.1-5 12.8-6.6 3.6-1.2 7.5-2 11.6-2.2 12.7-1.1 22.3 2.1 29.2 6.2 10.3 5.7 14.2 13.2 14.2 13.2s23.6 1.7 15.6 49.6c-.5 2.5-1.1 5.1-2 7.6 4.7-.4 10.3 2.3 5 20.8-3.8 13.5-7.4 17.3-10.1 17.5-.9 6.1-3.3 12.7-7.1 19.1v24.3c0 .9.5 1.7 1.3 2 6 2.9 32.4 16.3 60 36.7 13.7 10.2 21.7 26.4 21.7 43.5v6.5h-.1z"></path>
            </svg>
        )
    },

    User({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
            >
                <path d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"></path>
            </svg>
        )
    },

    Email({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <g xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.688 95.156C80.958 154.667 204.26 259.365 240.5 292.01c4.865 4.406 10.083 6.646 15.5 6.646 5.406 0 10.615-2.219 15.469-6.604 36.271-32.677 159.573-137.385 229.844-196.896 4.375-3.698 5.042-10.198 1.5-14.719C494.625 69.99 482.417 64 469.333 64H42.667c-13.083 0-25.292 5.99-33.479 16.438-3.542 4.52-2.875 11.02 1.5 14.718z"
                        data-original="#000000"
                    ></path>
                    <path
                        d="M505.813 127.406a10.618 10.618 0 00-11.375 1.542C416.51 195.01 317.052 279.688 285.76 307.885c-17.563 15.854-41.938 15.854-59.542-.021-33.354-30.052-145.042-125-208.656-178.917a10.674 10.674 0 00-11.375-1.542A10.674 10.674 0 000 137.083v268.25C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333v-268.25a10.66 10.66 0 00-6.187-9.677z"
                        data-original="#000000"
                    ></path>
                </g>
            </svg>
        )
    },

    Look({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M437.333 192h-32v-42.667C405.333 66.99 338.344 0 256 0S106.667 66.99 106.667 149.333V192h-32A10.66 10.66 0 0064 202.667v266.667C64 492.865 83.135 512 106.667 512h298.667C428.865 512 448 492.865 448 469.333V202.667A10.66 10.66 0 00437.333 192zM287.938 414.823a10.67 10.67 0 01-10.604 11.844h-42.667a10.67 10.67 0 01-10.604-11.844l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313 0-23.531 19.135-42.667 42.667-42.667s42.667 19.135 42.667 42.667c0 13.792-6.531 26.365-17.458 34.313l6.728 60.51zM341.333 192H170.667v-42.667C170.667 102.281 208.948 64 256 64s85.333 38.281 85.333 85.333V192z"
                    data-original="#000000"
                ></path>
            </svg>
        )
    },

    Github({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" >
                <path fill="#3C366B" d="M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z"></path>
            </svg>
        )
    },

    Facebook({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 96.124 96.123" version="1.1" viewBox="0 0 96.124 96.123" xmlSpace="preserve" >
                <path fill="#2B6CB0" d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 00-1.96 1.961v15.803a1.96 1.96 0 001.96 1.96H36.57v39.876a1.96 1.96 0 001.96 1.96h16.352a1.96 1.96 0 001.96-1.96V54.287h14.654a1.96 1.96 0 001.96-1.96l.006-15.803a1.963 1.963 0 00-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 001.959-1.96V1.98A1.96 1.96 0 0072.089.02z"></path>
            </svg>
        )
    },

    Google({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" >
                <path
                    fill="#FBBB00"
                    d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                ></path>
                <path
                    fill="#518EF8"
                    d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                ></path>
                <path
                    fill="#28B446"
                    d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                ></path>
                <path
                    fill="#F14336"
                    d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                ></path>
            </svg>
        )
    },

    Close({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 612 612" version="1.1" viewBox="0 0 612 612" xmlSpace="preserve" >
                <path d="M612 36.004L576.521 0.603 306 270.608 35.478 0.603 0 36.004 270.522 306.011 0 575.997 35.478 611.397 306 341.411 576.521 611.397 612 575.997 341.459 306.011z"
                ></path>
            </svg>
        )
    },

    Menu({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 341.333 341.333" version="1.1" viewBox="0 0 341.333 341.333" xmlSpace="preserve" >
                <path d="M0 277.333H341.333V320H0z"></path>
                <path d="M0 149.333H341.333V192H0z"></path>
                <path d="M0 21.333H341.333V64H0z"></path>
            </svg>
        )
    },

    Questions({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 973.1 973.1" >
                <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.29 788.199h-47c-33.1 0-60 26.9-60 60v64.9c0 33.1 26.9 60 60 60h47c33.101 0 60-26.9 60-60v-64.9c0-33.199-26.899-60-60-60zM170.89 285.8l86.7 10.8c27.5 3.4 53.6-12.4 63.5-38.3 12.5-32.7 29.9-58.5 52.2-77.3 31.601-26.6 70.9-40 117.9-40 48.7 0 87.5 12.8 116.3 38.3 28.8 25.6 43.1 56.2 43.1 92.1 0 25.8-8.1 49.4-24.3 70.8-10.5 13.6-42.8 42.2-96.7 85.9-54 43.7-89.899 83.099-107.899 118.099-18.4 35.801-24.8 75.5-26.4 115.301-1.399 34.1 25.8 62.5 60 62.5h49c31.2 0 57-23.9 59.8-54.9 2-22.299 5.7-39.199 11.301-50.699 9.399-19.701 33.699-45.701 72.699-78.1C723.59 477.8 772.79 428.4 795.891 392c23-36.3 34.6-74.8 34.6-115.5 0-73.5-31.3-138-94-193.4-62.6-55.4-147-83.1-253-83.1-100.8 0-182.1 27.3-244.1 82-52.8 46.6-84.9 101.8-96.2 165.5-3.501 18.6 9.199 36 27.699 38.3z"
                        data-original="#000000" ></path>
                </g>
            </svg>
        )
    },

    Follower({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" >
                <path d="M497 80.333h-65.334V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v65.333h-65.332c-8.284 0-15 6.716-15 15s6.716 15 15 15h65.332v65.334c0 8.284 6.716 15 15 15s15-6.716 15-15v-65.334H497c8.284 0 15-6.716 15-15s-6.716-15-15-15zM175.666 321.334C78.804 321.334 0 400.138 0 497c0 8.284 6.716 15 15 15h321.334c8.284 0 15-6.716 15-15 0-96.862-78.805-175.666-175.668-175.666zM175.666 64.267c-52.566 0-95.332 42.767-95.332 95.334s42.766 95.333 95.332 95.333c52.567 0 95.334-42.766 95.334-95.333s-42.767-95.334-95.334-95.334z"></path>
            </svg>
        )
    },
    Point({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <g xmlns="http://www.w3.org/2000/svg" >
                    <path d="M255.47 229.006h-16.696c.072 24.021.008 14.723.1 34.392 6.149-.03 12.727-.06 16.596-.06 9.648 0 17.796-7.858 17.796-17.166 0-9.297-8.148-17.166-17.796-17.166z"
                        data-original="#000000" ></path>
                    <path d="M314.457 174.189l-58.416-59.486-57.957 59.446a15.017 15.017 0 01-3.829 2.849l-76.892 39.901 40.491 72.503a15.04 15.04 0 011.79 5.479l10.788 87.67 82.581-18.266c2.14-.47 4.349-.47 6.488.01l82.151 18.256 11.217-87.74c.24-1.88.83-3.689 1.75-5.349l40.101-72.563-76.502-39.921a15.073 15.073 0 01-3.761-2.789zM255.47 293.331c-3.879 0-10.548.03-16.736.06v34.592c0 8.278-6.718 14.997-14.997 14.997-8.278 0-14.997-6.718-14.997-14.997V214.06c0-8.207 6.683-15.047 14.997-15.047h31.733c26.354 0 47.789 21.155 47.789 47.159s-21.435 47.159-47.789 47.159z"
                        data-original="#000000" ></path>
                    <path d="M436.978 75.022c-100.027-100.028-261.926-100.031-361.956 0-100.028 100.028-100.031 261.925 0 361.956 100.027 100.028 261.926 100.031 361.956 0 100.028-100.028 100.031-261.926 0-361.956zM428.4 217.959l-46.149 83.501-12.937 101.197c-1.128 8.728-9.506 14.655-18.136 12.737l-94.938-21.095-95.438 21.095c-8.652 1.906-17.039-4.049-18.126-12.807L130.229 301.46 83.63 218.019c-4.122-7.406-1.305-16.732 6.189-20.625l88.47-45.909 66.974-68.694c5.804-5.948 15.479-6.122 21.435-.04l67.494 68.734 88.02 45.929c7.456 3.895 10.262 13.17 6.188 20.545z"
                        data-original="#000000" ></path>
                </g>
            </svg>
        )
    },

    Logo({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 93.684 93.683" >
                <g xmlns="http://www.w3.org/2000/svg">
                    <path fill="#1273eb" d="M40.655 43.629c-2.67-5.509-5.893-11.272-9.227-18.153 6.102 0 9.126.025 13.678-.006 12.123-.083 20.357 3.042 25.542 15.494a70.053 70.053 0 011.022 2.649l22.013-.018C89.617 24.338 74.188 8.289 57.324 8.143L0 8.072l12.286 23.8c8.007 13.519 10.846 11.847 28.369 11.757z" data-original="#000000" ></path>
                    <path fill="#0051b5" d="M70.648 52.791c-5.186 12.451-13.42 15.578-25.542 15.494-4.552-.031-7.576-.005-13.678-.005 3.334-6.882 6.557-12.646 9.227-18.153-17.522-.091-20.361-1.764-28.368 11.756L0 85.606l57.324.006c16.863-.146 32.293-16.271 36.358-35.528l-22.012.059a69.149 69.149 0 01-1.022 2.648z" data-original="#000000" ></path>
                </g>
            </svg>
        )
    },

    Pen({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <g >
                    <path xmlns="http://www.w3.org/2000/svg" d="M1.031 492.398c-1.5 5.204 0 10.903 3.797 14.704 2.8 2.796 6.703 4.398 10.602 4.398 1.398 0 2.8-.2 4.101-.602L159.328 471 40.93 352.602zm0 0"
                        data-original="#000000" ></path>
                    <path xmlns="http://www.w3.org/2000/svg" d="M15.43 512c-4.102 0-8-1.602-10.899-4.5-4-4-5.5-9.8-3.902-15.2l40.2-140.6 119.6 119.6-140.8 40.098c-1.399.403-2.8.602-4.2.602zm25.8-158.5l-39.699 139c-1.402 5.102 0 10.5 3.7 14.2 2.699 2.698 6.398 4.198 10.199 4.198 1.3 0 2.699-.199 4-.597l139-39.7zm0 0M498.328 77.2l-63.5-63.5C426.23 5.2 415.031.5 402.93.5c-12 0-23.301 4.7-31.801 13.102l-31.8 31.796 127.1 127.102 31.801-31.8c8.5-8.5 13.098-19.802 13.098-31.802.102-12-4.598-23.199-13-31.699zm0 0"
                        data-original="#000000" ></path>
                    <path xmlns="http://www.w3.org/2000/svg" d="M466.531 173.2l-127.8-127.802 32.097-32.097C379.43 4.699 390.828 0 402.93 0c12.199 0 23.601 4.7 32.101 13.3l63.5 63.5c8.598 8.598 13.297 20 13.297 32.098 0 12.204-4.7 23.602-13.297 32.102zM340.13 45.397L466.53 171.801l31.399-31.403c8.398-8.398 13-19.5 13-31.398s-4.602-23-13-31.398L434.43 14c-8.399-8.398-19.602-13-31.5-13-11.899 0-23 4.602-31.399 13zm0 0M57.805 327.016L318.227 66.59l127.136 127.137-260.422 260.425zm0 0"
                        data-original="#000000" ></path>
                    <path xmlns="http://www.w3.org/2000/svg" d="M184.93 454.898L57.03 327l261.2-261.102L446.03 193.7zM58.53 327L184.93 453.398 444.629 193.7 318.23 67.301zm0 0"
                        data-original="#000000" ></path>
                </g>
            </svg>
        )
    },

    questions({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <g xmlns="http://www.w3.org/2000/svg" >
                    <circle cx="256" cy="378.5" r="25" data-original="#000000"></circle>
                    <path d="M256 0C114.516 0 0 114.497 0 256c0 141.484 114.497 256 256 256 141.484 0 256-114.497 256-256C512 114.516 397.503 0 256 0zm0 472c-119.377 0-216-96.607-216-216 0-119.377 96.607-216 216-216 119.377 0 216 96.607 216 216 0 119.377-96.607 216-216 216z"
                        data-original="#000000" ></path>
                    <path d="M256 128.5c-44.112 0-80 35.888-80 80 0 11.046 8.954 20 20 20s20-8.954 20-20c0-22.056 17.944-40 40-40s40 17.944 40 40-17.944 40-40 40c-11.046 0-20 8.954-20 20v50c0 11.046 8.954 20 20 20s20-8.954 20-20v-32.531c34.466-8.903 60-40.26 60-77.469 0-44.112-35.888-80-80-80z"
                        data-original="#000000" ></path>
                </g>
            </svg >
        )
    },

    Tags({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M458.667 0H323.349c-25.643 0-49.771 9.984-67.904 28.117L18.197 265.387C6.635 276.949 0 292.949 0 309.376c0 16.341 6.635 32.341 18.197 43.904l140.544 140.544C170.283 505.365 186.283 512 202.709 512c16.341 0 32.341-6.635 43.904-18.197l237.269-237.269C502.016 238.421 512 214.293 512 188.651V53.333C512 23.915 488.085 0 458.667 0zm-64 170.667c-29.419 0-53.333-23.915-53.333-53.333 0-29.419 23.915-53.333 53.333-53.333S448 87.915 448 117.333c0 29.419-23.915 53.334-53.333 53.334z"
                    data-original="#000000"
                ></path>
            </svg>
        )
    },

    Dislike({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <path xmlns="http://www.w3.org/2000/svg" d="M117.333 10.667h-64C23.936 10.667 0 34.603 0 64v170.667C0 264.064 23.936 288 53.333 288h96V21.461c-8.938-6.741-19.989-10.794-32-10.794zM512 208c0-18.496-10.581-34.731-26.347-42.667 3.285-6.549 5.013-13.803 5.013-21.333 0-18.517-10.603-34.752-26.368-42.688 4.885-9.728 6.315-20.928 3.861-32.043C463.381 47.659 443.051 32 419.819 32H224c-13.995 0-35.968 4.416-53.333 12.608v228.651l2.56 1.301 61.44 133.12V480c0 3.243 1.472 6.315 3.989 8.341.683.512 16.512 12.992 38.677 12.992 24.683 0 64-39.061 64-85.333 0-29.184-10.453-65.515-16.981-85.333h131.776c28.715 0 53.141-21.248 55.637-48.363 1.387-15.211-3.691-29.824-13.653-40.725C506.923 232.768 512 220.821 512 208z"
                    data-original="#000000" ></path>
            </svg>
        )
    },

    Like({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <path xmlns="http://www.w3.org/2000/svg" d="M53.333 224C23.936 224 0 247.936 0 277.333V448c0 29.397 23.936 53.333 53.333 53.333h64c12.011 0 23.061-4.053 32-10.795V224h-96zM512 304c0-12.821-5.077-24.768-13.888-33.579 9.963-10.901 15.04-25.515 13.653-40.725-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819 16.981-56.149 16.981-85.333 0-46.272-39.317-85.333-64-85.333-22.165 0-37.995 12.48-38.677 12.992A10.72 10.72 0 00234.667 32v72.341l-61.44 133.099-2.56 1.301v228.651C188.032 475.584 210.005 480 224 480h195.819c23.232 0 43.563-15.659 48.341-37.269 2.453-11.115 1.024-22.315-3.861-32.043 15.765-7.936 26.368-24.171 26.368-42.688 0-7.552-1.728-14.784-5.013-21.333C501.419 338.731 512 322.496 512 304z"
                    data-original="#000000" ></path>
            </svg>
        )
    },

    Bookmark({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 423.936 423.936" >
                <path xmlns="http://www.w3.org/2000/svg" d="M327.68 0H96.256c-22.528 0-40.96 18.432-40.96 40.96v357.376c0 9.728 5.632 18.944 14.336 23.04 9.216 4.096 19.456 3.072 27.136-3.072l.512-.512 114.688-96.768 114.688 96.768.512.512c4.608 3.584 10.24 5.632 15.872 5.632 3.584 0 7.68-1.024 11.264-3.072 8.704-4.096 14.336-13.312 14.336-23.04V40.96C368.64 18.432 350.208 0 327.68 0z"
                    data-original="#000000" ></path>
            </svg>
        )
    },

    Chat({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 60 60" >
                <path xmlns="http://www.w3.org/2000/svg" d="M6 2h48c3.252 0 6 2.748 6 6v33c0 3.252-2.748 6-6 6H25.442L15.74 57.673a1.003 1.003 0 01-1.101.26A1 1 0 0114 57V47H6c-3.252 0-6-2.748-6-6V8c0-3.252 2.748-6 6-6z"
                    data-original="#000000" ></path>
            </svg>
        )
    },

    Eye({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 488.85 488.85" >
                <path xmlns="http://www.w3.org/2000/svg" d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                    data-original="#000000" ></path>
            </svg>
        )
    },

    Link({ ...props }) {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" >
                <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M407 136H286c-59.607 0-105 48.954-105 105v30c0 5.099.3 10.199 1.199 15H226c8.401 0 15-6.601 15-15v-30c0-24.901 20.099-45 45-45h121c24.901 0 45 20.099 45 45v30c0 24.899-20.099 45-45 45h-53.8c-8.101 23.699-23.399 44.7-42.9 60H407c57.9 0 105-47.1 105-105v-30c0-57.9-47.1-105-105-105z"
                        data-original="#000000" ></path>
                    <path d="M329.801 226H286c-8.401 0-15 6.599-15 15v30c0 24.899-20.099 45-45 45H105c-24.901 0-45-20.101-45-45v-30c0-24.901 20.099-45 45-45h53.8c8.399-24 23.399-44.401 42.599-60H105C47.1 136 0 183.1 0 241v30c0 57.9 47.1 105 105 105h121c52.8 0 96.599-39.3 103.801-90 .899-4.801 1.199-9.901 1.199-15v-30c0-5.101-.3-10.201-1.199-15z"
                        data-original="#000000" ></path>
                </g>
            </svg>
        )
    }
}

