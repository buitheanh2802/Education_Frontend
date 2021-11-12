import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'

const FeaturedTag = ({ tag }) => {
    return (
        <div className="py-[5px] mx-[10px]">
            <div className=" divide-y divide-light-blue-400 pb-[10px]">
                <div className="flex flex-wrap">
                    <h2 className="uppercase text-[#4A5568] font-medium py-[10px] ml-[5px] mr-[10px] text-[14px] xl:text-[16px]">{tag?.data?.name}</h2>
                    <hr class="filler-line border-t-1 xl:mt-[28px] mt-[25px] border-[#4A5568] overflow-visible h-0 flex-grow" />
                </div>
                <div className="grid grid-cols-3 gap-4 py-[20px]">
                    <div className="mx-auto">
                        <div className="text-center gap-[5px] text-[#4A5568]">
                            <div className="font-bold text-[22px] ">
                                <span>{tag?.data?.postCounts}</span>
                            </div>
                            <span>Bài viết</span>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="text-center gap-[5px] text-[#4A5568]">
                            <div className="font-bold text-[22px] ">
                                <span>{tag?.data?.questionCounts}</span>
                            </div>
                            <span>Câu hỏi</span>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="text-center gap-[5px] text-[#4A5568]">
                            <div className="font-bold text-[22px] ">
                                <span>{tag?.data?.followerCounts}</span>
                            </div>
                            <span>Theo dõi</span>
                        </div>
                    </div>
                </div>
                <div className="py-[10px]">
                    <div className="flex flex-wrap">
                        <h2 className="uppercase text-[#4A5568] font-medium py-[10px] ml-[5px] mr-[10px] text-[14px] xl:text-[16px]">Thẻ phổ biến</h2>
                        <hr class="filler-line border-t-1 xl:mt-[28px] mt-[25px] border-[#4A5568] overflow-visible h-0 flex-grow" />
                    </div>
                    <div className="py-[5px] flex flex-wrap gap-[5px] mb-[5px] mx-[10px] text-[14px]">
                        <div>
                            {tag?.data?.tags && <Link className="inline-block md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[15px] xl:py-[5px] xl:text-[14px] hover:bg-gray-300 text-[#4A5568] bg-[#BEE3F8]">
                                {tag?.data?.tags}</Link>}
                            {tag?.data?.point && <div className="text-center inline-block bg-[#2C5282] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[15px] xl:py-[5px] xl:text-[14px] text-[#fff] gap-[5px]">
                                <span>{tag?.data?.point}</span>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedTag;
