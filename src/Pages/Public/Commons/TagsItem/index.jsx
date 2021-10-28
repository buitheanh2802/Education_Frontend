import React from "react";
import { path } from "src/Constants/";
import { Icon } from "../../../../src/Components/Icon";
const TagItem = () => {
  return (
    <div>
       <div className="grid grid-cols-3 ">
          {tag.map((item, index) => {
            console.log(item);
            
         return    <div className="item md:text-[16px] text-[14px] w-max-[170px] px-[5px]">
         <div className="grid grid-cols-2 justify-center items-center gap-[3px]">
           <div className="">
             <img src={item.avatar.avatarUrl} alt="" className="" />
           </div>
           <div className="">
             <div className="flex items-center">
               <h3 className="text-[20px] leading-[30px] ">{item.name}</h3>
               <Icon.Star className="w-[14px] ml-[10px] " />
             </div>
             <p className="text-[#8A8A8A] text-[16px]">
               <span className="font-bold leading-[20px] ">
                 {item.postCounts}
               </span>{" "}
               Bài viết
             </p>
             <p className="text-[#8A8A8A] text-[16px]">
               <span className="font-bold leading-[20px] ">
                 {item.questionCounts}
               </span>{" "}
               Câu hỏi
             </p>
             <p className="text-[#8A8A8A] text-[16px]">
               <span className="font-bold leading-[20px] ">
                 {item.followerCounts}
               </span>{" "}
               Người theo dõi
             </p>
           </div>
         </div>
         <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">
           {item.isFollowing ? (
             <button className="font-bold"> + Theo dõi</button>
           ) : (
             <button className="font-bold"> - Bỏ theo dõi</button>
           )}
         </button>
       </div>
       ;
          })}
</div>
          
    </div>
  );
};
export default TagItem;
