import React, { useState, useEffect } from "react";
import { Icon } from "src/Components/Icon";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PostsNew from "../Commons/PostNew";
import PostApi from "src/Apis/PostApi";
import { timeFormatter } from "src/Helpers/Timer";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

const PostsDetail = () => {
  const shortId = useParams();
  const [postmenu, setPostmenu] = useState(false);
  const [postShare, setpostShare] = useState(false);
  const [postDetail, setPostDetail] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const list = async (id) => {
      try {
        let { data: post } = await PostApi.getPost(id);
        setPostDetail(post);
      } catch (error) {
        console.log(error);
      }
    };
    list(shortId?.id);
  }, []);
  const shareUrl = "https://www.npmjs.com/package/react-share";
  // console.log(window.location.href);
  return (
    <>
      {/* {postDetail && (
        <> */}
      <div className="mt-[80px] container mx-auto bg-white rounded-[5px] shadow">
        <div className="px-[10px] sm:px-[15px] py-[10px] ">
          <p className="text-gray-500 text-[14px] ">
            Trang chủ / Bài viết /
            <span className="text-blue-500 ml-1">
              {postDetail?.data?.title || <Skeleton width={200} />}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[2.8fr,1.2fr] gap-[30px] mt-[20px]">
        <div className="">
          <div className="bg-white rounded-[5px] shadow px-[5px] sm:px-[15px] py-[20px] ">
            <div className="block lg:hidden">
              <div className="flex items-center mb-[5px] ">
                {postDetail?.data?.createBy?.avatar?.avatarUrl?.length > 0 ? (
                  <Link
                    to=""
                    className="  border border-gray-300 cursor-pointer select-none w-[55px] h-[55px] rounded-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${postDetail?.data?.createBy?.avatar?.avatarUrl})`,
                    }}
                    alt={postDetail?.fullname}
                  ></Link>
                ) : (
                  <Link
                    to=""
                    className="flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none w-[40px] h-[40px] rounded-full"
                  >
                    {postDetail?.data?.createBy?.fullname
                      ?.slice(0, 1)
                      ?.toUpperCase()}
                  </Link>
                )}
                <div className="ml-2">
                  <p className="text-blue-500 text-[14px] sm:text-[16px] font-medium flex items-center">
                    <Link to={postDetail?.data?.createBy?.path}>
                      <span className="hover:underline">
                        {postDetail?.data?.createBy?.fullname}
                      </span>
                    </Link>
                    <span className=" text-[12px] sm:text-[14px] text-gray-500 hidden sm:block ">
                      - @{postDetail?.data?.createBy?.username}
                    </span>
                    <span>
                      <button className="mt-1 sm:mt-0 ml-2 border rounded-[3px] border-blue-500 text-[12px] text-blue-500 px-[5px] py-[1px] hover:text-white hover:bg-blue-500">
                        + Theo dõi
                      </button>
                    </span>
                  </p>
                  <div className="flex items-center mt-[3px]">
                    <p className="flex items-center text-gray-500">
                      <Icon.Point className="fill-current w-[12px] sm:w-[15px] " />
                      <span className="text-[12px] sm:text-[14px] ml-1">
                        {postDetail?.data?.createBy?.points}
                      </span>
                    </p>
                    <p className="flex items-center text-gray-500 ml-[10px]">
                      <Icon.Pen className="fill-current  w-[12px] sm:w-[13px] " />
                      <span className="text-[12px] sm:text-[14px] ml-1">
                        {postDetail?.data?.createBy?.postCounts}
                      </span>
                    </p>
                    <p className="flex items-center text-gray-500 ml-[10px]">
                      <Icon.Questions className="fill-current w-[12px] sm:w-[13px] " />
                      <span className="text-[12px] sm:text-[14px] ml-1">
                        {postDetail?.data?.createBy?.questionCounts}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between  ">
              <p className="text-[18px] sm:text-[24px] font-medium">
                {postDetail?.data?.title || <Skeleton width={500} />}
              </p>
              <div className="relative">
                <button
                  className="h-full btn__post"
                  onClick={() => setPostmenu(!postmenu)}
                >
                  <Icon.DotsVertical className=" w-[13px] " />
                </button>
                <div
                  className={
                    postmenu
                      ? "post__menu bg-white"
                      : "post__menu bg-white hidden"
                  }
                >
                  <ul className="relative text-[14px] py-[5px]">
                    <li className="flex items-center cursor-pointer text-gray-700 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500">
                      <Icon.Flag className="fill-current w-[16px]  mr-[5px]" />
                      Báo cáo
                    </li>
                    <li className="flex items-center cursor-pointer text-gray-700 mt-1 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500">
                      <Icon.ExternaLink className="fill-current w-[20px] mr-[5px]" />
                      Sao chép link bài viết
                    </li>
                  </ul>
                </div>
              </div>
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
                  {postDetail?.data?.comments} bình luận
                </span>
              </p>
              <p className="flex items-center text-gray-500 ml-[10px]">
                <Icon.Bookmark className="fill-current w-[13px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                  {postDetail?.data?.bookmarks} đã lưu
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
                    <button
                      className="bg-[#E2E8F0] hover:bg-gray-300 rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2"
                      key={index}
                    >
                      {item.name}
                    </button>
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
            <div className="mt-[20px] inline-block">
              <div className="flex items-center border-b border-gray-300 ">
                <button className="text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  hover:bg-gray-500 hover:text-white">
                  <Icon.Like className="fill-current w-[13px]" />
                  <span className="text-[12x] md:text-[14x] ml-1">
                    {postDetail?.data?.likes}
                  </span>
                </button>
                <button className=" text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center hover:bg-gray-500 hover:text-white">
                  <Icon.Dislike className="fill-current w-[13px]" />
                  <span className="text-[12x] md:text-[14x] ml-1">
                    {postDetail?.data?.dislikes}
                  </span>
                </button>
                <div className="relative">
                  <button
                    className={
                      postShare
                        ? " px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center bg-gray-500 text-white"
                        : "text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center hover:bg-gray-500 hover:text-white"
                    }
                    onClick={() => setpostShare(!postShare)}
                  >
                    <Icon.Share className="fill-current w-[15px]" />
                    <span className="text-[12x] md:text-[14x] ml-1">30</span>
                  </button>
                  <div
                    className={
                      postShare
                        ? "post__share bg-white py-[5px]"
                        : "post__share bg-white py-[5px] hidden"
                    }
                  >
                    <ul className=" text-[14px] ">
                      <li className=" text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <FacebookShareButton
                          url={shareUrl}
                          className="flex items-center"
                        >
                          <Icon.Facebook className="fill-current w-[12px] mr-[5px] " />
                          Chia sẻ đến FaceBook
                        </FacebookShareButton>
                      </li>
                      <li className="text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <TwitterShareButton
                          url={shareUrl}
                          className="flex items-center"
                        >
                          <Icon.Twitter className="fill-current w-[15px] mr-[5px]" />
                          Chia sẻ đến Twitter
                        </TwitterShareButton>
                      </li>
                      <li className=" text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <EmailShareButton
                          url={shareUrl}
                          className="flex items-center"
                        >
                          <Icon.Email className="fill-current w-[12px] mr-[5px]" />
                          Chia sẻ đến Email
                        </EmailShareButton>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="bg-white shadow rounded-[5px] ">
            <div className="flex py-[7px] block-avt justify-center">
              {postDetail?.data?.createBy?.avatar?.avatarUrl?.length > 0 ? (
                <Link
                  to=""
                  className="  border border-gray-300 cursor-pointer select-none w-[40px] h-[40px] rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${postDetail?.data?.createBy?.avatar?.avatarUrl})`,
                  }}
                  alt={postDetail?.fullname}
                ></Link>
              ) : (
                <Link
                  to=""
                  className="flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none w-[55px] h-[55px] rounded-full"
                >
                  {postDetail?.data?.createBy?.fullname
                    ?.slice(0, 1)
                    ?.toUpperCase()}
                </Link>
              )}
            </div>
            <div className="py-[10px] px-[15px]  border-b border-gray-100 flex justify-between items-center">
              <p className="text-[16px] font-medium ">
                <Link to={postDetail?.data?.createBy?.path}>
                  <span className="block hover:underline	">
                    {postDetail?.data?.createBy?.fullname}
                  </span>
                </Link>
                <span className="block text-[14px] text-gray-500 font-normal">
                  @{postDetail?.data?.createBy?.username}
                </span>
              </p>
              <button className="border border-blue-500 px-4 py-[3px] text-[14px] text-blue-500  rounded-[3px] hover:bg-blue-500 hover:text-white">
                + Theo dõi
              </button>
            </div>
            <div className="py-[10px] flex border-b border-gray-100">
              <div className="m-auto flex">
                <p className="text-center  ">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Point className="fill-current w-[13px]  mr-[3px]" />
                    Điểm
                  </span>
                  <span className="block ">
                    {postDetail?.data?.createBy?.points}
                  </span>
                </p>
                <p className="text-center ml-[30px] ">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Pen className="fill-current w-[13px]  mr-[3px]" />
                    Bài viết
                  </span>
                  <span className="block ">
                    {postDetail?.data?.createBy?.postCounts}
                  </span>
                </p>{" "}
                <p className="text-center ml-[30px]">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Questions className="fill-current w-[13px]  mr-[3px]" />
                    Câu hỏi
                  </span>
                  <span className="block ">
                    {postDetail?.data?.createBy?.questionCounts}
                  </span>
                </p>
              </div>
            </div>
            <div className="p-[15px]">
              <button className="text-blue-500 w-full  py-[3px] border border-blue-500 rounded-[3px] flex justify-center items-center hover:bg-blue-500 hover:text-white">
                <Icon.Bookmark className="fill-current w-[13px]" />
                <span className="text-[14x] ml-1">Bookmark bài viết này</span>
              </button>
            </div>
          </div>
          <PostsNew />
        </div>
      </div>
    </>
    //   )}
    // </>
  );
};

export default PostsDetail;
