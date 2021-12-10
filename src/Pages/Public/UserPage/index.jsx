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
import { useDispatch } from "react-redux";
import FollowApi from "src/Apis/FollowApi";
import { setLoading } from "src/Redux/Slices/Loading.slice";

const Userpage = (props) => {
    const username = props.match.params.username;
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const token = localStorage.getItem("_token_");

    const handleFollow = async () => {
        dispatch(setLoading(true))
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false))
        }
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
            path: `/user/${username}`,
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
            value: "Thẻ đang theo dõi",
        },
    ];

    // authors
    useEffect(() => {

        const user = async () => {
            try {
                dispatch(setLoading(true))
                const { data: users } = await ProfileUserApi.getUser(username);
                setUser(users.data);
                dispatch(setLoading(false))
            } catch (error) {
                console.log(error);
            }
        };
        user();
    }, [location.pathname]);

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
                                <div className="py-[12px] text-[#4A5568] mx-auto text-center w-[70px] h-[70px] rounded-full bg-blue-300 font-bold text-[30px]">
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
                        <Navigation path={pathName} />
                    </div>
                    <div className="w-full shadow-sm bg-white rounded mt-[10px]">
                        <Switch>
                            <Route
                                exact
                                path={path.USER_FOLLOWING}
                                render={(props) => (
                                    <UserFollowing {...props} />
                                )}
                            ></Route>
                            <Route
                                exact
                                path={path.USER_FOLLOWER}
                                render={(props) => (
                                    <UserFollower {...props} />
                                )}
                            ></Route>
                            <Route
                                exact
                                path={path.USER_BOOKMARK}
                                render={(props) =>
                                    <UserBookMark {...props} />
                                }
                            ></Route>
                            <Route
                                exact
                                path={path.USER_ID}
                                render={(props) => <UserPost {...props} />}
                            ></Route>
                            <Route
                                exact
                                path={path.USER_TAG}
                                render={(props) => <UserTag {...props} />}
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
