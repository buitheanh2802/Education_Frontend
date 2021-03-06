import React from 'react'
import { Link } from 'react-router-dom'
import { UpperCaseOneKey } from 'src/Helpers/'
import { CompactText } from 'src/Helpers/'

const PathContent = ({ path }) => {

    if (!path) return null
    return (
        <div className="flex justify-between shadow-sm bg-white px-[10px] rounded gap-[15px] border">
            <div className="py-[10px] flex items-center overflow-x-auto w-full whitespace-nowrap">
                {path?.map((item, index) => {
                    if (index === 0) return (
                        <Link
                            key={index}
                            to={item.path}
                            className="relative after:absolute after:top-1/2 after:transform after:translate-y-[-45%] after:h-2/3 after:right-[-5px] after:w-[1px] after:bg-gray-500 after:rotate-[-20deg] text-[16px] px-[5px] text-gray-800 mr-[10px] font-medium hover:text-blue-600">
                            {UpperCaseOneKey(item.value, 3, 2)}
                        </Link>
                    )

                    if (index + 1 === path?.length) return (
                        <Link
                            key={index}
                            to={item.path}
                            className="text-[14px] px-[5px] text-blue-600">
                            {UpperCaseOneKey(item?.value)}
                        </Link>
                    )

                    return (
                        <Link
                            key={index}
                            to={item.path}
                            className="relative after:absolute after:top-1/2 after:transform after:translate-y-[-45%] after:h-2/3 after:right-[-5px] after:w-[1px] after:bg-gray-500 after:rotate-[-20deg] text-[14px] px-[5px] text-gray-800 mr-[10px] font-medium hover:text-blue-600">
                            {CompactText(item?.value, 2, 3)}
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}

export default PathContent
