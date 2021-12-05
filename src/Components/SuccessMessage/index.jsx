import React from 'react'
import { Icon } from '../Icon'

const SuccessMessage = ({ message, className, ...props }) => {
    return (
        <div {...props} className={`select-none bg-green-100 rounded-[3px] px-[15px] py-[5px] text-green-500 flex items-center justify-between ${className}`}>
            <span className="text-[14px]">{message}</span>
            <Icon.Checked className="fill-current w-[15px]" />
        </div>
    )
}

export default SuccessMessage
