import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { path } from "src/Constants/";
import { timeFormatter } from "../../../../Helpers/Timer";

const QuestionView = ({ questions }) => {
  const token = localStorage.getItem("_token_");
  const location = useLocation();
  if (
    !token &&
    (location.pathname === path.QUESTIONS_FOLLOWING ||
      location.pathname === path.QUESTIONS_BOOK_MARK)
  ) {
    return (
      <div>
        <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
          Vui lòng đăng nhập
        </p>
      </div>
    );
  }
  return (
    <>
      {questions?.length === 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có câu hỏi
          </p>
        </div>
      ) : (
        <>
          {questions?.map((item) => {
            return (
              <div
                key={item?._id}
                className="w-full flex px-[10px] py-[15px] border-b last:border-none"
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
                      className="mt-[5px] flex justify-center font-bold items-center text-[#4A5568]   border border-gray-300 bg-blue-300 cursor-pointer select-none w-[40px] h-[40px] rounded-full"
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
                    {item?.views > 100 ? (
                      <p className="block hover:bg-blue-300 bg-blue-500 px-[10px] py-[2px] text-[#fff] text-[12px] rounded-[3px]">
                        Trending
                      </p>
                    ) : null}
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
                        <Icon.Bookmark className="fill-current w-[14px]" />
                        <span>{item?.countBookmarks}</span>
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
