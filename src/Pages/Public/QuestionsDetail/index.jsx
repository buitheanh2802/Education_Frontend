import React, { useState, useEffect } from "react";
import { Icon } from "src/Components/Icon";
import { Link, useParams, useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PostsNew from "../Commons/PostNew";
import { timeFormatter } from "src/Helpers/Timer";
import { useSelector } from "react-redux";
import QuestionApi from "src/Apis/QuestionApi";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import BookmarkApi from "src/Apis/BookmarkApi";
import LikeApi from "src/Apis/LikeApi";
import FollowApi from "src/Apis/FollowApi";
import UserApi from "src/Apis/UserApi";
import Loading from "src/Components/Loading";
import SpamApi from "src/Apis/SpamApi";
import Swal from "sweetalert2";

const QuestionsDetail = () => {
  const shortId = useParams();
  const [questionMenu, setQuestionMenu] = useState(false);
  const [questionDetail, setQuestionDetail] = useState([]);
  const { profile } = useSelector((state) => state.Auth);
  const [questionShare, setQuestionShare] = useState(false);
  const [render, setRender] = useState(false);
  const [user, setUser] = useState([]);
  const [copyLink, setCopyLink] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contentSpam, setContentSpam] = useState("");

  const history = useHistory();
  const token = localStorage.getItem("_token_");
  const idQuestion = shortId.id.split("-")[shortId.id.split("-").length - 1];
  useEffect(() => {
    setRender(false);
    const list = async (id) => {
      try {
        await QuestionApi.view(idQuestion);
        let { data: question } = await QuestionApi.getId(idQuestion);
        setQuestionDetail(question);
        setLoading(false);
        if (question.data.createBy.username) {
          const CallApi = async () => {
            try {
              const { data: user } = await UserApi.get(
                question.data.createBy.username
              );
              setUser(user);
              setLoading(false);
            } catch (error) {
              setLoading(false);
              console.log(error);
            }
          };
          CallApi();
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    list(idQuestion);

    // window.addEventListener("scroll", function (event) {
    //   const scroll = this.scrollY;
    //   if (scroll >= 300) {
    //     console.log("haha");
    //   }
    // });
  }, [idQuestion, render]);
  if (Object.keys(questionDetail).length === 0) return null;

  const arrLike = questionDetail?.data?.likes;
  const checkLike = arrLike.some((a) => a === profile?._id);
  const handleLike = async () => {
    setRender(true);
    if (token === null) history.push("/auth/login");
    if (checkLike === false) {
      await LikeApi.likeQuestion(idQuestion);
      setQuestionDetail({
        ...questionDetail,
        data: { ...questionDetail.data },
      });
    } else {
      await LikeApi.delLikeQuestion(idQuestion);
      setQuestionDetail({
        ...questionDetail,
        data: { ...questionDetail.data },
      });
    }
  };
  ///////////////
  const arrDisLike = questionDetail?.data?.dislike;
  const checkDisLike = arrDisLike.some((a) => a === profile?._id);
  const handleDisLike = async () => {
    setRender(true);
    if (token === null) history.push("/auth/login");

    if (checkDisLike === false) {
      await LikeApi.disLikeQuestion(idQuestion);
      setQuestionDetail({
        ...questionDetail,
        data: { ...questionDetail.data },
      });
    } else {
      await LikeApi.delDisLikeQuestion(idQuestion);
      setQuestionDetail({
        ...questionDetail,
        data: { ...questionDetail.data },
      });
    }
  };

  /////////
  const arrBookmark = questionDetail?.data?.bookmarks;
  const checkBookmark = arrBookmark.some((a) => a === profile?._id);
  const handleBookmark = async () => {
    setRender(true);
    if (token === null) history.push("/auth/login");

    if (checkBookmark === false) {
      await BookmarkApi.addBookmarkQuestion(idQuestion);
      setQuestionDetail({
        ...questionDetail,
        data: { ...questionDetail.data },
      });
    } else {
      await BookmarkApi.delBookmarkQuestion(idQuestion);
      setQuestionDetail({
        ...questionDetail,
        data: { ...questionDetail.data },
      });
    }
  };

  ////////
  const handleFollow = async () => {
    if (token === null) history.push("/auth/login");

    if (user.data.isFollowing) {
      setRender(true);
      await FollowApi.unFollow(user.data.username);
      setUser({
        ...user,
        data: {
          ...user.data,
        },
      });
    } else {
      setRender(true);
      await FollowApi.follow(user.data.username);
      setUser({
        ...user,
        data: {
          ...user.data,
        },
      });
    }
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
    await QuestionApi.remove(id);

    history.push("/questions");
  };
  const handleCancelBox = () => {
    setIsModalVisible(false);
  };
  const handleViewBox = () => {
    if (token === null) history.push("/auth/login");
    setIsModalVisible(true);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    // timerProgressBar: true,
    background: "#EFF6FF",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const handelReportSpam = async () => {
    var checkbox = document.getElementsByClassName("cursor-pointer");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked === true) {
        var reason = checkbox[i].value;
      }
    }

    if (reason === undefined || contentSpam === "") {
      if (reason === undefined) {
        document.querySelector("#errEasonSpam").innerHTML =
          "* Vui lòng chọn một lý do";
      } else {
        document.querySelector("#errEasonSpam").innerHTML = "";
      }
      if (contentSpam === "") {
        document.querySelector("#errContentSpam").innerHTML =
          "* Vui lòng cho biết lý do";
      } else {
        document.querySelector("#errContentSpam").innerHTML = "";
      }

      return;
    }
    document.querySelector("#errEasonSpam").innerHTML = "";
    document.querySelector("#errContentSpam").innerHTML = "";

    const dataSpam = {
      reason: reason,
      content: contentSpam,
      referenceTo: idQuestion,
      type: "questions",
    };
    // console.log(dataSpam);
    try {
      await SpamApi.reportSpamQuestion(dataSpam);
      await Toast.fire({
        icon: "success",
        title: "Báo cáo thành công",
      });
    } catch (error) {
      await Toast.fire({
        icon: "error",
        title: "Báo cáo thất bại",
      });
      console.log(error);
    }
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Loading className="w-[40px] h-[40px] fill-current text-gray-500" />
      </div>
    );
  return (
    <>
      {/* {postDetail && (
        <> */}
      <div className="mt-[80px] container mx-auto bg-white rounded-[5px] shadow">
        <div className="px-[10px] sm:px-[15px] py-[10px] ">
          <p className="text-gray-500 text-[14px] ">
            Trang chủ / Câu hỏi /
            <span className="text-blue-500 ml-1">
              {questionDetail?.data?.title || <Skeleton width={200} />}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[2.8fr,1.2fr] gap-[30px] mt-[20px]">
        <div className="">
          <div className="bg-white rounded-[5px] shadow px-[5px] sm:px-[15px] py-[20px] ">
            <div className="block lg:hidden">
              <div className="flex items-center mb-[5px] ">
                {questionDetail?.data?.createBy?.avatar?.avatarUrl?.length >
                0 ? (
                  <Link
                    to={`/user/${questionDetail?.data?.createBy?.fullname}`}
                    className="  border border-gray-300 cursor-pointer select-none w-[55px] h-[55px] rounded-full bg-center bg-cover"
                    style={{
                      backgroundImage: `url(${questionDetail?.data?.createBy?.avatar?.avatarUrl})`,
                    }}
                    alt={questionDetail?.fullname}
                  ></Link>
                ) : (
                  <Link
                    to={`/user/${questionDetail?.data?.createBy?.fullname}`}
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
                      to={`/user/${questionDetail?.data?.createBy?.fullname}`}
                    >
                      <span className="hover:underline">
                        {questionDetail?.data?.createBy?.fullname}
                      </span>
                    </Link>
                    <span className=" text-[12px] sm:text-[14px] text-gray-500 hidden sm:block ">
                      - @{questionDetail?.data?.createBy?.username}
                    </span>
                    <span>
                      <button
                        onClick={() => handleFollow()}
                        className={
                          user?.data?.isFollowing
                            ? "mt-1 sm:mt-0 ml-2 border rounded-[3px] border-blue-500 text-[12px] px-[5px] py-[1px] text-white bg-blue-500"
                            : "mt-1 sm:mt-0 ml-2 border rounded-[3px] border-blue-500 text-[12px] text-blue-500 px-[5px] py-[1px] hover:text-white hover:bg-blue-500"
                        }
                      >
                        {user?.data?.isFollowing
                          ? "- Đã theo dõi"
                          : "+ Theo dõi"}
                      </button>
                    </span>
                  </p>
                  <div className="flex items-center mt-[3px]">
                    <p className="flex items-center text-gray-500">
                      <Icon.Point className="fill-current w-[12px] sm:w-[15px] " />
                      <span className="text-[12px] sm:text-[14px] ml-1">
                        {questionDetail?.data?.createBy?.points}
                      </span>
                    </p>
                    <p className="flex items-center text-gray-500 ml-[10px]">
                      <Icon.Pen className="fill-current  w-[12px] sm:w-[13px] " />
                      <span className="text-[12px] sm:text-[14px] ml-1">
                        {questionDetail?.data?.createBy?.postCounts}
                      </span>
                    </p>
                    <p className="flex items-center text-gray-500 ml-[10px]">
                      <Icon.Questions className="fill-current w-[12px] sm:w-[13px] " />
                      <span className="text-[12px] sm:text-[14px] ml-1">
                        {questionDetail?.data?.createBy?.questionCounts}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between  ">
              <p className="text-[18px] sm:text-[24px] font-medium">
                {questionDetail?.data?.title || <Skeleton width={500} />}
              </p>
              <div className="relative">
                <button
                  className="h-full btn__post"
                  onClick={() => setQuestionMenu(!questionMenu)}
                >
                  <Icon.DotsVertical className=" w-[13px] " />
                </button>
                <div
                  className={
                    questionMenu
                      ? "post__menu bg-white"
                      : "post__menu bg-white hidden"
                  }
                >
                  <ul className="relative text-[14px] py-[5px]">
                    <li
                      onClick={() => handleViewBox()}
                      className="flex items-center cursor-pointer text-gray-700 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500"
                    >
                      <Icon.Flag className="fill-current w-[16px]  mr-[5px]" />
                      Báo cáo
                    </li>
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
                        ? "Đã sao chép link câu hỏi"
                        : "Sao chép link câu hỏi"}
                    </li>
                    {questionDetail?.data?.createBy?.username ===
                    profile?.username ? (
                      <>
                        <li className="flex items-center cursor-pointer text-gray-700 mt-1 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500">
                          <Icon.Fix className="fill-current w-[15px] mr-[5px]" />
                          <Link
                            to={`/question/update/${questionDetail?.data?.slug}-${questionDetail?.data?._id}`}
                            className="block w-full"
                          >
                            Sửa câu hỏi
                          </Link>
                        </li>
                        <li
                          onClick={() =>
                            handelRemove(questionDetail?.data?._id)
                          }
                          className="flex items-center cursor-pointer text-gray-700 mt-1 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500"
                        >
                          <Icon.Can className="fill-current w-[12px] mr-[5px]" />
                          Xóa câu hỏi
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
            <div className="sm:flex justify-between">
              <div className="mt-[20px] inline-block">
                <div className="flex items-center border-b border-gray-300 ">
                  <button
                    onClick={() => handleLike()}
                    className={
                      checkLike
                        ? " px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  bg-blue-500 text-white"
                        : " text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  hover:bg-blue-300 hover:text-white"
                    }
                  >
                    <Icon.Like className="fill-current w-[13px]" />
                    <span className="text-[12x] md:text-[14x] ml-1">
                      {questionDetail?.data?.countLikes} Like
                    </span>
                  </button>
                  <button
                    onClick={() => handleDisLike()}
                    className={
                      checkDisLike
                        ? " px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  bg-blue-500 text-white"
                        : " text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center  hover:bg-blue-300 hover:text-white"
                    }
                  >
                    <Icon.Dislike className="fill-current w-[13px]" />
                    <span className="text-[12x] md:text-[14x] ml-1">
                      {questionDetail?.data?.countDislike} Dislikes
                    </span>
                  </button>
                  <div className="relative">
                    <button
                      className={
                        questionShare
                          ? " px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center bg-blue-500 text-white"
                          : "text-gray-500 px-2 md:px-5 py-[1px]  rounded-t-[3px] flex items-center hover:bg-blue-300 hover:text-white"
                      }
                      onClick={() => setQuestionShare(!questionShare)}
                    >
                      <Icon.Share className="fill-current w-[15px]" />
                      <span className="text-[12x] md:text-[14x] ml-1">
                        Share
                      </span>
                    </button>
                    <div
                      className={
                        questionShare
                          ? "post__share bg-white py-[5px]"
                          : "post__share bg-white py-[5px] hidden"
                      }
                    >
                      <ul className=" text-[14px] ">
                        <li className=" text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                          <FacebookShareButton
                            url={url}
                            className="flex items-center"
                          >
                            <Icon.Facebook className="fill-current w-[12px] mr-[5px] " />
                            Chia sẻ đến FaceBook
                          </FacebookShareButton>
                        </li>
                        <li className="text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                          <TwitterShareButton
                            url={url}
                            className="flex items-center"
                          >
                            <Icon.Twitter className="fill-current w-[15px] mr-[5px]" />
                            Chia sẻ đến Twitter
                          </TwitterShareButton>
                        </li>
                        <li className=" text-gray-500 py-1 px-[15px] cursor-pointer hover:bg-blue-100 hover:text-blue-500">
                          <EmailShareButton
                            url={url}
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
              <div className="mt-[20px] flex items-center">
                <button className="border border-blue-500 px-4 py-[3px] text-[14px] text-blue-500  rounded-[3px] hover:bg-blue-500 hover:text-white">
                  <span className="text-[12x] md:text-[14x] ml-1">
                    Ghi Câu Trả Lời
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="bg-white shadow rounded-[5px] ">
            <div className="flex py-[5px] block-avt justify-center">
              {questionDetail?.data?.createBy?.avatar?.avatarUrl?.length > 0 ? (
                <Link
                  to={`/user/${questionDetail?.data?.createBy?.fullname}`}
                  className="  border border-gray-300 cursor-pointer select-none w-[45px] h-[45px] rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${questionDetail?.data?.createBy?.avatar?.avatarUrl})`,
                  }}
                  alt={questionDetail?.fullname}
                ></Link>
              ) : (
                <Link
                  to={`/user/${questionDetail?.data?.createBy?.fullname}`}
                  className="flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none w-[55px] h-[55px] rounded-full"
                >
                  {questionDetail?.data?.createBy?.fullname
                    ?.slice(0, 1)
                    ?.toUpperCase()}
                </Link>
              )}
            </div>
            <div className="py-[10px] px-[15px]  border-b border-gray-100 flex justify-between items-center">
              <p className="text-[16px] font-medium ">
                <Link to={`/user/${questionDetail?.data?.createBy?.fullname}`}>
                  <span className="block hover:underline	">
                    {questionDetail?.data?.createBy?.fullname}
                  </span>
                </Link>
                <span className="block text-[14px] text-gray-500 font-normal">
                  @{questionDetail?.data?.createBy?.username}
                </span>
              </p>
              <button
                onClick={() => handleFollow()}
                className={
                  user?.data?.isFollowing
                    ? "border border-blue-500 px-4 py-[3px] text-[14px]   rounded-[3px] bg-blue-500 text-white"
                    : "border border-blue-500 px-4 py-[3px] text-[14px] text-blue-500  rounded-[3px] hover:bg-blue-500 hover:text-white"
                }
              >
                {user?.data?.isFollowing ? "- Đã theo dõi" : "+ Theo dõi"}
              </button>
            </div>
            <div className="py-[10px] flex border-b border-gray-100">
              <div className="m-auto flex">
                <p className="text-center  ">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Point className="fill-current w-[13px]  mr-[3px]" />
                    Điểm
                  </span>
                  <span className="block ">{user?.data?.points}</span>
                </p>
                <p className="text-center ml-[30px] ">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Pen className="fill-current w-[13px]  mr-[3px]" />
                    Bài viết
                  </span>
                  <span className="block ">{user?.data?.postCounts}</span>
                </p>{" "}
                <p className="text-center ml-[30px]">
                  <span className="flex items-center text-[14px] text-gray-500">
                    <Icon.Questions className="fill-current w-[13px]  mr-[3px]" />
                    Câu hỏi
                  </span>
                  <span className="block ">{user?.data?.questionCounts}</span>
                </p>
              </div>
            </div>
            <div className="p-[15px]">
              <button
                onClick={() => handleBookmark()}
                className={
                  checkBookmark
                    ? " w-full  py-[3px] border border-blue-500 rounded-[3px] flex justify-center items-center bg-blue-500 text-white"
                    : "text-blue-500 w-full  py-[3px] border border-blue-500 rounded-[3px] flex justify-center items-center hover:bg-blue-500 hover:text-white"
                }
              >
                <Icon.Bookmark className="fill-current w-[13px]" />
                <span className="text-[14x] ml-1">
                  {checkBookmark
                    ? "Đã Bookmark câu hỏi này"
                    : "Bookmark câu hỏi này"}
                </span>
              </button>
            </div>
          </div>
          <PostsNew />
        </div>
      </div>
      <div
        className={
          isModalVisible
            ? "fixed  top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-70 z-[999] overflow-auto"
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
            Nội dung báo cáo
          </p>
          <div className="mt-[25px] text-[14px] text-gray-700 ">
            <form action="">
              <div className="mb-[18px]">
                <label htmlFor="" className="text-[14px]">
                  <span className="text-red-500 ">*</span> Lý do báo cáo nội
                  dung này
                </label>
                <div className="mt-[10px] pl-[10px]">
                  <spam
                    id="errEasonSpam"
                    className="text-[12px] text-red-500"
                  ></spam>
                  <div className="py-[3px]">
                    <input
                      type="radio"
                      id="spam1"
                      name="fav_language"
                      value="1"
                      className="cursor-pointer"
                    />
                    {"  "}
                    <label for="spam1" className="cursor-pointer">
                      Nội dung rác
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
                    <label for="spam2" className="cursor-pointer">
                      Vi phạm điều khoản
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
                    <label for="spam3" className="cursor-pointer">
                      Quấy rối, đả kích
                    </label>
                  </div>
                  <div className="py-[3px]">
                    <input
                      type="radio"
                      id="spam4"
                      name="fav_language"
                      value="4"
                      className="cursor-pointer"
                    />{" "}
                    <label for="spam4" className="cursor-pointer">
                      Vi phạm bản quyền
                    </label>
                  </div>
                  <div className="py-[3px]">
                    <input
                      type="radio"
                      id="spam5"
                      name="fav_language"
                      value="5"
                      className="cursor-pointer"
                    />{" "}
                    <label for="spam5" className="cursor-pointer">
                      Bản dịch chất lượng kém
                    </label>
                  </div>
                </div>
                <div className="mt-[30px]">
                  <textarea
                    onChange={(e) => setContentSpam(e.target.value)}
                    name=""
                    id=""
                    rows="3"
                    className="w-full px-[10px] text-[14px] py-[3px] border border-gray-400 rounded-[3px] focus:outline-none  focus:border focus:border-blue-400 "
                    placeholder="Nhận xét..."
                  ></textarea>
                </div>
                <spam
                  id="errContentSpam"
                  className="text-[12px] text-red-500"
                ></spam>
              </div>
            </form>
          </div>

          <div className=" pb-[15px] flex justify-end">
            <button
              onClick={() => handelReportSpam()}
              className=" border border-gray-400 text-gray-500 text-[14px] hover:bg-blue-50  hover:text-blue-400 rounded-[3px] px-[15px] py-[3px]"
            >
              Báo cáo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionsDetail;
