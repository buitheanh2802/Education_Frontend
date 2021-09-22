import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'

const QuestionInProfile = ({ data }) => {
    return (
        <>
            {data?.map((item, index) => {
                return (
                    <>
                        <div key={index} className="w-full xl:grid-cols-5 md:grid md:grid-cols-4 px-[10px] py-[15px] border-b lg:mt-0 md:mt-3">
                            <div className="lg:mr-[35px]">
                                <div className="grid grid-cols-5">
                                    <div className=" pt-[2px]">
                                        <Icon.Calendar className="fill-current w-[13px] " />
                                    </div>
                                    <span className="col-span-4 text-[13px] text-[#707885]">{item?.post?.time}</span>
                                </div>
                                <div className="flex justify-between mt-[5px]">
                                    <div className="flex text-[14px] gap-[15px]">
                                        <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                            <Icon.Eye className="fill-current w-[15px]" />
                                            <span>{item?.post?.view}</span>
                                        </div>
                                        <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                            <Icon.Chat className="fill-current w-[15px]" />
                                            <span>{item?.post?.comment}</span>
                                        </div>
                                        <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                            <Icon.Reply className="fill-current w-[15px] text-[#5f5f5f]" />
                                            <span>{item?.post?.bookmark}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-4 md:col-span-3 xs:mt-5 sm:mt-3 md:mt-0 md:py-0 sm:py-5">
                                <div className="flex">
                                    <div className="mr-[20px]">
                                        <Link to={item?.user?.path} >
                                            <img className="max-w-[40px] max-h-[40px] rounded-full" src={item?.user?.avatar} alt={item?.user?.fullname} />
                                        </Link>
                                    </div>
                                    <div className="w-full">
                                        <Link to={item?.user?.path} className="text-[#2d6ff7] hover:underline font-medium text-[15px]" >{item?.user?.fullname}</Link>
                                        <h3 className="pr-[50px] my-[5px] ">
                                            <Link to={item?.post?.path} className="font-medium text-[18px] hover:underline">{item?.post?.title}</Link>
                                        </h3>
                                        <div className="w-full gap-[5px] my-[10px]">
                                            {item?.post?.tags?.map((tag, indexTag) => {
                                                return (
                                                    <div className=" flex justify-between ">
                                                        <div>
                                                            <Link key={indexTag} to={tag?.path} className="block hover:bg-gray-300 bg-[#e7e7e7] px-[10px] py-[2px] text-[#5f5f5f] lg:text-[12px] rounded-[3px]" >{tag?.value}</Link>
                                                        </div>
                                                        <div className="my-auto">
                                                            <Icon.Questions className="fill-current w-[20px] text-[#5f5f5f] text-right" />
                                                        </div>
                                                    </div>

                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default QuestionInProfile
