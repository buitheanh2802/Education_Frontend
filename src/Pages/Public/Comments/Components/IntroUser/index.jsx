import React from 'react'

const IntroUser = ({ avatarUrl, fullname, className }) => {
    return (
        <span className={`${className} rounded-full border border-solid border-gray-300 flex items-center justify-center text-sm text-gray-500 bg-gray-200 font-bold overflow-hidden`}>
            {avatarUrl?.length > 0 ? <img className="w-full h-full object-cover" src={avatarUrl} /> : fullname?.slice(0, 1)?.toUpperCase()}
        </span>
    )
}

export default IntroUser
