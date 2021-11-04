import React from 'react'
import { Link } from 'react-router-dom'
import { UpperCaseOneKey } from 'src/Helpers/'
import { CompactText } from 'src/Helpers/'

const PathContent = () => {
    return (
        <div className="flex justify-between shadow-sm bg-white px-[10px] rounded gap-[15px] border">
            <div className="py-[10px] flex items-center overflow-x-auto w-full whitespace-nowrap">
                <Link
                    to="/"
                    className="relative after:absolute after:top-1/2 after:transform after:translate-y-[-45%] after:h-2/3 after:right-[-5px] after:w-[1px] after:bg-gray-500 after:rotate-[-20deg] text-[16px] px-[5px] text-gray-800 mr-[10px] font-medium hover:text-blue-600">
                    Danh mục bài tập
                </Link>
                <Link
                    to="/"
                    className="relative after:absolute after:top-1/2 after:transform after:translate-y-[-45%] after:h-2/3 after:right-[-5px] after:w-[1px] after:bg-gray-500 after:rotate-[-20deg] text-[14px] px-[5px] text-gray-800 mr-[10px] font-medium hover:text-blue-600">
                    {CompactText("Learn and Practice Responsive Web Development by building 8 Websites with given designs", 2, 2)}
                </Link>
                <p
                    to="/"
                    className="text-[14px] px-[5px] text-blue-600">
                    {UpperCaseOneKey('thiet ket giao dien web')}
                </p>
            </div>
        </div>
    )
}

export default PathContent
