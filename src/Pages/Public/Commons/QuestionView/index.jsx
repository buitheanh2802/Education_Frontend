import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "../../../../Helpers/Timer";
const QuestionView = ({ questions }) => {
  //   console.log(questions.data.);
  return (
    <>
      {questions?.data?.models?.map((item) => {
        return (
          <div
            key={item?._id}
            className="w-full flex px-[10px] py-[15px] border-b"
          >
            <div className="mr-[15px] ">
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
                <button className="translate-y-[2px]">
                  {" "}
                  <Icon.Link className="w-[14px] fill-current text-[#666]" />
                </button>
              </h3>
              <div className="flex flex-wrap items-center gap-[5px] my-[5px]">
                {item?.tags?.map((tag) => {
                  return (
                    <Link
                      key={tag?._id}
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
  );
};

export default QuestionView;

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
