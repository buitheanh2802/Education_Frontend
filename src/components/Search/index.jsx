import React from 'react'
import search_icon from '../../assets/media/icons/search.svg'
const Search = () => {
    return (
        <div className="relative">
            <input type="text" className="w-[170px] md:w-[200px] h-[36px] pr-[35px] border border-gray-300 px-[15px] py-[8px] text-[16px] rounded-[3px] focus:outline-none focus:ring-[1.5px] focus:ring-blue-500" placeholder="Tìm kiếm..." />
            <button className="absolute right-0 text-gray-800 text-lg h-full w-[40px]"><img className="ml-[50%] translate-x-[-50%]" src={search_icon} alt="" /></button>
        </div>
    )
}

export default Search
