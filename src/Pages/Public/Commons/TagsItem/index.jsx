import React from 'react'
import { path } from 'src/Constants/'
import { Icon } from '../../../../src/Components/Icon'
 const TagItem = () => {
    return (
        <div>
               <div className="item text-[16px]">
               <div className="flex items-center">
                   <h3 className="text-[24px] leading-[36px] ">Javascript </h3>
                  <Icon.Star className="w-[14px] ml-[10px] " />
               </div>
               <p><span className="font-bold leading-[24px]">12</span> Bài viết</p>
               <p><span className="font-bold leading-[24px]">123</span> Câu hỏi</p>
               <p><span className="font-bold leading-[24px]">124</span> Người theo dõi</p>
               <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[10px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+ Theo dõi</button>
           </div>
        </div>
    )
}
export default TagItem
