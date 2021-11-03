import React, { useState, useEffect } from "react";
import { Icon } from "src/Components/Icon";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import ProfileUsePost from "../Commons/ProfileUserPosts";
import ProfileUserPostsMobile from "../Commons/ProfileUserPostsMobile";
import PostsNew from "../Commons/PostsNew";
import PostApi from "src/Apis/PostApi";
const PostsDetail = () => {
  const [postmenu, setPostmenu] = useState(false);
  const [postShare, setpostShare] = useState(false);
  const [postDetail, setPostDetail] = useState(true);
  // const [postAll, setPostAll] = useState(true);

  useEffect(() => {
    const List = async () => {
      try {
        const Post = await PostApi.getAll();
        setPostDetail(Post.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    List();
  }, []);

  return (
    <>
      {/* {postDetail && (
        <> */}
      <div className="mt-[80px] container mx-auto bg-white rounded-[5px] shadow">
        <div className="px-[10px] sm:px-[15px] py-[10px] ">
          <p className="text-gray-500 text-[14px] ">
            Trang chủ / Bài viết /
            <span className="text-blue-500">
              {postDetail.title || <Skeleton width={200} />}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[2.8fr,1.2fr] gap-[30px] mt-[20px]">
        <div className="">
          <div className="bg-white rounded-[5px] shadow px-[5px] sm:px-[15px] py-[20px] ">
            <ProfileUserPostsMobile />
            <div className="flex justify-between  ">
              <p className="text-[18px] sm:text-[24px] font-medium">
                {postDetail.title || <Skeleton width={500} />}
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
                  48 lượt xem
                </span>
              </p>
              <p className="flex items-center text-gray-500 ml-[10px]">
                <Icon.Chat className="fill-current w-[13px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                  20 bình luận
                </span>
              </p>
              <p className="flex items-center text-gray-500 ml-[10px]">
                <Icon.Bookmark className="fill-current w-[13px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                  12 đã lưu
                </span>
              </p>
            </div>
            <div className="flex items-center mt-[8px]">
              <p className="flex items-center text-gray-500">
                <Icon.Tags className="fill-current w-[13px] " />
                <span className="text-[14px] ml-1">Tags</span>
              </p>
              <span>
                <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">
                  JavaScript
                </button>
                <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">
                  JavaScript
                </button>
                <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">
                  JavaScript
                </button>
              </span>
            </div>
            <p className="text-gray-500 text-[12px] sm:text-[14px] mt-[8px]">
              Đã đăng vào thg 8 23, 12:04 PM
            </p>
            <div
              className="mt-[20px] "
              dangerouslySetInnerHTML={{
                __html: postDetail.content || <Skeleton count={30} />,
              }}
            ></div>
            <div className="mt-[20px] inline-block">
              <div className="flex items-center border-b border-gray-300 ">
                <button className="text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  hover:bg-gray-500 hover:text-white">
                  <Icon.Like className="fill-current w-[13px]" />
                  <span className="text-[12x] md:text-[14x] ml-1">50</span>
                </button>
                <button className=" text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center hover:bg-gray-500 hover:text-white">
                  <Icon.Dislike className="fill-current w-[13px]" />
                  <span className="text-[12x] md:text-[14x] ml-1">16</span>
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
                      <li className="flex items-center text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <Icon.Facebook className="fill-current w-[12px] mr-[5px]" />
                        Chia sẻ đến FaceBook
                      </li>
                      <li className="flex items-center text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <Icon.Twitter className="fill-current w-[15px] mr-[5px]" />
                        Chia sẻ đến Twitter
                      </li>
                      <li className="flex items-center text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <Icon.Email className="fill-current w-[12px] mr-[5px]" />
                        Chia sẻ đến Email
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <ProfileUsePost />
          <PostsNew />
        </div>
      </div>
    </>
    //   )}
    // </>
  );
};

export default PostsDetail;
