import React, { useEffect, useState } from "react";
import { path } from "src/Constants/";
import { Icon } from "src/Components/Icon";
import ProfileUserApi from "src/Apis/ProfileUserApi";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import FollowApi from "src/Apis/FollowApi";
import { setLoading } from "src/Redux/Slices/Loading.slice";

const UserFollower = (props) => {
    const username = props.match.params.username;
    const [userFollowers, setUserFollowers] = useState([]);
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
        const folClone = [...userFollowers];
        folClone.map((fol) => {
            if (fol.username === username) {
                fol.isFollowing = false;
            }
            return fol;
        })
        setUserFollowers(folClone);
        dispatch(setLoading(false))
    }

    const handleFollow = async (username) => {
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false))
        }
        dispatch(setLoading(true))
        await FollowApi.followTag(username);
        const folClone = [...userFollowers];
        folClone.map((fol) => {
            if (fol.username === username) {
                fol.isFollowing = true;
            }
            return fol;
        })
        setUserFollowers(folClone);
        dispatch(setLoading(false))
    }

    useEffect(() => {
        const userFollowers = async () => {
            try {
                dispatch(setLoading(true))
                const { data: followerUser } = await ProfileUserApi.getFollowerUser(username);
                setUserFollowers(followerUser.data.models);
                dispatch(setLoading(false))
            } catch (error) {
                console.log(error);
            }
        };
        userFollowers();
    }, []);


    return (
        <div className="container mx-auto">
            {userFollowers?.length == 0 ? (
                <div>
                    <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
                        Không có gì ở đây cả
                    </p>
                </div>
            ) : (
                <div className="flex grid-cols-4 ">
                    <div className="flex justify-between flex-wrap gap-[20px]">
                        {userFollowers?.map((item, index) => {
                            return (
                                <div key={index} className="flex py-[20px] px-[10px] mb-[20px] bg-white">
                                    <div className="">
                                        {item?.avatar?.avatarUrl ?
                                            <img
                                                className="mx-auto max-h-[40px] rounded-full "
                                                width="40px"
                                                height="40px"
                                                src={item?.avatar?.avatarUrl}
                                                alt={item?.username} />
                                            :
                                            <div className="py-[5px] text-[#4A5568] mx-auto text-center w-[40px] w-[40px] rounded-full bg-blue-300 font-bold text-[20px]">
                                                {item?.fullname?.toUpperCase().substring(0, 1)}
                                            </div>
                                        }
                                    </div>
                                    <div className="ml-[12px] my-auto">
                                        <div className="">
                                            <Link to={`/user/${item?.username}`} className="text-[16px] font-semibold inline-block">
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
                                    {item?.isFollowing ? (
                                        <div onClick={() => handleUnFollow(item?.username)} className="mx-[10px] text-center my-auto text-white border border-[#6C91F0] font-bold rounded text-[15px] bg-[#1273eb] hover:bg-blue-200 hover:text-[#6C91F0]">
                                            <button className="font-bold px-[10px] py-[5px] ">
                                                {" "}
                                                - Bỏ theo dõi
                                            </button>
                                        </div>
                                    ) : (
                                        <div onClick={() => handleFollow(item?.username)} className="mx-[10px] text-center my-auto text-[#6C91F0] border border-[#6C91F0] font-bold rounded text-[15px] hover:bg-[#1273eb] hover:text-white">
                                            <button className="font-bold px-[10px] py-[5px] ">
                                                {" "}
                                                + Theo dõi
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
