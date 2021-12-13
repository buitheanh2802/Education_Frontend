import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "src/Helpers/Timer";
const PostRelated = ({ otherPost }) => {
  return (
    <>
      <div className="bg-white shadow rounded-[5px] mt-[20px] p-[15px] ">
        <div className="leading-[15px]">
          <p className="text-[18px] font-medium text-gray-600">
            BÀI VIẾT LIÊN QUAN
          </p>
          <span className="inline-block w-[60px] h-[3px] bg-gray-600 "></span>
        </div>
        <div className="mt-[5px]">
          {otherPost?.data.map((item, index) => {
            return (
              <>
                <div className="py-[10px] border-b border-gray-100">
                  <Link
                    to={`/posts/${item?.slug}-${item?.shortId}`}
                    className="text-black font-medium hover:underline text-[14px]"
                  >
                    {item.title}
                  </Link>
                  <p className="flex items-center ">
                    <Link
                      to={`/user/${item?.createBy?.username}`}
                      className="text-[14px] hover:underline font-medium text-blue-500"
                    >
                      {item.createBy.fullname}
                    </Link>
                    <span className="text-[12px] text-gray-500 ml-2">
                      {timeFormatter(item?.createdAt)}
                    </span>
                  </p>
                  <div className="flex items-center mt-[5px]">
                    <p className="flex items-center text-gray-500">
                      <Icon.Eye className="fill-current w-[15px] " />
                      <span className="text-[14px] ml-1">{item.views}</span>
                    </p>
                    <p className="flex items-center text-gray-500 ml-[10px]">
                      <Icon.Chat className="fill-current w-[13px] " />
                      <span className="text-[14px] ml-1">{item.comments}</span>
                    </p>

                    <p className="flex items-center text-gray-500 ml-[10px]">
                      <Icon.Bookmark className="fill-current w-[13px] " />
                      <span className="text-[14px] ml-1">{item.bookmarks}</span>
                    </p>
                  </div>
                </div>{" "}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostRelated;
