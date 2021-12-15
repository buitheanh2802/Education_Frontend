import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import FollowApi from "src/Apis/FollowApi";
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import UserApi from "src/Apis/UserApi";
import { useSelector } from "react-redux";

const ListUserPage = () => {
    window.scrollTo(0,0);
    const [users, setUsers] = useState([])
    const dispatch = useDispatch();
    const token = localStorage.getItem("_token_");
    const history = useHistory();
    const { profile } = useSelector((state) => state.Auth);

    const handleUnFollow = async (username) => {
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false));
            return;
        }
        dispatch(setLoading(true))
        await FollowApi.unFollowTag(username);
        const userClone = [...users];
        userClone.map((user) => {
            if (user.username === username) {
                user.isFollowing = false;
            }
            return user;
        })
        setUsers(userClone);
        dispatch(setLoading(false))
    }

    const handleFollow = async (username) => {
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false))
            return;
        }
        dispatch(setLoading(true))
        await FollowApi.followTag(username);
        const userClone = [...users];
        userClone.map((user) => {
            if (user.username === username) {
                user.isFollowing = true;
            }
            return user;
        })
        setUsers(userClone);
        dispatch(setLoading(false))
    }

    const filter = async (e) => {
        try {
            dispatch(setLoading(true));
            const { data: listUser } = await UserApi.getListUser(e.target.value);
            setUsers(listUser.data);
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }

    useEffect(() => {
        const getData = async () => {
            try {
                dispatch(setLoading(true));
                const { data: listUser } = await UserApi.getListUser("points");
                setUsers(listUser.data);
                dispatch(setLoading(false));
            } catch (error) {
                dispatch(setLoading(false));
                console.log(error);
            }
        }
        getData();
    }, [])

    return (
        <div className="container mx-auto mt-[80px]">
            <div className="flex justify-between mt-[15px] gap-[30px]">
                <div className="max-[200px] px-[15px] sm:px-[35px] xl:gap-x-[95px] sm:gap-x-[60px] gap-y-[20px] mb-[30px] pb-[45px] w-full py-[15px] bg-white shadow rounded">
                    <div className="flex justify-between mb-[35px]">
                        <div className="leading-[35px] text-[25px] font-bold uppercase">
                            Tác giả
                        </div>
                        <div className="leading-[35px]">
                            <span className="mr-[10px]">Sắp xếp theo</span>
                            <select onChange={(e) => filter(e)}
                                className='border py-[5px] px-[8px] border-blue-300 rounded outline-none'
                                name="filter"
                            >
                                <option value="points">Điểm</option>
                                <option value="posts">Bài viết</option>
                                <option value="followers">Người theo dõi</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[20px] xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 px-[20px]">
                        {users?.map((item, index) => {
                            return (
                                <div key={index} className="item md:text-[16px] text-[14px] w-max-[200px] px-[10px] py-[10px]">
                                    <Link className="grid grid-cols-4 justify-center items-center" to={`/user/${item?.username}`} >
                                        <div className="mx-auto">
                                            {item?.avatar?.avatarUrl ?
                                                <img
                                                    src={item?.avatar?.avatarUrl}
                                                    alt="Avatar"
                                                    className="w-[60px] rounded-full"
                                                /> :
                                                <div className="w-[60px] h-[60px] bg-blue-400 flex justify-center items-center rounded-full">
                                                    <p className="text-white text-[20px]">{item?.fullname?.toUpperCase().substring(0, 1)}</p>
                                                </div>
                                            }
                                        </div>
                                        <div className="ml-[10px] col-span-3">
                                            <div className="flex mb-[10px]">
                                                <h3 className="text-[18px] leading-[20px] ">
                                                    {item?.fullname}
                                                </h3>
                                            </div>
                                            <div className="flex gap-[10px]">
                                                <p className="flex gap-[5px] text-[#8A8A8A] text-[14px]">
                                                    <Icon.Point className="fill-current w-[10px]" />
                                                    <span className="font-bold leading-[20px] ">
                                                        {item?.points}
                                                    </span>{" "}
                                                </p>
                                                <p className="flex gap-[5px] text-[#8A8A8A] text-[14px]">
                                                    <Icon.Pen className="fill-current w-[10px]" />
                                                    <span className="font-bold leading-[20px] ">
                                                        {item?.postCounts}
                                                    </span>{" "}
                                                </p>
                                                <p className="flex gap-[5px] text-[#8A8A8A] text-[14px]">
                                                    <Icon.User className="fill-current w-[10px] mx-[2px]" />
                                                    <span className="font-bold leading-[20px] ">
                                                        {item?.followerCounts}
                                                    </span>{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                    {item?.username === profile?.username ?
                                        <div className="w-[80%] mt-[10px] mx-auto text-center my-auto text-white border border-[#6C91F0] font-bold rounded text-[15px] bg-[#1273eb] hover:bg-blue-200 hover:text-[#6C91F0]">
                                            <button onClick={() => history.push('/profile/me')} className="font-bold px-[10px] py-[5px]">
                                                Xem thông tin
                                            </button>
                                        </div>
                                        :
                                        item?.isFollowing ? (
                                            <div onClick={() => handleUnFollow(item.username)} className="w-[80%] mt-[10px] mx-auto text-center my-auto text-white border border-[#6C91F0] font-bold rounded text-[15px] bg-[#1273eb] hover:bg-blue-200 hover:text-[#6C91F0]">
                                                <button className="font-bold px-[20px] md:px-[30px] py-[5px]">
                                                    {" "}
                                                    - Bỏ theo dõi
                                                </button>
                                            </div>
                                        ) : (
                                            <div onClick={() => handleFollow(item.username)} className="w-[80%] mt-[10px] mx-auto text-center my-auto text-[#6C91F0] border border-[#6C91F0] font-bold rounded text-[15px] hover:bg-[#1273eb] hover:text-white">
                                                <button className="font-bold px-[20px] md:px-[30px] py-[5px]">
                                                    {" "}
                                                    + Theo dõi
                                                </button>
                                            </div>
                                        )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListUserPage;