import React, { useState, useEffect } from "react";
import { Icon } from "src/Components/Icon";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PostApi from "src/Apis/PostApi";
import { timeFormatter } from "src/Helpers/Timer";
import { useSelector } from "react-redux";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import LikeApi from "src/Apis/LikeApi";
import BookmarkApi from "src/Apis/BookmarkApi";
import FollowApi from "src/Apis/FollowApi";
import Loading from "src/Components/Loading";
import Comments from "../Comments";
import LoadingIcon from "src/Components/Loading/LoadingIcon";
import NotificationApi from "src/Apis/NotificationApi";
import PostRelated from "../Commons/PostRelated";
import { getCookie, setCookie } from "src/Helpers/Cookie";
import UserApi from "src/Apis/UserApi";

const PostsDetail = () => {
  const shortId = useParams();
  const idParam = shortId.id;
  const location = useLocation();
  const [postmenu, setPostmenu] = useState(false);
  const [postShare, setpostShare] = useState(false);
  const [copyLink, setCopyLink] = useState(false);
  const [postDetail, setPostDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { profile } = useSelector((state) => state.Auth);
  const [render, setRender] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const token = localStorage.getItem("_token_");
  const id = shortId.id.split("-")[shortId.id.split("-").length - 1];
  const [loadingLike, setLoadingLike] = useState(false);
  const [loadingFollow, setLoadingFollow] = useState(false);
  const [loadingBookmark, setLoadingBookmark] = useState(false);
  const [otherPost, setOtherPost] = useState([]);
  const { socket } = useSelector((state) => state.SocketService);
  const username = postDetail?.data?.createBy?.username;
  // console.log(postDetail);
  useEffect(() => {
    setRender(false);
    setLoading(true);
    const list = async () => {
      try {
        const { data: post } = await PostApi.getPost(id);
        const { data: postOther } = await PostApi.otherPost(
          post?.data?.createBy?._id
        );
        const otherPosts = postOther?.data?.filter(
          (item) => item?.shortId !== post?.data?.shortId
        );
        // const dataUpViews = await PostApi.upViews({ shortId : id});
        // setCookie(id,true,5 * 60 * 1000)

        setPostDetail(post);
        setOtherPost(otherPosts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    list();
  }, [render, id, shortId]);

  // effect upviews
  useEffect(() => {
    async function upViews() {
      try {
        if (!getCookie(id)) {
          const dataUpViews = await PostApi.upViews({ shortId: id });
          setCookie(id, true, 5 * 60 * 1000);
          // console.log('views is up');
        }
      } catch (error) {}
    }
    upViews();
  }, []);

  const fullname = postDetail?.data?.createBy?.fullname;
  const handleLike = async () => {
    setRender(true);
    if (token === null) return history.push("/auth/login");
    setLoadingLike(true);
    if (postDetail?.data?.isLike) {
      await LikeApi.likePost(id);
      setPostDetail({
        ...postDetail,
        data: { ...postDetail.data, isLike: false },
      });
      const data = {
        type: "down",
        points: 5,
      };
      await UserApi.pointUser(postDetail?.data?.createBy?.username, data);
    } else {
      await LikeApi.likePost(id);
      setPostDetail({
        ...postDetail,
        data: { ...postDetail.data, isLike: true },
      });
      const data = {
        type: "up",
        points: 5,
      };
      await UserApi.pointUser(postDetail?.data?.createBy?.username, data);
    }
    // send notifaction
    const notificationRequest = {
      title: postDetail?.data?.isLike
        ? "???? b??? vote b??i vi???t c???a b???n."
        : "???? vote b??i vi???t c???a b???n.",
      url: location.pathname,
      type: "vote",
    };
    const {
      data: { data },
    } = await NotificationApi.create(
      token,
      notificationRequest,
      postDetail?.data?.createBy?._id
    );
    socket.emit("sendTo", {
      ...data,
      sendToId: postDetail?.data?.createBy?._id,
    });
    setLoadingLike(false);
  };
  // const handleDisLike = async () => {
  //   setRender(true);
  //   if (token === null) history.push("/auth/login");

  //   if (postDetail?.data?.isDislike) {
  //     await LikeApi.disLikePost(id);
  //     setPostDetail({
  //       ...postDetail,
  //       data: { ...postDetail.data, isDislike: false },
  //     });
  //   } else {
  //     await LikeApi.disLikePost(id);
  //     setPostDetail({
  //       ...postDetail,
  //       data: { ...postDetail.data, isDislike: true },
  //     });
  //   }
  // };

  const handleBookmark = async () => {
    if (token === null) return history.push("/auth/login");
    setLoadingBookmark(true);
    if (postDetail?.data?.isBookmark) {
      await BookmarkApi.addBookmarkPost(id);
      setPostDetail({
        ...postDetail,
        data: { ...postDetail?.data, isBookmark: false },
      });
    } else {
      await BookmarkApi.addBookmarkPost(id);
      setPostDetail({
        ...postDetail,
        data: { ...postDetail?.data, isBookmark: true },
      });
    }
    // send notifaction
    const notificationRequest = {
      title: postDetail?.data?.isBookmark
        ? "???? b??? bookmark b??i vi???t c???a b???n."
        : "???? bookmark b??i vi???t c???a b???n",
      url: location.pathname,
      type: "bookmark",
    };
    const {
      data: { data },
    } = await NotificationApi.create(
      token,
      notificationRequest,
      postDetail?.data?.createBy?._id
    );
    socket.emit("sendTo", {
      ...data,
      sendToId: postDetail?.data?.createBy?._id,
    });
    setLoadingBookmark(false);
  };
  const handleFollow = async () => {
    if (token === null) return history.push("/auth/login");
    setLoadingFollow(true);
    if (postDetail?.data?.createBy?.isFollowing) {
      await FollowApi.unFollow(username);
      setPostDetail({
        ...postDetail,
        data: {
          ...postDetail.data,
          createBy: { ...postDetail.data.createBy, isFollowing: false },
        },
      });
      const data = {
        type: "down",
        points: 5,
      };
      await UserApi.pointUser(postDetail?.data?.createBy?.username, data);
    } else {
      await FollowApi.follow(username);
      setPostDetail({
        ...postDetail,
        data: {
          ...postDetail.data,
          createBy: { ...postDetail.data.createBy, isFollowing: true },
        },
      });
      const data = {
        type: "up",
        points: 5,
      };
      await UserApi.pointUser(postDetail?.data?.createBy?.username, data);
    }
    // send notifaction
    const notificationRequest = {
      title: postDetail?.data?.createBy?.isFollowing
        ? "???? b??? theo d??i b???n."
        : "???? theo d??i b???n.",
      url: "",
      type: "follow",
    };
    const {
      data: { data },
    } = await NotificationApi.create(
      token,
      notificationRequest,
      postDetail?.data?.createBy?._id
    );
    socket.emit("sendTo", {
      ...data,
      sendToId: postDetail?.data?.createBy?._id,
    });
    setLoadingFollow(false);
  };

  const url = window.location.href;
  const handelCopy = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "text");

    input.setAttribute("value", url);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    ////////
    const copy = true;
    setCopyLink(copy);
  };
  const handelRemove = async (id) => {
    await PostApi.remove(id);
    history.push("/posts");
  };
  const handleCancelBox = () => {
    setIsModalVisible(false);
  };
  const handleViewBox = () => {
    setIsModalVisible(true);
  };
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Loading className="w-[40px] h-[40px] fill-current text-gray-500" />
      </div>
    );
  return (
    <>
      <div className="mt-[80px] container mx-auto">
        <div className="py-[5px] flex items-center overflow-x-auto whitespace-nowrap">
          <Link
            to=""
            className="relative after:absolute after:top-1/2 after:transform after:translate-y-[-45%] after:h-2/3 after:right-[-5px] after:w-[1px] after:bg-gray-500 after:rotate-[-20deg] text-[16px] px-[5px] text-gray-600 mr-[10px] font-medium hover:text-blue-600"
          >
            {" "}
            Trang ch???
          </Link>
          <Link
            to="/posts"
            className="relative after:absolute after:top-1/2 after:transform after:translate-y-[-45%] after:h-2/3 after:right-[-5px] after:w-[1px] after:bg-gray-500 after:rotate-[-20deg] text-[16px] px-[5px] text-gray-600 mr-[10px] font-medium hover:text-blue-600"
          >
            {" "}
            B??i vi???t
          </Link>

          <span className="text-blue-500 ml-1 text-[15px]">
            {postDetail?.data?.title}
          </span>
        </div>
      </div>

      <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[2.8fr,1.2fr] gap-[30px] mt-[20px]">
        <div className="">
          <div className="bg-white rounded-[5px] shadow px-[5px] sm:px-[15px] py-[20px] ">
            <div className="block lg:hidden">
              <div className="flex items-center mb-[5px] ">
                {postDetail?.data?.createBy?.avatar?.avatarUrl?.length > 0 ? (
                  <Link
                    to={`/user/${postDetail?.data?.createBy?.fullname}`}
                    className="  border border-gray-300 cursor-pointer select-none w-[55px] h-[55px] rounded-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${postDetail?.data?.createBy?.avatar?.avatarUrl})`,
                    }}
                    alt={postDetail?.fullname}
                  ></Link>
                ) : (
                  <Link
                    to={`/user/${postDetail?.data?.createBy?.fullname}`}
                    className="flex justify-center font-bold items-center text-[#4A5568]   border border-gray-300 bg-blue-300 cursor-pointer select-none w-[40px] h-[40px] rounded-full"
                  >
                    {postDetail?.data?.createBy?.fullname
                      ?.slice(0, 1)
                      ?.toUpperCase()}
                  </Link>
                )}
                <div className="ml-2">
                  <p className="text-blue-500 text-[14px] sm:text-[16px] font-medium flex items-center">
                    <Link to={`/user/${postDetail?.data?.createBy?.username}`}>
                      <span className="hover:underline">
                        {postDetail?.data?.createBy?.fullname}
                      </span>
                    </Link>
                    <span className=" text-[12px] sm:text-[14px] text-gray-500 hidden sm:block ">
                      - @{postDetail?.data?.createBy?.username}
                    </span>
                    <span>
                      <button
                        onClick={() => handleFollow()}
                        className={
                          postDetail?.data?.createBy?.isFollowing
                            ? "mt-1 sm:mt-0 ml-2 border rounded-[3px] border-blue-500 text-[12px]  px-[5px] py-[1px] text-white bg-blue-500"
                            : "mt-1 sm:mt-0 ml-2 border rounded-[3px] border-blue-500 text-[12px] text-blue-500 px-[5px] py-[1px] hover:text-white hover:bg-blue-500"
                        }
                      >
                        {postDetail?.data?.createBy?.isFollowing
                          ? "- ???? theo d??i"
                          : "+ Theo d??i"}
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
                {postDetail?.data?.title || (
                  <Skeleton className="z-0 w-[200px] " />
                )}
              </p>
              <div className="relative">
                <button
                  className="h-full btn__post"
                  onClick={() => setPostmenu(!postmenu)}
                >
                  <Icon.DotsVertical className=" w-[13px] " />
                </button>
                <div className={postmenu ? "post__menu  bg-white" : " hidden"}>
                  <ul className="relative text-[14px] py-[5px]">
                    {/* <li
                      onClick={() => handleViewBox()}
                      className="flex items-center cursor-pointer text-gray-700 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500"
                    >
                      <Icon.Flag className="fill-current w-[16px]  mr-[5px]" />
                      B??o c??o
                    </li> */}

                    <li
                      onClick={() => handelCopy()}
                      className={
                        copyLink
                          ? "flex items-center cursor-pointer mt-1 bg-blue-100 py-1 px-[10px] text-blue-500"
                          : "flex items-center cursor-pointer text-gray-700 mt-1 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500"
                      }
                    >
                      <Icon.ExternaLink className="fill-current w-[20px] mr-[5px]" />
                      {copyLink
                        ? "???? sao ch??p link b??i vi???t"
                        : "Sao ch??p link b??i vi???t"}
                    </li>
                    {postDetail?.data?.createBy?.username ===
                    profile?.username ? (
                      <>
                        <li className="flex items-center cursor-pointer text-gray-700 mt-1 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500">
                          <Icon.Fix className="fill-current w-[15px] mr-[5px]" />
                          <Link
                            to={`/post/update/${postDetail?.data?.slug}-${postDetail?.data?.shortId}`}
                            className="block w-full"
                          >
                            S???a b??i vi???t
                          </Link>
                        </li>
                        <li
                          onClick={() =>
                            handelRemove(postDetail?.data?.shortId)
                          }
                          className="flex items-center cursor-pointer text-gray-700 mt-1 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500"
                        >
                          <Icon.Can className="fill-current w-[12px] mr-[5px]" />
                          X??a b??i vi???t
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="hidden"></li>
                        <li className="hidden"></li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-[10px]">
              <p className="flex items-center text-gray-500">
                <Icon.Eye className="fill-current w-[15px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                  {postDetail?.data?.views} l?????t xem
                </span>
              </p>
              <p className="flex items-center text-gray-500 ml-[10px]">
                <Icon.Chat className="fill-current w-[13px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                  {postDetail?.data?.comments} b??nh lu???n
                </span>
              </p>
              <p className="flex items-center text-gray-500 ml-[10px]">
                <Icon.Bookmark className="fill-current w-[13px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                  {postDetail?.data?.bookmarks} ???? l??u
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
            <div className="mt-[20px] inline-block">
              <div className="flex items-center border-b border-blue-300 ">
                <button
                  onClick={() => handleLike()}
                  disabled={loadingLike}
                  className={
                    postDetail?.data?.isLike
                      ? " px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  bg-blue-500 text-white"
                      : " text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  hover:bg-blue-300 hover:text-white"
                  }
                >
                  {loadingLike && (
                    <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                  )}
                  <Icon.Like className="fill-current w-[13px]" />
                  <span className="text-[12x] md:text-[14x] ml-1">
                    {postDetail?.data?.likes} Vote
                  </span>
                </button>
                {/* <button
                  onClick={() => handleDisLike()}
                  className={
                    postDetail?.data?.isDislike
                      ? " px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  bg-blue-500 text-white"
                      : " text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  hover:bg-blue-300 hover:text-white"
                  }
                >
                  <Icon.Dislike className="fill-current w-[13px]" />
                  <span className="text-[12x] md:text-[14x] ml-1">
                    {postDetail?.data?.dislikes} Dislikes
                  </span>
                </button> */}
                <div className="relative">
                  <button
                    className={
                      postShare
                        ? " px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center bg-blue-500 text-white"
                        : "text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center hover:bg-blue-300 hover:text-white"
                    }
                    onClick={() => setpostShare(!postShare)}
                  >
                    <Icon.Share className="fill-current w-[15px]" />
                    <span className="text-[12x] md:text-[14x] ml-1">Share</span>
                  </button>
                  <div
                    className={
                      postShare
                        ? "post__share right-0 sm:left-0 bg-white py-[5px]"
                        : " hidden"
                    }
                  >
                    <ul className=" text-[14px] ">
                      <li className=" text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <FacebookShareButton
                          url={url}
                          className="flex items-center"
                        >
                          <Icon.Facebook className="fill-current w-[12px] mr-[5px] " />
                          Chia s??? ?????n FaceBook
                        </FacebookShareButton>
                      </li>
                      <li className="text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <TwitterShareButton
                          url={url}
                          className="flex items-center"
                        >
                          <Icon.Twitter className="fill-current w-[15px] mr-[5px]" />
                          Chia s??? ?????n Twitter
                        </TwitterShareButton>
                      </li>
                      {/* <li className=" text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                        <EmailShareButton
                          url={url}
                          className="flex items-center"
                        >
                          <Icon.Email className="fill-current w-[12px] mr-[5px]" />
                          Chia s??? ?????n Email
                        </EmailShareButton>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-[20px]">
            <Comments userId={postDetail?.data?.createBy?._id} shortId={id} />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="bg-white shadow rounded-[5px] ">
            <div className="flex py-[5px] block-avt justify-center">
              {postDetail?.data?.createBy?.avatar?.avatarUrl?.length > 0 ? (
                <Link
                  to={`/user/${postDetail?.data?.createBy?.username}`}
                  className="  border border-gray-300 cursor-pointer select-none w-[45px] h-[45px] rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${postDetail?.data?.createBy?.avatar?.avatarUrl})`,
                  }}
                  alt={postDetail?.fullname}
                ></Link>
              ) : (
                <Link
                  to={`/user/${postDetail?.data?.createBy?.username}`}
                  className="flex justify-center font-bold items-center text-[#4A5568]   border border-gray-300 bg-blue-300 cursor-pointer select-none w-[55px] h-[55px] rounded-full"
                >
                  {postDetail?.data?.createBy?.fullname
                    ?.slice(0, 1)
                    ?.toUpperCase()}
                </Link>
              )}
            </div>
            <div className="py-[10px] px-[15px]  border-b border-gray-100 flex justify-between items-center">
              <p className="text-[16px] font-medium ">
                <Link to={`/user/${postDetail?.data?.createBy?.username}`}>
                  <span className="block hover:underline	">
                    {postDetail?.data?.createBy?.fullname}
                  </span>
                </Link>
                <span className="block text-[14px] text-gray-500 font-normal">
                  @{postDetail?.data?.createBy?.username}
                </span>
              </p>
              {postDetail?.data?.createBy?.username === profile?.username ? (
                <button
                  onClick={() => history.push("/profile/me")}
                  className="border flex items-center border-blue-500 px-4 py-[3px] text-[14px]   rounded-[3px] bg-blue-500 text-white"
                >
                  Xem th??ng tin
                </button>
              ) : (
                <button
                  onClick={() => handleFollow()}
                  className={
                    postDetail?.data?.createBy?.isFollowing
                      ? "border flex items-center border-blue-500 px-4 py-[3px] text-[14px]   rounded-[3px] bg-blue-500 text-white"
                      : "border flex items-center border-blue-500 px-4 py-[3px] text-[14px] text-blue-500  rounded-[3px] hover:bg-blue-500 hover:text-white"
                  }
                >
                  {loadingFollow && (
                    <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                  )}
                  {postDetail?.data?.createBy?.isFollowing
                    ? "- ???? theo d??i"
                    : "+ Theo d??i"}
                </button>
              )}
            </div>
            <div className="py-[10px] flex border-b border-gray-100">
              <div className="m-auto flex">
                <p className="text-center  ">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Point className="fill-current w-[13px]  mr-[3px]" />
                    ??i???m
                  </span>
                  <span className="block ">
                    {postDetail?.data?.createBy?.points}
                  </span>
                </p>
                <p className="text-center ml-[30px] ">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Pen className="fill-current w-[13px]  mr-[3px]" />
                    B??i vi???t
                  </span>
                  <span className="block ">
                    {postDetail?.data?.createBy?.postCounts}
                  </span>
                </p>{" "}
                <p className="text-center ml-[30px]">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Questions className="fill-current w-[13px]  mr-[3px]" />
                    C??u h???i
                  </span>
                  <span className="block ">
                    {postDetail?.data?.createBy?.questionCounts}
                  </span>
                </p>
              </div>
            </div>
            <div className="p-[15px]">
              <button
                onClick={() => handleBookmark()}
                disabled={loadingBookmark}
                className={
                  postDetail?.data?.isBookmark
                    ? " w-full  py-[3px] border border-blue-500 rounded-[3px] flex justify-center items-center bg-blue-500 text-white"
                    : "text-blue-500 w-full  py-[3px] border border-blue-500 rounded-[3px] flex justify-center items-center hover:bg-blue-500 hover:text-white"
                }
              >
                {loadingBookmark && (
                  <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                )}
                <Icon.Bookmark className="fill-current w-[13px]" />
                <span className="text-[14x] ml-1">
                  {postDetail?.data?.isBookmark
                    ? "???? Bookmark b??i vi???t n??y"
                    : "Bookmark b??i vi???t n??y"}
                </span>
              </button>
            </div>
          </div>
          <PostRelated otherPost={otherPost} fullname={fullname} />
        </div>
      </div>
      <div
        className={
          isModalVisible
            ? "fixed  top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-70 z-[999999] overflow-auto"
            : "hidden"
        }
      >
        <div className="max-w-[450px] mx-[15px] mt-[15vh] sm:mx-auto mb-[50px] rounded-[2px] bg-white relative px-[15px]">
          <button
            onClick={() => handleCancelBox()}
            className="absolute top-[18px] right-[15px] "
          >
            <Icon.Close className="fill-current w-[11px] text-gray-500 hover:text-gray-700 " />
          </button>
          <p className="text-[18px] pt-[15px] text-gray-700">
            N???i dung b??o c??o
          </p>
          <div className="mt-[25px] text-[14px] text-gray-700 ">
            <form action="">
              <div className="mb-[18px]">
                <label htmlFor="" className="text-[14px]">
                  <span className="text-red-500 ">*</span> L?? do b??o c??o n???i
                  dung n??y
                </label>
                <div className="mt-[10px] pl-[10px]">
                  <div className="py-[3px]">
                    <input
                      type="radio"
                      id="spam1"
                      name="fav_language"
                      value="1"
                      className="cursor-pointer"
                    />
                    {"  "}
                    <label htmlFor="spam1" className="cursor-pointer">
                      N???i dung r??c
                    </label>
                  </div>
                  <div className="py-[3px]">
                    <input
                      type="radio"
                      id="spam2"
                      name="fav_language"
                      value="2"
                      className="cursor-pointer"
                    />{" "}
                    <label htmlFor="spam2" className="cursor-pointer">
                      Vi ph???m ??i???u kho???n
                    </label>
                  </div>
                  <div className="py-[3px]">
                    <input
                      type="radio"
                      id="spam3"
                      name="fav_language"
                      value="3"
                      className="cursor-pointer"
                    />{" "}
                    <label htmlFor="spam3" className="cursor-pointer">
                      Qu???y r???i, ????? k??ch
                    </label>
                  </div>
                  <div className="py-[3px]">
                    <input
                      type="radio"
                      id="spam4"
                      name="fav_language"
                      value="3"
                      className="cursor-pointer"
                    />{" "}
                    <label htmlFor="spam4" className="cursor-pointer">
                      Vi ph???m b???n quy???n
                    </label>
                  </div>
                  <div className="py-[3px]">
                    <input
                      type="radio"
                      id="spam5"
                      name="fav_language"
                      value="3"
                      className="cursor-pointer"
                    />{" "}
                    <label htmlFor="spam5" className="cursor-pointer">
                      B???n d???ch ch???t l?????ng k??m
                    </label>
                  </div>
                </div>
                <div className="mt-[30px]">
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    className="w-full px-[10px] text-[14px] py-[3px] border border-gray-400 rounded-[3px] focus:outline-none focus:border focus:border-blue-400 "
                    placeholder="Nh???n x??t..."
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          <div className=" pb-[15px] flex justify-end">
            <button className=" border border-gray-400 text-gray-500 text-[14px] hover:bg-blue-50  hover:text-blue-400 rounded-[3px] px-[15px] py-[3px]">
              B??o c??o
            </button>
          </div>
        </div>
      </div>
    </>
    //   )}
    // </>
  );
};

export default PostsDetail;
