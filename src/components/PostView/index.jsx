import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icon'

const PostView = ({ data }) => {
    return (
        <div className="container mx-auto shadow-sm bg-white px-[5px] rounded ">
            {data.map((item, index) => {
                return (
                    <div key={index} className="flex px-[10px] py-[15px] border-b">
                        <div className="mr-[20px] ">
                            <Link to={item.user.path} >
                                <img className="max-w-[40px] max-h-[40px] rounded-full" src={item.user.avatar} alt={item.user.fullname} />
                            </Link>
                        </div>
                        <div className="w-full">
                            <Link to={item.user.path} className="text-[#2d6ff7] hover:underline font-medium text-[14px]" >{item.user.fullname}</Link>
                            <div className="flex flex-wrap items-center gap-[5px]">
                                <h3> <Link to={item.post.path} className="font-medium text-[19px] hover:underline">{item.post.title}</Link> </h3>
                                <div className="flex flex-wrap items-center gap-[5px]">
                                    {item.post.tags.map((tag, indexTag) => {
                                        return (
                                            <Link key={indexTag} to={tag.path} className="block hover:bg-gray-300 bg-[#e7e7e7] px-[10px] py-[2px] text-[#5f5f5f] text-[12px] rounded-[3px]" >{tag.value}</Link>
                                        )
                                    })}
                                    <span className="relative w-[20px] after:left-1/2 after:top-1/2 self-center after:translate-y-[-50%] after:translate-x-[-50%] text-[#707885] after:absolute after:content-['-'] "></span>
                                    <button className="translate-y-[2px]"> <Icon.Link className="w-[14px] fill-current text-[#666]" /></button>
                                </div>
                            </div>
                            <span className="text-[13px] text-[#707885]">{item.post.time}</span>
                            <div className="flex justify-between mt-[5px] ">
                                <div className="flex text-[14px] gap-[15px]">
                                    <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                        <Icon.Eye className="fill-current w-[15px]" />
                                        <span>{item.post.view}</span>
                                    </div>
                                    <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                        <Icon.Chat className="fill-current w-[15px]" />
                                        <span>{item.post.comment}</span>
                                    </div>
                                    <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                        <Icon.Bookmark className="fill-current w-[15px]" />
                                        <span>{item.post.bookmark}</span>
                                    </div>
                                </div>
                                <div className="flex text-[14px] gap-[15px]">
                                    <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                        <Icon.Like className="fill-current w-[15px]" />
                                        <span>{item.post.link}</span>
                                    </div>
                                    <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                        <Icon.Dislike className="fill-current w-[15px]" />
                                        <span>{item.post.dislike}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default PostView
