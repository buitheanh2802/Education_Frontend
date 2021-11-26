import React from 'react'
import './style.css'
const Loading = ({ ...props }) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50" version="1.1" viewBox="0 0 50 50" xmlSpace="preserve">
            <path d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z">
                <animateTransform attributeName="transform" attributeType="xml" dur="0.6s" from="0 25 25" repeatCount="indefinite" to="360 25 25" type="rotate"> </animateTransform>
            </path>
        </svg>
    )
}

export default Loading
