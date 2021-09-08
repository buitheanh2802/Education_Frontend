import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'
// <div className="grid md:grid-cols-3 lg:grid-cols-3 lg:gap-[3px] md:gap-[10px] my-[20px]">
//                                     <div class="col-span-2">
//                                         <Link to={item?.path} className="font-semibold text-[#2D3748] md:text-[16px] sm:text-[16px] xl:text-[18px] lg:text-[14px] hover:underline">{item?.fullname}</Link>
//                                         <span></span>
//                                         <br />
//                                         <span className="lg:text-[13px] xl:text-[16px] sm:text-[14px] text-[#4A5568] ">{item?.username}</span>
//                                     </div>
//                                     <div className="mt-2 md:text-right">
//                                         <button className="bg-[#BEE3F8] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#BEE3F8] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">+ Theo dõi</button>
//                                     </div>
//                                 </div>
// <div className="grid grid-cols-2 gap-[30px] xl:text-[15px] py-[15px] text-[13px]">
//                                     <div className="mx-auto">
//                                         {item?.follower && <div className="text-center gap-[5px] text-[#4A5568]">
//                                             <div className="flex items-center">
//                                                 <Icon.User className="fill-current w-[13px] mr-[5px]" />
//                                                 <span>Có {item?.follower}</span>
//                                             </div>
//                                             <span>người theo dõi</span>
//                                         </div>}
//                                     </div>
//                                     <div className="mx-auto">
//                                         {item?.following && <div className="text-center gap-[5px] text-[#4A5568]">
//                                             <div className="flex items-center">
//                                                 <Icon.Username className="fill-current w-[13px] mr-[5px]" />
//                                                 <span>Theo dõi</span>
//                                             </div>
//                                             <span>{item?.following} người dùng</span>
//                                         </div>}
//                                     </div>
//                                 </div>
const FeaturedTag = ({ detailTag, tags }) => {
    return (
        <div>
            <div className="py-[5px] mx-[10px]">
                {detailTag?.map((item, index) => {
                    return (

                        <div key={index}>
                            <div className=" divide-y divide-light-blue-400 pb-[10px]">
                                <div className="flex flex-wrap">
                                    <h2 className="uppercase text-[#4A5568] font-medium py-[10px] ml-[5px] mr-[10px] text-[14px] xl:text-[16px]">Javascript</h2>
                                    <hr class="filler-line border-t-1 xl:mt-[28px] mt-[25px] border-[#4A5568] overflow-visible h-0 flex-grow" />
                                </div>

                                <div className="grid grid-cols-3 gap-4 py-[20px]">

                                    <div className="mx-auto">
                                        {item?.post && <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="font-bold text-[22px] ">
                                                <span>{item?.post}</span>
                                            </div>
                                            <span>Bài viết</span>
                                        </div>}
                                    </div>
                                    <div className="mx-auto">
                                        {item?.question && <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="font-bold text-[22px] ">
                                                <span>{item?.question}</span>
                                            </div>
                                            <span>Câu hỏi</span>
                                        </div>}
                                    </div>
                                    <div className="mx-auto">
                                        {item?.point && <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="font-bold text-[22px] ">
                                                <span>{item?.point}</span>
                                            </div>
                                            <span>Theo dõi</span>
                                        </div>}
                                    </div>
                                </div>

                                <div className="py-[10px]">
                                    <div className="flex flex-wrap">
                                        <h2 className="uppercase text-[#4A5568] font-medium py-[10px] ml-[5px] mr-[10px] text-[14px] xl:text-[16px]">Thẻ phổ biến</h2>
                                        <hr class="filler-line border-t-1 xl:mt-[28px] mt-[25px] border-[#4A5568] overflow-visible h-0 flex-grow" />
                                    </div>
                                    <div className="py-[5px] flex flex-wrap gap-[5px] mb-[5px] mx-[10px] text-[14px]">
                                        {item?.tags && <Link className="md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[15px] xl:py-[5px] xl:text-[14px] hover:bg-gray-300 text-[#4A5568] bg-[#BEE3F8] rounded">{item?.tags}</Link>}
                                    </div>
                                </div>
                                <div className="pb-[10px]">
                                    <div className="flex flex-wrap">
                                        <h2 className="uppercase text-[#4A5568] font-medium py-[10px] ml-[5px] mr-[10px] text-[14px] xl:text-[16px]">Tất cả thẻ</h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedTag;

