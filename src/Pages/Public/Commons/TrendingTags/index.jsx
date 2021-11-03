import React from 'react'
import { Link } from 'react-router-dom'

const TrendingTags = ({ tags }) => {
    return (
        <div>
            <h2 className="px-[5px] uppercase font-medium py-[10px] border-b mx-[5px] "> Các tag giả nổi bật</h2>
            <div className="py-[5px] flex flex-wrap gap-[5px] mx-[10px] text-[14px]">
                {tags?.map((item, index) => <Link key={index} to={item?.path} className="px-[10px] hover:bg-gray-300 text-[#5f5f5f] py-[3px] bg-[#e7e7e7] rounded">{item?.value}</Link>)}
            </div>
        </div>
    )
}

export default TrendingTags


// const tags = [
//     {
//         path: "/",
//         value: "NodeJS"
//     }
// ]