import React from 'react'
import { Icon } from '../Icon'

const ErrorMessage = ({ message, className, ...props }) => {
    return (
        <div {...props} className={`select-none bg-red-100 rounded-[3px] px-[15px] py-[5px] text-red-500 flex items-center justify-between ${className}`}>
            <span className="text-[14px]">{message}</span>
            <Icon.Warning className="fill-current w-[15px] icon-error" />
        </div>
    )
}

export default ErrorMessage
