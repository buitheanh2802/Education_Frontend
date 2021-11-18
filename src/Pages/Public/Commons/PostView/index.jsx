import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'
import { useSelector } from 'react-redux'
import BookmarkApi from 'src/Apis/BookmarkApi'

const PostView = ({ posts }) => {
    const user = useSelector(state => state.Auth);

    const handleAddBookmark = async(shortId) => {
        await BookmarkApi.addBookmark(shortId);
        console.log(posts);
    }
    return (
        <>
            {posts?.data?.models?.map((item, index) => {
                return (
                    <div key={index} className="w-full flex px-[10px] py-[15px] border-b">
                       <div className="mr-[20px] hidden sm:block">
                            <Link to={item?.createBy?.path} >
                                <img className="max-w-[40px] max-h-[40px] rounded-full" src={item?.createBy?.avatar?.avatarUrl} 
                                alt={item?.createBy?.fullname} />
                            </Link>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <div>
                                    <Link to={item?.createBy?.path} className="text-[#2d6ff7] hover:underline font-medium text-[15px]" >
                                        {item?.createBy?.fullname}
                                    </Link>
                                    <span className="px-[5px]"> - </span>
                                    <span className="text-[13px] text-[#707885]">{item?.createdAt}</span>
                                </div>
                            </div>
                            <h3 className="pr-[50px]">
                                <Link to={item?.path} className="font-medium text-[18px] hover:underline">{item?.title}</Link>
                                <span className="px-[5px]"> - </span>
                                <button className="translate-y-[2px]"> <Icon.Link className="w-[14px] fill-current text-[#666]" /></button>
                            </h3>
                            <div className="flex flex-wrap items-center gap-[10px] my-[10px]">
                                {item?.tags?.map((tag, indexTag) => {
                                    return (
                                        <Link key={indexTag} to={tag?.path} className="block hover:bg-gray-300 bg-[#e7e7e7] px-[10px] py-[2px] text-[#5f5f5f] text-[12px] rounded-[3px]" >{tag?.name}</Link>
                                    )
                                })}
                            </div>
                            <div className="flex justify-between mt-[5px] ">
                                <div className="flex text-[14px] gap-[15px]">
                                    <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                        <Icon.Eye className="fill-current w-[15px]" />
                                        <span>{item?.views}</span>
                                    </div>
                                    <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                        <Icon.Chat className="fill-current w-[15px]" />
                                        <span>{item?.comments}</span>
                                    </div>
                                    <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                        <Icon.Bookmark className="fill-current w-[15px]" onClick={() => handleAddBookmark(item?.shortId)} />
                                        <span>{item?.bookmarks}</span>
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
