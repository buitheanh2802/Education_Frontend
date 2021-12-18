import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "src/Components/Loading";
import { timeFormatter } from "src/Helpers/Timer";
import { useSelector } from "react-redux";
import PostAPI from "../../../../Apis/PostApi";
import { Icon } from "src/Components/Icon";

const PublishItem = (props) => {
  // _props
  const { title, content, index, createBy, createAt, shortId, publishedBy } =
    props;
  // selector
  const { profile } = useSelector((state) => state.Auth);
  // state
  const [loading, setLoading] = useState({
    error: false,
    success: false,
  });
  const [published, setPublished] = useState(publishedBy);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [postDetail, setPostDetail] = useState([]);

  const onPublish = async (boolean) => {
    // console.log(profile);
    try {
      if (boolean) setLoading({ ...loading, success: true });
      else setLoading({ ...loading, error: true });
      const request = {
        shortId: shortId,
        data: {
          isConfirm: boolean,
        },
      };
      const response = await PostAPI.publish(request);
      setPublished({
        ...publishedBy,
        user: {
          fullname: profile.fullname,
          username: profile.username,
        },
        isConfirm: boolean,
      });
    } catch (error) {
      console.log(error);
    }
    if (boolean) setLoading({ ...loading, success: true });
    else setLoading({ ...loading, error: true });
  };

  const handelPostDetail = async (shortId) => {
    setIsModalVisible(true);
    const { data: postDetails } = await PostAPI.getPost(shortId);
    setPostDetail(postDetails);
  };
  const handleCancelBox = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div
        className="nav bg-white border-b  text-[15px] p-[10px] grid 
        grid-cols-[60px,1.5fr,0.8fr,0.5fr,1.1fr] "
      >
        <div className="font-medium ">{index}</div>
        <div className="font-medium mr-[30px] text-blue-500 underline ">
          <p
            className="cursor-pointer"
            onClick={() => handelPostDetail(shortId)}
          >
            {title}
          </p>
        </div>
        <div className="">
          <Link
            className="text-blue-500 underline "
            to={`/user/${createBy?.username}`}
          >
            {createBy.fullname}
          </Link>
        </div>
        <div className="text-[13px] ">{timeFormatter(createAt)}</div>
        {!published.user ? (
          <div className="mx-auto flex ">
            <button
              disabled={loading.success}
              onClick={() => onPublish(true)}
              className="h-[35px] px-[10px] mb-[5px] flex items-center py-[5px] bg-blue-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md "
            >
              {loading.success && (
                <Loading className="w-[20px] fill-current mr-[5px] h-[20px] " />
              )}
              Duyệt
            </button>
            <button
              disabled={loading.error}
              onClick={() => onPublish(false)}
              className="h-[35px] px-[10px] mb-[5px] flex items-center py-[5px] bg-red-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md "
            >
              {loading.error && (
                <Loading className="w-[20px] fill-current mr-[5px] h-[20px] " />
              )}
              Hủy bỏ
            </button>
          </div>
        ) : (
          <Link className="mx-auto block">
            {published.isConfirm ? (
              <span className="block py-[10px] text-[14px] bg-green-400 px-[10px] rounded-md text-white ">
                Phê duyệt bởi : {published.user.fullname}
              </span>
            ) : (
              <span className="block text-[14px] py-[10px] bg-gray-400 px-[10px] rounded-md text-white ">
                Hủy bỏ bởi : {published.user.fullname}
              </span>
            )}
          </Link>
        )}
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
              Chi tiết bài viết:
            </p>
            <div className="mb-[10px] max-h-[75vh] overflow-auto">
              <div className="bg-white rounded-[5px] shadow px-[5px] sm:px-[15px] py-[20px] ">
                <div className="block">
                  <div className="flex items-center mb-[5px] ">
                    {postDetail?.data?.createBy?.avatar?.avatarUrl?.length >
                    0 ? (
                      <Link
                        to={`/user/${postDetail?.data?.createBy?.username}`}
                        className="  border border-gray-300 cursor-pointer select-none w-[55px] h-[55px] rounded-full bg-center bg-cover"
                        style={{
                          backgroundImage: `url(${postDetail?.data?.createBy?.avatar?.avatarUrl})`,
                        }}
                        alt={postDetail?.fullname}
                      ></Link>
                    ) : (
                      <Link
                        to={`/user/${postDetail?.data?.createBy?.username}`}
                        className="flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none w-[40px] h-[40px] rounded-full"
                      >
                        {postDetail?.data?.createBy?.fullname
                          ?.slice(0, 1)
                          ?.toUpperCase()}
                      </Link>
                    )}
                    <div className="ml-2">
                      <p className="text-blue-500 text-[14px] sm:text-[16px] font-medium flex items-center">
                        <Link
                          to={`/user/${postDetail?.data?.createBy?.username}`}
                        >
                          <span className="hover:underline">
                            {postDetail?.data?.createBy?.fullname}
                          </span>
                        </Link>
                        <span className=" text-[12px] sm:text-[14px] text-gray-500 hidden sm:block ">
                          - @{postDetail?.data?.createBy?.username}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between  ">
                  <p className="text-[18px] sm:text-[24px] font-medium">
                    {postDetail?.data?.title}
                  </p>
                </div>
                <div className="flex items-center mt-[10px]">
                  <p className="flex items-center text-gray-500">
                    <Icon.Eye className="fill-current w-[15px] " />
                    <span className="text-[12px] sm:text-[14px] ml-1">
                      {postDetail?.data?.views} lượt xem
                    </span>
                  </p>
                  <p className="flex items-center text-gray-500 ml-[10px]">
                    <Icon.Chat className="fill-current w-[13px] " />
                    <span className="text-[12px] sm:text-[14px] ml-1">
                      {postDetail?.data?.countComment} bình luận
                    </span>
                  </p>
                  <p className="flex items-center text-gray-500 ml-[10px]">
                    <Icon.Bookmark className="fill-current w-[13px] " />
                    <span className="text-[12px] sm:text-[14px] ml-1">
                      {postDetail?.data?.bookmarks.length} đã lưu
                    </span>
                  </p>
                </div>
                <div className="flex items-center mt-[8px]">
                  <p className="flex items-center text-gray-500">
                    <Icon.Tags className="fill-current w-[13px] " />
                    <span className="text-[14px] ml-1">Tags</span>
                  </p>
                  <span>
                    {postDetail?.data?.tags?.map((item, index) => {
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
                  {timeFormatter(postDetail?.data?.createdAt)}
                </p>
                <div
                  className="mt-[20px] "
                  dangerouslySetInnerHTML={{
                    __html: postDetail?.data?.content,
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
