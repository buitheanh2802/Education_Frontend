import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "src/Components/Icon";

const PostInTag = ({ data }) => {
  return (
    <>
      {data?.length === 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có bài viết
          </p>
        </div>
      ) : (
        <div>
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full px-[10px] py-[15px] border-b lg:mt-0 md:mt-3"
              >
                <div className="flex">
                  <div className="mx-[10px]">
                    <Link to={item?.createBy?.username}>
                      {item?.createBy?.avatar?.avatarUrl ? (
                        <img
                          className="mx-auto max-h-[70px] rounded-full"
                          width="70px"
                          height="70px"
                          src={item?.createBy?.avatar?.avatarUrl}
                          alt={item?.createBy?.username}
                        />
                      ) : (
                        <div className="py-[8px] text-[#4A5568] mx-auto text-center md:w-[55px] md:h-[55px] rounded-full bg-blue-300 font-bold text-[28px]">
                          {item?.createBy?.fullname
                            .toUpperCase()
                            .substring(0, 1)}
                        </div>
                      )}
                    </Link>
                  </div>
                  <div className="w-full">
                    <Link
                      to={`/user/${item?.createBy?.username}`}
                      className="text-[#2d6ff7] inline-block hover:underline font-medium text-[15px]"
                    >
                      {item?.createBy?.fullname}
                    </Link>
                    <span className="px-[5px]  inline-block">-</span>
                    <div className=" inline-block">
                      <div className=" inline-block mr-[5px] pt-[0px]">
                        <Icon.Calendar className="fill-current w-[13px] " />
                      </div>
                      <div className=" inline-block">
                        <span className="col-span-4 text-[13px] text-[#707885]">
                          {item?.createdAt}
                        </span>
                      </div>
                    </div>
                    <h3 className="pr-[50px] my-[5px]">
                      <Link
                        to={`/posts/${item?.title}-${item?.shortId}`}
                        className="font-medium text-[18px] hover:underline"
                      >
                        {item?.title}
                      </Link>
                      <span className="px-[5px]">-</span>
                      <button className="translate-y-[2px]">
                        {" "}
                        <Icon.Link className="w-[14px] fill-current text-[#666]" />
                      </button>
                    </h3>
                    <div className="flex gap-[5px] my-[10px]">
                      {item?.tags.map((tag, indexTag) => {
                        return (
                          <>
                            <div>
                              <Link
                                key={indexTag}
                                to={tag?.slug}
                                className="block hover:bg-gray-300 bg-[#e7e7e7] px-[10px] py-[2px] text-[#5f5f5f] lg:text-[12px] rounded-[3px]"
                              >
                                {tag?.name}
                              </Link>
                            </div>
                          </>
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
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PostInTag;
