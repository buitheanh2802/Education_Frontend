import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';

const TestComponents = ({ data }) => {
    return (
        <div className="w-full flex px-[10px] py-[15px] border-b">
            <div className="mr-[20px] hidden sm:block">
                <Link to={`${path.POSTS}/${data?._id}`} >
                    <img className="max-w-[40px] max-h-[40px] rounded-full" src={data?.avatar} alt={data?.fullname} />
                </Link>
            </div>
            <div className="w-full">
                <Link to={`${path.POSTS}/${data?._id}`} className="text-[#2d6ff7] hover:underline font-medium text-[15px]" >{data?.fullname}</Link>
                <span className="px-[5px]">-</span>
                <span className="text-[13px] text-[#707885]">{data?.time}</span>
                <h3 className="pr-[50px]">
                    <Link to={`${path.POSTS}/${data?._id}`} className="font-medium text-[18px] hover:underline">{data?.title}</Link>
                    <span className="px-[5px]">-</span>
                    <button className="translate-y-[2px]"> <Icon.Link className="w-[14px] fill-current text-[#666]" /></button>
                </h3>

                <div className="flex justify-between mt-[5px] ">
                    <div className="flex text-[14px] gap-[15px]">
                        <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                            <Icon.Eye className="fill-current w-[15px]" />
                            <span>{data?.view}</span>
                        </div>
                        <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                            <Icon.Chat className="fill-current w-[15px]" />
                            <span>{data?.comment}</span>
                        </div>
                        <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                            <Icon.Bookmark className="fill-current w-[15px]" />
                            <span>{data?.bookmark}</span>
                        </div>
                    </div>
                    <Icon.Pen className="fill-current w-[20px] text-[#5f5f5f]" />
                </div>
            </div>
        </div>
    )
}

export default TestComponents