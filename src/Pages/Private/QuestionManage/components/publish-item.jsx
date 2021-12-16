import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingIcon from "src/Components/Loading/LoadingIcon";
import { timeFormatter } from "src/Helpers/Timer";
import { useSelector } from "react-redux";
import QuestionApi from "src/Apis/QuestionApi";
import { Icon } from "src/Components/Icon";

const PublishItem = (props) => {
  // _props
  const { title, index, createBy, createAt, id, spam, username } = props;
  // selector
  const { profile } = useSelector((state) => state.Auth);
  // state
  const [loading, setLoading] = useState({
    error: false,
    success: false,
  });
  const [spamName, setSpamName] = useState(spam);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questionDetail, setQuestionDetail] = useState([]);
  const onMarkSpam = async (id) => {
    try {
      if (id) setLoading({ ...loading, success: true });

      await QuestionApi.questionSpam(id);
      if (spamName === true) {
        setSpamName(false);
      } else {
        setSpamName(true);
      }
      if (id) setLoading({ ...loading, success: false });
    } catch (error) {
      console.log(error);
    }
  };

  const handelQuestionDetail = async (id) => {
    setIsModalVisible(true);
    const { data: questionDetail } = await QuestionApi.getId(id);
    setQuestionDetail(questionDetail);
  };
  const handleCancelBox = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div
        className="nav bg-white border-b  text-[15px] p-[10px] grid
    grid-cols-[60px,1.5fr,1.2fr,0.5fr,1.2fr] "
      >
        <div className="font-medium ">{index}</div>
        <div className="font-medium mr-[30px] text-blue-500 underline cursor-pointer">
          <p onClick={() => handelQuestionDetail(id)}>{title}</p>
        </div>

        <div className="">
          <Link className="text-blue-500 underline " to={`/user/${username}`}>
            {createBy.fullname}
          </Link>
        </div>
        <div className="text-[13px] ">{timeFormatter(createAt)}</div>

        <div className="text-center">
          <button
            onClick={() => onMarkSpam(id)}
            className={
              spamName
                ? "px-[10px] py-[3px] text-[14px]  text-white bg-gray-400 rounded-md flex mx-auto "
                : "px-[10px] py-[3px] text-[14px]  text-white bg-red-500 rounded-md flex mx-auto "
            }
          >
            {loading.success && (
              <LoadingIcon className="w-[20px] text-[14px] fill-current mr-[5px] h-[20px] " />
            )}
            {spamName ? "Hủy Spam" : "Spam"}
          </button>
        </div>
      </div>
      <div
        className={
          isModalVisible
            ? "fixed z-[99999] inset-0 bg-black bg-opacity-10"
            : "hidden"
        }
      >
        <div className="fixed z-[999999] top-1/2 left-1/2 transform   -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[60vw]">
          <div
            action=""
            class="w-full h-full relative bg-white rounded px-[30px]"
          >
            <p className="text-[18px] font-medium mb-[15px] pt-[15px] text-gray-700">
              Chi tiết câu hỏi:
            </p>
            <div className="mb-[10px] max-h-[75vh] overflow-auto">
              <div className="bg-white rounded-[5px] shadow px-[5px] sm:px-[15px] py-[20px] ">
                <div className="block">
                  <div className="flex items-center mb-[5px] ">
                    {questionDetail?.data?.createBy?.avatar?.avatarUrl?.length >
                    0 ? (
                      <Link
                        to={`/user/${questionDetail?.data?.createBy?.username}`}
                        className="  border border-gray-300 cursor-pointer select-none w-[55px] h-[55px] rounded-full bg-center bg-cover"
                        style={{
                          backgroundImage: `url(${questionDetail?.data?.createBy?.avatar?.avatarUrl})`,
                        }}
                        alt={questionDetail?.fullname}
                      ></Link>
                    ) : (
                      <Link
                        to={`/user/${questionDetail?.data?.createBy?.username}`}
                        className="flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none w-[40px] h-[40px] rounded-full"
                      >
                        {questionDetail?.data?.createBy?.fullname
                          ?.slice(0, 1)
                          ?.toUpperCase()}
                      </Link>
                    )}
                    <div className="ml-2">
                      <p className="text-blue-500 text-[14px] sm:text-[16px] font-medium flex items-center">
                        <Link
                          to={`/user/${questionDetail?.data?.createBy?.username}`}
                        >
                          <span className="hover:underline">
                            {questionDetail?.data?.createBy?.fullname}
                          </span>
                        </Link>
                        <span className=" text-[12px] sm:text-[14px] text-gray-500 hidden sm:block ">
                          - @{questionDetail?.data?.createBy?.username}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between  ">
                  <p className="text-[18px] sm:text-[24px] font-medium">
                    {questionDetail?.data?.title}
                  </p>
                </div>
                <div className="flex items-center mt-[10px]">
                  <p className="flex items-center text-gray-500">
                    <Icon.Eye className="fill-current w-[15px] " />
                    <span className="text-[12px] sm:text-[14px] ml-1">
                      {questionDetail?.data?.views} lượt xem
                    </span>
                  </p>
                  <p className="flex items-center text-gray-500 ml-[10px]">
                    <Icon.Chat className="fill-current w-[13px] " />
                    <span className="text-[12px] sm:text-[14px] ml-1">
                      {questionDetail?.data?.countComment} bình luận
                    </span>
                  </p>
                  <p className="flex items-center text-gray-500 ml-[10px]">
                    <Icon.Bookmark className="fill-current w-[13px] " />
                    <span className="text-[12px] sm:text-[14px] ml-1">
                      {questionDetail?.data?.bookmarks.length} đã lưu
                    </span>
                  </p>
                </div>
                <div className="flex items-center mt-[8px]">
                  <p className="flex items-center text-gray-500">
                    <Icon.Tags className="fill-current w-[13px] " />
                    <span className="text-[14px] ml-1">Tags</span>
                  </p>
                  <span>
                    {questionDetail?.data?.tags?.map((item, index) => {
                      return (
                        <Link
                          to={`/tag/${item?.slug}`}
                          className="bg-[#E2E8F0] hover:bg-gray-300 rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2"
                          key={index}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </span>
                </div>
                <p className="text-gray-500 text-[12px] sm:text-[14px] mt-[8px]">
                  {timeFormatter(questionDetail?.data?.createdAt)}
                </p>
                <div
                  className="mt-[20px] "
                  dangerouslySetInnerHTML={{
                    __html: questionDetail?.data?.content,
                  }}
                ></div>
              </div>
            </div>

            <div className=" pb-[15px] flex justify-end">
              <button
                onClick={() => handleCancelBox()}
                className=" border border-gray-400 text-gray-500 text-[14px] hover:bg-blue-50  hover:text-blue-400 rounded-[3px] px-[15px] py-[3px]"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishItem;
