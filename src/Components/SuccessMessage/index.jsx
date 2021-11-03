import React from 'react'
import { Icon } from '../Icon'

const SuccessMessage = ({ message }) => {
    return (
        <div className="bg-green-100 rounded-[3px] h-[40px] px-[15px] text-green-500 flex items-center justify-between">
            <span className="text-[14px]">{message}</span>
            <Icon.Checked className="fill-current w-[15px]" />
        </div>
    )
}

export default SuccessMessage
