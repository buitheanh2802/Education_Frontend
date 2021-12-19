import React, { useEffect, useState } from "react";
import Navigation from "../Commons/Navigation";
import { path } from "src/Constants/";
import { Icon } from "src/Components/Icon";
import ProfileUserApi from "src/Apis/ProfileUserApi";
import UserFollowing from "./UserFollowing";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import UserFollower from "./UserFollower";
import UserBookMark from "./UserBookMark";
import UserPost from "./UserPost";
import UserTag from "./UserTag";
import { useDispatch, useSelector } from "react-redux";
import FollowApi from "src/Apis/FollowApi";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import NotificationApi from "src/Apis/NotificationApi";
import UserQuestion from "./UserQuestion";
import UserApi from "src/Apis/UserApi";
import Panigation from "src/Pages/Public/Commons/Panigation";

const Userpage = (props) => {
  window.scrollTo(0, 0);
  const username = props.match.params.username;
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const token = localStorage.getItem("_token_");
  const { socket } = useSelector((state) => state.SocketService);
  const { profile } = useSelector((state) => state.Auth);
  const [paginate, setPaginate] = useState(null);

  const handleFollow = async () => {
    dispatch(setLoading(true));
    if (token === null) {
      history.push("/auth/login");
      dispatch(setLoading(false));
      return;
    }
    const notificationRequest = {
      title: user?.isFollowing ? "đã bỏ theo dõi bạn." : "đã theo dõi bạn.",
      url: "",
      type: "follow",
    };
    if (user?.isFollowing) {
      await FollowApi.unFollow(username);
      const dataPoint = {
        type: "down",
        points: 5,
      };
      await UserApi.pointUser(username, dataPoint);
      const {
        data: { data },
      } = await NotificationApi.create(token, notificationRequest, user._id);
      socket.emit("sendTo", { ...data, sendToId: user._id });
      setUser({ ...user, isFollowing: false });
      dispatch(setLoading(false));
    } else {
      await FollowApi.follow(username);
      const dataPoint = {
        type: "up",
        points: 5,
      };
      await UserApi.pointUser(username, dataPoint);
      const {
        data: { data },
      } = await NotificationApi.create(token, notificationRequest, user._id);
      socket.emit("sendTo", { ...data, sendToId: user._id });
      setUser({ ...user, isFollowing: true });
      dispatch(setLoading(false));
    }
  };

  const pathName = [
    {
      path: `/user/${username}`,
      value: "Bài viết",
    },
    {
      path: `/user/${username}/question`,
      value: "Câu hỏi",
    },
    {
      path: `/user/${username}/bookmark/post`,
      value: "Bookmark",
    },
    {
      path: `/user/${username}/following`,
      value: "Đang theo dõi",
    },
    {
      path: `/user/${username}/follower`,
      value: "Người theo dõi",
    },
    {
      path: `/user/${username}/tag`,
      value: "Thẻ đang theo dõi",
    },
  ];

  useEffect(() => {
    const user = async () => {
      try {
        dispatch(setLoading(true));
        const { data: users } = await ProfileUserApi.getUser(username);
        setUser(users.data);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
    user();
  }, [location.pathname]);

  const onPageChange = (e) => {
    history.push(`?page=${e.selected + 1}`);
  };

  return (
    <div className="container mx-auto mt-[80px]">
      <div className="my-[15px] lg:grid lg:grid-cols-4 gap-3">
        <div className="col-start-1 col-span-3 w-full  rounded">
          <div className="flex py-[30px] px-[10px] mb-[20px] bg-white">
            <div>
              {user?.avatar?.avatarUrl ? (
                <img
                  src={user?.avatar?.avatarUrl}
                  className="mx-auto max-h-[70px] rounded-full"
                  width="70px"
                  height="70px"
                />
              ) : (
                <div className="py-[12px] text-[#4A5568] mx-auto text-center w-[70px] h-[70px] rounded-full bg-blue-300 font-bold text-[30px]">
                  {user?.username?.toUpperCase().substring(0, 1)}
                </div>
              )}
            </div>
            <div className="ml-[30px] my-auto">
              <div className="">
                <h3 className="text-[22px] font-semibold inline-block">
                  {user?.fullname}
                </h3>
                <Icon.Star className="w-[18px] mb-[15px] ml-[10px] inline-block" />
                <p className="text-[#666]">@{user?.username}</p>
              </div>
              {user?.username === profile?.username ? (
                <div>
                  <button
                    onClick={() => history.push("/profile/me")}
                    className="mt-[10px] bg-[#0d61c7] border border-[#0d61c7] hover:bg-[#fff] hover:text-[#0d61c7] text-[#fff] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] "
                  >
                    Xem thông tin
                  </button>
                </div>
              ) : user?.isFollowing ? (
                <button
                  onClick={() => handleFollow()}
                  className="mt-[10px] bg-[#0d61c7] border border-[#0d61c7] hover:bg-[#fff] hover:text-[#0d61c7] text-[#fff] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] "
                >
                  - Bỏ theo dõi
                </button>
              ) : (
                <button
                  onClick={() => handleFollow()}
                  className="mt-[10px] bg-[#fff] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#BEE3F8] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] "
                >
                  + Theo dõi
                </button>
              )}
            </div>
          </div>
          <div className="w-full shadow-sm bg-white rounded ">
            <Navigation path={pathName} />
          </div>
          <div className="w-full shadow-sm bg-white rounded mt-[10px]">
            <Switch>
              <Route
                exact
                path={path.USER_FOLLOWING}
                render={(props) => (
                  <UserFollowing
                    paginate={paginate}
                    setPaginate={setPaginate}
                    {...props}
                  />
                )}
              ></Route>
              <Route
                exact
                path={path.USER_QUESTION}
                render={(props) => (
                  <UserQuestion
                    paginate={paginate}
                    setPaginate={setPaginate}
                    {...props}
                  />
                )}
              ></Route>
              <Route
                exact
                path={path.USER_FOLLOWER}
                render={(props) => (
                  <UserFollower
                    paginate={paginate}
                    setPaginate={setPaginate}
                    {...props}
                  />
                )}
              ></Route>
              <Route
                exact
                path={path.USER_BOOKMARK}
                render={(props) => (
                  <UserBookMark
                    paginate={paginate}
                    setPaginate={setPaginate}
                    {...props}
                  />
                )}
              ></Route>
              <Route
                exact
                path={path.USER_ID}
                render={(props) => (
                  <UserPost
                    paginate={paginate}
                    setPaginate={setPaginate}
                    {...props}
                  />
                )}
              ></Route>
              <Route
                exact
                path={path.USER_TAG}
                render={(props) => (
                  <UserTag
                    paginate={paginate}
                    setPaginate={setPaginate}
                    {...props}
                  />
                )}
              ></Route>
            </Switch>
          </div>
          {paginate &&
            paginate?.totalPage > 1 &&
            paginate?.countDocuments !== 0 && (
              <Panigation
                pageCount={paginate.totalPage}
                currentPage={paginate.currentPage - 1}
                onChange={onPageChange}
              />
            )}
        </div>
        <div className="min-w-100 max-w-100 bg-white shadow rounded px-[20px] py-[20px] text-[15px] ">
          <div className="flex justify-between my-[5px] ">
            <p className="text-gray-700 text-[14px]">Tổng số bài viết : </p>
            <span className="font-bold text-[15px]">{user?.postCounts}</span>
          </div>
          <div className="flex justify-between my-[5px]">
            <p className="text-gray-700 text-[14px]">Tổng số câu hỏi : </p>
            <span className="font-bold text-[15px]">
              {user?.questionCounts}
            </span>
          </div>
          <div className="flex justify-between my-[5px]">
            <p className="text-gray-700 text-[14px]">
              Số người theo dõi {user?.fullname}:{" "}
            </p>
            <span className="font-bold text-[15px]">{user?.followers}</span>
          </div>
          <div className="flex justify-between my-[5px]">
            <p className="text-gray-700 text-[14px]">
              Số người {user?.fullname} theo dõi:{" "}
            </p>
            <span className="font-bold text-[15px]">
              {user?.followingCounts}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Userpage;
