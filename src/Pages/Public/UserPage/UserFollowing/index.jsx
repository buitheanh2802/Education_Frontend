import React, { useEffect, useState } from "react";
import { path } from "src/Constants/";
import { Icon } from "src/Components/Icon";
import ProfileUserApi from "src/Apis/ProfileUserApi";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import FollowApi from "src/Apis/FollowApi";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import { useSelector } from "react-redux";

const UserFollowing = (props) => {
    const username = props.match.params.username;
    const { profile } = useSelector((state) => state.Auth);
    const [userFollowing, setUserFollowing] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem("_token_");

    const handleUnFollow = async (username) => {
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false))
        }
        dispatch(setLoading(true))
        await FollowApi.unFollowTag(username);
        const folClone = [...userFollowing];
        folClone.map((fol) => {
            if (fol.username === username) {
                fol.isFollowing = false;
            }
            return fol;
        })
        setUserFollowing(folClone);
        dispatch(setLoading(false))
    }

    const handleFollow = async (username) => {
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false))
        }
        dispatch(setLoading(true))
        await FollowApi.followTag(username);
        const folClone = [...userFollowing];
        folClone.map((fol) => {
            if (fol.username === username) {
                fol.isFollowing = true;
            }
            return fol;
        })
        setUserFollowing(folClone);
        dispatch(setLoading(false))
    }

    useEffect(() => {
        const userFollowing = async () => {
            try {
                dispatch(setLoading(true))
                const { data: userFollowing } = await ProfileUserApi.getFollowingUser(username);
                setUserFollowing(userFollowing.data.models);
                console.log(userFollowing);
                dispatch(setLoading(false))
            } catch (error) {
                console.log(error);
            }
        };
        userFollowing();
    }, []);

    return (
        <div>
            {userFollowing?.length == 0 ? (
                <div>
                    <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
                        Không có gì ở đây cả
                    </p>
                </div>
            ) : (
                <div className=" mx-auto">
                    <div className="flex 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3">
                        <div className="flex justify-between flex-wrap gap-[20px] grid-cols-3 lg:grid-cols-3">
                            {userFollowing?.map((item, index) => {
                                return (
                                    <div key={index} className="flex py-[20px] px-[10px] mb-[20px] bg-white">
                                        <div>
                                            {item?.followingUserId?.avatar?.avatarUrl ? (
                                                <img
                                                    src={item?.followingUserId?.avatar?.avatarUrl}
                                                    className="mx-auto max-h-[40px] rounded-full"
                                                    width="40px"
                                                    height="40px"
                                                />
                                            ) : (
                                                <div className="py-[5px] text-[#4A5568] mx-auto text-center w-[40px] h-[40px] rounded-full bg-blue-300 font-bold text-[20px]">
                                                    {item?.followingUserId?.fullname?.toUpperCase().substring(0, 1)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-[12px] my-auto">
                                            <div className="">
                                                <Link to={`/user/${item?.followingUserId?.username}`} className="text-[16px] font-semibold inline-block">
                                                    {item?.followingUserId?.fullname}
                                                </Link>
                                            </div>
                                            <div className=" flex">
                                                <p className="text-center  ">
                                                    <span className="flex items-center text-[14px] text-gray-500">
                                                        <Icon.Point className="fill-current w-[10px] " />
                                                        <span className="text-[13px] mx-[2px]">
                                                            {item?.followingUserId?.points}
                                                        </span>
                                                    </span>
                                                </p>
                                                <p className="text-center ml-[10px] ">
                                                    <span className="flex items-center text-[14px] text-gray-500">
                                                        <Icon.Pen className="fill-current w-[10px]  " />
                                                        <span className="text-[13px] mx-[2px]">
                                                            {item?.followingUserId?.postCounts}
                                                        </span>
                                                    </span>
                                                </p>{" "}
                                                <p className="text-center ml-[10px]">
                                                    <span className="flex items-center text-[14px] text-gray-500">
                                                        <Icon.Questions className="fill-current w-[10px]  mx-[2px]" />
                                                        <span className="text-[13px] mx-[2px]">
                                                            {item?.followingUserId?.questionCounts}
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        {item?.followingUserId?.username === profile?.username ?
                                            <div>

                                            </div>
                                            :
                                            item?.followingUserId?.isFollowing ? (
                                                <div onClick={() => handleUnFollow(item?.followingUserId?.username)} className="mx-[10px] text-center my-auto text-white border border-[#6C91F0] font-bold rounded text-[15px] bg-[#1273eb] hover:bg-blue-200 hover:text-[#6C91F0]">
                                                    <button className="font-bold px-[10px] py-[5px] ">
                                                        {" "}
                                                        - Bỏ theo dõi
                                                    </button>
                                                </div>
                                            ) : (
                                                <div onClick={() => handleFollow(item?.followingUserId?.username)} className="mx-[10px] text-center my-auto text-[#6C91F0] border border-[#6C91F0] font-bold rounded text-[15px] hover:bg-[#1273eb] hover:text-white">
                                                    <button className="font-bold px-[10px] py-[5px] ">
                                                        {" "}
                                                        + Theo dõi
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default UserFollowing;
