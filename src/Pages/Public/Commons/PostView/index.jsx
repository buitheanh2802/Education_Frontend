import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'

const PostView = ({ data }) => {
    return (
        <>
            {data?.map((item, index) => {
                return (
                    <div key={index} className="w-full flex px-[10px] py-[15px] border-b">
                       <div className="mr-[20px] hidden sm:block">
                            <Link to={item?.user?.path} >
                                <img className="max-w-[40px] max-h-[40px] rounded-full" src={item?.user?.avatar} alt={item?.user?.fullname} />
                            </Link>
                        </div>
                        <div className="w-full">
                            <Link to={item?.user?.path} className="text-[#2d6ff7] hover:underline font-medium text-[15px]" >{item?.user?.fullname}</Link>
                            <span className="px-[5px]">-</span>
                            <span className="text-[13px] text-[#707885]">{item?.post?.time}</span>
                            <h3 className="pr-[50px]">
                                <Link to={item?.post?.path} className="font-medium text-[18px] hover:underline">{item?.post?.title}</Link>
                                <span className="px-[5px]">-</span>
                                <button className="translate-y-[2px]"> <Icon.Link className="w-[14px] fill-current text-[#666]" /></button>
                            </h3>
                            <div className="flex flex-wrap items-center gap-[5px] my-[5px]">
                                {item?.post?.tags?.map((tag, indexTag) => {
                                    return (
                                        <Link key={indexTag} to={tag?.path} className="block hover:bg-gray-300 bg-[#e7e7e7] px-[10px] py-[2px] text-[#5f5f5f] text-[12px] rounded-[3px]" >{tag?.value}</Link>
                                    )
                                })}
                            </div>

                            <div className="flex justify-between mt-[5px] ">
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
                                        <Icon.Bookmark className="fill-current w-[15px]" />
                                        <span>{item?.post?.bookmark}</span>
                                    </div>
                                </div>
                                <Icon.Pen className="fill-current w-[20px] text-[#5f5f5f]" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default PostView

// const fieldPost = [
//     {
//         user: {
//             fullname: "Nguyễn Thàn Đạt",
//             avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
//             path: "/profile/nguyenthanhdat"
//         },
//         post: {
//             title: "Tìm hiểu về middleware trong NodeJS",
//             time: "Khoảng 2h trước",
//             view: 150,
//             bookmark: 25,
//             path: path.POSTS_ID,
//             tags: [
//                 { path: path.TAGS_ID, value: "NodeJS" },
//                 { path: path.TAGS_ID, value: "ExpressJS" }
//             ]
//         }
//     },
//     {
//         user: {
//             fullname: "Bùi Thế Anh",
//             avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
//             path: "/profile/buitheanh"
//         },
//         post: {
//             title: "Tìm hiểu về ExpressJS",
//             time: "Khoảng 3h trước",
//             view: 150,
//             comment: 87,
//             bookmark: 25,
//             link: 120,
//             dislike: 20,
//             path: path.POSTS_ID,
//             tags: [
//                 { path: path.TAGS_ID, value: "ExpressJS" }
//             ]
//         }
//     }
// ]
