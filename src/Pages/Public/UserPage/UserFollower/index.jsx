import React, { useEffect, useState } from "react";
import { Icon } from "src/Components/Icon";
import ProfileUserApi from "src/Apis/ProfileUserApi";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import FollowApi from "src/Apis/FollowApi";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import { useSelector } from "react-redux";
import UserApi from "src/Apis/UserApi";
import queryString from "query-string";

const UserFollower = ({ paginate, setPaginate, ...props }) => {
  const username = props.match.params.username;
  const { profile } = useSelector((state) => state.Auth);
  const [userFollowers, setUserFollowers] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("_token_");
  const location = useLocation();

  const handleUnFollow = async (username) => {
    if (token === null) {
      history.push("/auth/login");
      dispatch(setLoading(false));
      return;
    }
    dispatch(setLoading(true));
    await FollowApi.unFollow(username);
    setUserFollowers(folClone);
    const data = {
      type: "down",
      points: 5,
    };
    await UserApi.pointUser(username, data);
    const folClone = [...userFollowers];
    folClone.map((fol) => {
      if (fol.username === username) {
        fol.isFollowing = false;
      }
      return fol;
    });
    dispatch(setLoading(false));
  };

  const handleFollow = async (username) => {
    if (token === null) {
      history.push("/auth/login");
      dispatch(setLoading(false));
      return;
    }
    dispatch(setLoading(true));
    await FollowApi.follow(username);
    const data = {
      type: "up",
      points: 5,
    };
    await UserApi.pointUser(username, data);
    const folClone = [...userFollowers];
    folClone.map((fol) => {
      if (fol.username === username) {
        fol.isFollowing = true;
      }
      return fol;
    });
    setUserFollowers(folClone);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    const userFollowers = async () => {
      try {
        dispatch(setLoading(true));
        const query = queryString.parse(location.search);
        const { data: followerUser } = await ProfileUserApi.getFollowerUser(
          username,
          query
        );
        setUserFollowers(followerUser.data.models);
        setPaginate(followerUser.data.metaData.pagination);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
    userFollowers();
  }, [location.search]);

  return (
    <div className="container mx-auto">
      {userFollowers?.length == 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Kh??ng c?? ng?????i theo d??i
          </p>
        </div>
      ) : (
        <div className="flex grid-cols-4 ">
          <div className="gap-x-[20px] grid lg:grid-cols-3 md:grid-cols-2">
            {userFollowers?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center py-[20px] px-[10px] my-[5px] bg-white"
                >
                  <div className="">
                    {item?.avatar?.avatarUrl ? (
                      <img
                        className="mx-auto min-w-[40px] min-h-[40px] rounded-full "
                        width="40px"
                        height="40px"
                        src={item?.avatar?.avatarUrl}
                        alt={item?.username}
                      />
                    ) : (
                      <div className="py-[5px] text-[#4A5568] mx-auto text-center w-[40px] w-[40px] rounded-full bg-blue-300 font-bold text-[20px]">
                        {item?.fullname?.toUpperCase().substring(0, 1)}
                      </div>
                    )}
                  </div>
                  <div className="ml-[12px] my-auto">
                    <div className="">
                      <Link
                        to={`/user/${item?.username}`}
                        className="text-[16px] font-semibold inline-block"
                      >
                        {item?.fullname}
                      </Link>
                    </div>
                    <div className=" flex">
                      <p className="text-center  ">
                        <span className="flex items-center text-[14px] text-gray-500">
                          <Icon.Point className="fill-current w-[10px] " />
                          <span className="text-[13px] mx-[2px]">
                            {item?.points}
                          </span>
                        </span>
                      </p>
                      <p className="text-center ml-[10px] ">
                        <span className="flex items-center text-[14px] text-gray-500">
                          <Icon.Pen className="fill-current w-[10px]  " />
                          <span className="text-[13px] mx-[2px]">
                            {item?.postCounts}
                          </span>
                        </span>
                      </p>{" "}
                      <p className="text-center ml-[10px]">
                        <span className="flex items-center text-[14px] text-gray-500">
                          <Icon.Questions className="fill-current w-[10px]  mx-[2px]" />
                          <span className="text-[13px] mx-[2px]">
                            {item?.questionCounts}
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  {item?.username === profile?.username ? (
                    <div className="mx-[10px] ">
                      <button
                        onClick={() => history.push("/profile/me")}
                        className="min-w-[106px] mt-[10px] bg-[#0d61c7] border border-[#0d61c7] hover:bg-[#fff] hover:text-[#0d61c7] text-[#fff] rounded md:px-[10px] md:py-[5px] px-[10px] py-[5px] text-[13px] lg:px-[8px] lg:py-[5px] xl:px-[8px] xl:py-[5px] "
                      >
                        Xem th??ng tin
                      </button>
                    </div>
                  ) : item?.isFollowing ? (
                    <div
                      onClick={() => handleUnFollow(item?.username)}
                      className="min-w-[106px] mx-[10px] text-center my-auto text-white border border-[#6C91F0] font-bold rounded text-[13px] bg-[#1273eb] hover:bg-blue-200 hover:text-[#6C91F0]"
                    >
                      <button className="font-bold px-[10px] py-[5px] ">
                        {" "}
                        - B??? theo d??i
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleFollow(item?.username)}
                      className="min-w-[90px] mx-[10px] text-center my-auto text-[#6C91F0] border border-[#6C91F0] font-bold rounded text-[13px] hover:bg-[#1273eb] hover:text-white"
                    >
                      <button className="font-bold px-[10px] py-[5px] ">
                        {" "}
                        + Theo d??i
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserFollower;
