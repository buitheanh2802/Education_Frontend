import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "../../../../Helpers/Timer";

const PostView = ({ posts }) => {
    return (
        <>
            {posts?.data?.models.length === 0 || posts.length === 0 ? (
                <div>
                    <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
                        Không có gì ở đây cả
                    </p>
                </div>
            )
                : (
                    <div>
                        {posts?.data?.models?.map((item, index) => {
                            return (
                                <div key={index} className="w-full flex px-[10px] py-[15px] border-b">
                                    <div className="mr-[15px] hidden sm:block">
                                        {item?.createBy?.avatar?.avatarUrl?.length > 0 ? (
                                            <Link
                                                to=""
                                                className="mt-[5px]  border border-gray-300 cursor-pointer select-none w-[40px] h-[40px] rounded-full bg-center bg-cover"
                                                style={{
                                                    backgroundImage: `url(${item?.createBy?.avatar?.avatarUrl})`,
                                                }}
                                                alt={item?.createBy?.fullname}
                                            ></Link>
                                        ) : (
                                            <Link
                                                to=""
                                                className="mt-[5px] flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none w-[40px] h-[40px] rounded-full"
                                            >
                                                {item?.createBy?.fullname?.slice(0, 1)?.toUpperCase()}
                                            </Link>
                                        )}
                                    </div>
                                    <div className="w-full">
                                        <Link
                                            to={item?.createBy?.path}
                                            className="text-[#2d6ff7] hover:underline font-medium text-[15px]"
                                        >
                                            {item?.createBy?.fullname}
                                        </Link>
                                        <span className="px-[5px]"> - </span>
                                        <span className="text-[13px] text-[#707885]">
                                            {timeFormatter(item?.createdAt)}
                                        </span>
                                        <h3 className="pr-[50px] mt-[5px]">
                                            <Link
                                                to={`/posts/${item?.slug}-${item?.shortId}`}
                                                className="font-medium text-[18px] hover:underline"
                                            >
                                                {item?.title}
                                            </Link>
                                            <span className="px-[5px]"> - </span>
                                            <button className="translate-y-[2px]">
                                                {" "}
                                                <Icon.Link className="w-[14px] fill-current text-[#666]" />
                                            </button>
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-[10px] my-[10px]">
                                            {item?.tags?.map((tag, indexTag) => {
                                                return (
                                                    <Link
                                                        key={indexTag}
                                                        to={tag?.path}
                                                        className="block hover:bg-gray-300 bg-[#e7e7e7] px-[10px] py-[2px] text-[#5f5f5f] text-[12px] rounded-[3px]"
                                                    >
                                                        {tag?.name}
                                                    </Link>
                                                );
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
                                                    <Icon.Bookmark className="fill-current w-[15px]" />
                                                    <span>{item?.bookmarks}</span>
                                                </div>
                                            </div>
                                            <Icon.Pen className="fill-current w-[20px] text-[#5f5f5f]" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            }
        </>
    );
};

export default PostView;
