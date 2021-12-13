import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "../../../../Helpers/Timer";
const QuestionView = ({ questions }) => {
  return (
    <>
      {questions?.length === 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có gì ở đây cả
          </p>
        </div>
      ) : (
        <>
          {questions?.map((item) => {
            return (
              <div
                key={item?._id}
                className="w-full flex px-[10px] py-[15px] border-b"
              >
                <div className="mr-[15px] ">
                  {item?.createBy?.avatar?.avatarUrl?.length > 0 ? (
                    <Link to={`/user/${item?.createBy?.username}`}>
                      <img
                        className="mx-auto max-h-[40px] rounded-full"
                        width="40px"
                        height="40px"
                        src={item?.createBy?.avatar?.avatarUrl}
                        alt="Avatar"
                      />
                    </Link>
                  ) : (
                    <Link
                      to={`/user/${item?.createBy?.username}`}
                      className="mt-[5px] flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none w-[40px] h-[40px] rounded-full"
                    >
                      {item?.createBy?.fullname?.slice(0, 1)?.toUpperCase()}
                    </Link>
                  )}
                </div>
                <div className="w-full">
                  <Link
                    to={`/user/${item?.createBy?.username}`}
                    className="text-[#2d6ff7] hover:underline font-medium text-[15px]"
                  >
                    {item?.createBy?.fullname}
                  </Link>
                  <span className="px-[5px]">-</span>
                  <span className="text-[13px] text-[#707885]">
                    {timeFormatter(item?.createdAt)}
                  </span>
                  <h3 className="pr-[50px]">
                    <Link
                      to={`/question/${item?.slug}-${item?._id}`}
                      className="font-medium text-[18px] hover:underline"
                    >
                      {item?.title}
                    </Link>
                    <span className="px-[5px]">-</span>
                    <button className="translate-y-[2px] relative">
                      {" "}
                      <Icon.Link className="w-[14px] fill-current text-[#666]" />
                    </button>
                  </h3>
                  <div className="flex flex-wrap items-center gap-[5px] my-[5px]">
                    {item?.tags?.map((tag) => {
                      return (
                        <Link
                          key={tag?._id}
                          to={`/tag/${tag?.slug}`}
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
                        <span>{item?.views ? item?.views : "0"}</span>
                      </div>
                      <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                        <Icon.Like className="fill-current w-[15px]" />
                        <span>{item?.countLikes}</span>
                      </div>
                      <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                        <Icon.Dislike className="fill-current w-[15px]" />
                        <span>{item?.countDislike}</span>
                      </div>
                    </div>
                    <Icon.Questions className="fill-current w-[20px] text-[#5f5f5f]" />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default QuestionView;
