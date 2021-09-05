import React from 'react'
import { Icon } from '../Icon'

const ErrorMessage = ({ message }) => {
    return (
        <div className="bg-red-100 rounded-[3px] h-[40px] px-[15px] text-red-500 flex items-center justify-between">
            <span className="text-[14px]">{message}</span>
            <Icon.Warning className="fill-current w-[15px] icon-error" />
        </div>
    )
}

export default ErrorMessage
