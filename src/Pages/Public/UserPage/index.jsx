import React, { useEffect, useState } from "react";

import Navigation from "../Commons/Navigation";
import { path } from "src/Constants/";
import { Icon } from "src/Components/Icon";
import ProfileUserApi from "src/Apis/ProfileUserApi";
import UserFollowing from "./UserFollowing";
import { Switch, Route } from "react-router-dom";
import UserFollower from "./UserFollower";
import UserBookMark from "./UserBookMark";
import UserPost from "./UserPost";
import UserTag from "./UserTag";
import { useDispatch } from "react-redux";
import FollowApi from "src/Apis/FollowApi";
import { setLoading } from "src/Redux/Slices/Loading.slice";

const Userpage = (props) => {
  const username = props.match.params.username;
  const [user, setUser] = useState(null);
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowing, setUserFollowing] = useState([]);
  const [userBookMark, setUserBookMark] = useState([]);
  const [userPost, setUserPost] = useState([]);
  const [userTag, setUserTag] = useState([]);
  const dispatch = useDispatch();

  const handleFollow = async () => {
    dispatch(setLoading(true))
    if (user?.isFollowing) {
      await FollowApi.unFollow(username);
      setUser({ ...user, isFollowing: false })
      dispatch(setLoading(false))
    } else {
      await FollowApi.follow(username);
      setUser({ ...user, isFollowing: true })
      dispatch(setLoading(false))
    }
  }
  const pathName = [
    {
      path: `/user/${username}/post`,
      value: "Bài viết",
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
      value: "Thẻ",
    },
  ];
  const button = {
    path: path.QUESTIONS_CREATE,
    icon: Icon.questions,
    value: "Đặt câu hỏi",
  };

  // authors
  useEffect(() => {

    const user = async () => {
      try {
        const { data: users } = await ProfileUserApi.getUser(username);
        setUser(users.data);
      } catch (error) {
        console.log(error);
      }
    };
    user();
  }, []);


  useEffect(() => {
    const username = props.match.params.username;
    const userFollowers = async () => {
      try {
        const { data: followerUser } = await ProfileUserApi.getFollowerUser(
          username
        );
        console.log(followerUser.data.models);
        setUserFollowers(followerUser.data.models);
      } catch (error) {
        console.log(error);
      }
    };
    userFollowers();
  }, []);


  useEffect(() => {
    const username = props.match.params.username;
    const userFollowing = async () => {
      try {
        const { data: followingUser } = await ProfileUserApi.getFollowingUser(
          username
        );
        setUserFollowing(followingUser.data.models);
      } catch (error) {
        console.log(error);
      }
    };
    userFollowing();
  }, []);


  useEffect(() => {
    const username = props.match.params.username;
    const userTag = async () => {
      try {
        const { data: tagUser } = await ProfileUserApi.getTagUser(username);
        setUserTag(tagUser.data.models);
      } catch (error) {
        console.log(error);
      }
    };
    userTag();
  }, []);


  useEffect(() => {
    const username = props.match.params.username;
    const userBookMark = async () => {
      try {
        const { data: bookMarkUser } = await ProfileUserApi.getBookmarkUser(username);
        setUserBookMark(bookMarkUser.data.models);
      } catch (error) {
        console.log(error);
      }
    };
    userBookMark();
  }, []);


  useEffect(() => {
    const username = props.match.params.username;
    const userPost = async () => {
      try {
        const { data: postUser } = await ProfileUserApi.getPostUser(username);
        setUserPost(postUser.data.models);
      } catch (error) {
        console.log(error);
      }
    };
    userPost();

  }, []);

  return (
    <div className="container mx-auto mt-[80px]">
      <div className="my-[15px] lg:grid lg:grid-cols-4 gap-3">
        <div className="col-start-1 col-span-3 w-full  rounded">
          <div className="flex py-[30px] px-[10px] mb-[20px] bg-white">
            <div>
              {user?.avatar?.avatarUrl ?
                <img
                  src={user?.avatar?.avatarUrl}
                  className="mx-auto max-h-[70px] rounded-full"
                  width="70px"
                  height="70px"
                />
                :
                <div className="py-[12px] text-[#4A5568] mx-auto text-center md:w-[70px] md:h-[70px] rounded-full bg-blue-300 font-bold text-[30px]">
                  {user?.username?.toUpperCase().substring(0, 1)}
                </div>
              }
            </div>
            <div className="ml-[30px] my-auto">
              <div className="">
                <h3 className="text-[22px] font-semibold inline-block">
                  {user?.fullname}
                </h3>
                <Icon.Star className="w-[18px] mb-[15px] ml-[10px] inline-block" />
                <p className="text-[#666]">@{user?.username}</p>
              </div>
              {user?.isFollowing ?
                <button onClick={() => handleFollow()} className="mt-[10px] bg-[#0d61c7] border border-[#0d61c7] hover:bg-[#fff] hover:text-[#0d61c7] text-[#fff] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">
                  - Bỏ theo dõi
                </button>
                :
                <button onClick={() => handleFollow()} className="mt-[10px] bg-[#fff] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#BEE3F8] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">
                  + Theo dõi
                </button>
              }
            </div>
          </div>
          <div className="w-full shadow-sm bg-white rounded ">
            <Navigation path={pathName} button={button} />
          </div>
          <div className="w-full shadow-sm bg-white rounded mt-[10px]">
            <Switch>
              <Route
                exact
                path={path.USER_FOLLOWING}
                render={(props) => (
                  <UserFollowing userFollowing={userFollowing} {...props} />
                )}
              ></Route>
              <Route
                exact
                path={path.USER_FOLLOWER}
                render={(props) => (
                  <UserFollower userFollower={userFollowers} {...props} />
                )}
              ></Route>
              <Route
                exact
                path={path.USER_BOOKMARK}
                render={(props) =>
                  <UserBookMark userBookMark={userBookMark} {...props} />
                }
              ></Route>
              <Route
                exact
                path={path.USER_POST}
                render={(props) => <UserPost userPost={userPost} {...props} />}
              ></Route>
              <Route
                exact
                path={path.USER_TAG}
                render={(props) => <UserTag userTag={userTag} {...props} />}
              ></Route>
            </Switch>
          </div>
        </div>
        <div className="min-w-100 max-w-100 bg-white shadow rounded px-[20px] py-[20px] text-[15px] ">
          <div className="flex justify-between my-[5px] ">
            <p className="text-gray-500">Tổng số bài viết : </p>
            <span className="font-bold text-[13px]">{user?.postCounts}</span>
          </div>
          <div className="flex justify-between my-[5px]">
            <p className="text-gray-500">Tổng số câu hỏi : </p>
            <span className="font-bold text-[13px]">{user?.questionCounts}</span>
          </div>
          <div className="flex justify-between my-[5px]">
            <p className="text-gray-500">Bookmark : </p>
            <span className="font-bold text-[13px]">@</span>
          </div>
          <div className="flex justify-between my-[5px]">
            <p className="text-gray-500">Số người theo dõi : </p>
            <span className="font-bold text-[13px]">{user?.followers}</span>
          </div>
        </div>
      </div>      
    </div>
  );
};
export default Userpage;
