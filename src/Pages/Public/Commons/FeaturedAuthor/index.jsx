import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'

const FeaturedAuthor = ({ authors }) => {
    return (
        <div>
            <h2 className="px-[5px] uppercase font-medium py-[10px] border-b mx-[5px] "> Các tác giả nổi bật</h2>
            <div className="py-[5px] mx-[10px]">
                {authors?.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center">
                            <Link to={item?.path} className="mr-[15px] block">
                                <img className="max-w-[40px] max-h-[40px] rounded-full" src={item?.avatar} alt={item?.fullname} />
                            </Link>
                            <div className="border-b py-[15px]">
                                <div className="flex flex-wrap text-[#707885] items-center gap-[5px] mb-[5px]">
                                    <Link to={item?.path} className="text-[#2d6ff7] hover:underline">{item?.fullname}</Link> <span>-</span> <span className="text-[13px] text-[#707885] ">{item?.username}</span>
                                </div>
                                <div className="flex text-[13px] gap-[15px] items-center">
                                    {item?.point && <div className="flex items-center gap-[5px] text-[#707885]">
                                        <Icon.Point className="fill-current w-[13px]" />
                                        <span>{item?.point}</span>
                                    </div>}
                                    {item?.post && <div className="flex items-center gap-[5px] text-[#707885]">
                                        <Icon.Pen className="fill-current w-[13px]" />
                                        <span>{item?.post}</span>
                                    </div>}
                                    {item?.question && <div className="flex items-center gap-[5px] text-[#707885]">
                                        <Icon.Questions className="fill-current w-[12px]" />
                                        <span>{item?.question}</span>
                                    </div>}
                                    {item?.folow && <div className="flex items-center gap-[5px] text-[#707885]">
                                        <Icon.Follower className="fill-current w-[13px]" />
                                        <span>{item?.folow}</span>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedAuthor;

// const authors = [
//     {
//         path: "/",
//         fullname: "Nguyễn Thành Đạt",
//         username: "@nguyenthanhdat",
//         avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
//         point: 567,
//         post: 234,
//         question: 456,
//         folow: 345
//     }
// ]
