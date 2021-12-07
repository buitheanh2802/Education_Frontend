import React, { useState, useEffect } from "react";
import { Icon } from "src/Components/Icon";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import AuthApi from "src/Apis/AuthApi";
const ProfilePage = () => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const profile = async () => {
            try {
                dispatch(setLoading(true))
                const { data: profile } = await AuthApi.profile();
                setProfile(profile.data);
                dispatch(setLoading(false))
            } catch (error) {
                console.log("Failed to get data", error.response);
            }
        };
        profile();
    }, []);


    return (
        <div className="container mx-auto mt-[80px]">
            <div className="mt-[15px] mb-[25px] lg:grid lg:grid-cols-4 gap-3">
                <div className=" min-w-100 max-w-100 bg-white shadow rounded">
                    <div className="py-[5px] mx-[10px]">
                        <div className="py-[10px] bg-[#BEE3F8]">
                            <Link className="block">
                                {profile?.avatar?.avatarUrl ?
                                    <img
                                        className="mx-auto max-h-[70px] rounded-full"
                                        width="70px" height="70px"
                                        src={profile?.avatar?.avatarUrl}
                                        alt={profile?.username} />
                                    :
                                    <div className="py-[12px] text-[#4A5568] mx-auto text-center w-[70px] h-[70px] rounded-full bg-white font-bold text-[30px]">
                                        {profile?.username?.toUpperCase().substring(0, 1)}
                                    </div>
                                }
                            </Link>
                        </div>
                        <div>
                            <div className=" divide-y divide-light-blue-400 pb-[10px]">
                                <div className="grid grid-cols-3 lg:gap-[3px] md:gap-[10px] my-[20px]">
                                    <div class="col-span-2">
                                        <Link className="py-[5px] font-semibold text-[#2D3748] md:text-[16px] sm:text-[16px] xl:text-[18px] lg:text-[14px] hover:underline">
                                            {profile?.fullname}
                                        </Link>
                                        <br />
                                        <span className="py-[5px] lg:text-[13px] xl:text-[16px] sm:text-[14px] text-[#4A5568] ">
                                            @{profile?.username?.substring(0, 16)}...
                                        </span>
                                        <div className="py-[5px]">
                                            <span className="inline-block mr-[5px] pt-[0px]">
                                                <Icon.Calendar className="fill-current w-[13px] " />
                                            </span>
                                            {profile?.birthday}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <Link to={`/profile/me/change-info`}
                                            className="bg-[#0d61c7] border border-[#0d61c7] hover:bg-[#fff] hover:text-[#0d61c7] text-[#fff] rounded md:px-[10px] md:py-[5px] md:text-[14px]
                                             px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px]">
                                            Chỉnh sửa
                                        </Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 xl:text-[15px] text-[12px] py-[15px]">
                                    <div className="mx-auto">
                                        <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.Point className="fill-current w-[13px] mr-[5px]" />
                                                <span>Điểm</span>
                                            </div>
                                            <span>{profile?.points}</span>
                                        </div>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.Pen className="fill-current w-[13px] mr-[5px]" />
                                                <span>Bài viết</span>
                                            </div>
                                            <span>{profile?.postCounts}</span>
                                        </div>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.questions className="fill-current w-[13px] mr-[5px]" />
                                                <span>Câu hỏi</span>
                                            </div>
                                            <span>{profile?.questionCounts}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-[30px] xl:text-[15px] py-[15px] text-[13px]">
                                    <div className="mx-auto">
                                        <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.User className="fill-current w-[13px] mr-[5px]" />
                                                <span>Có {profile?.followers}</span>
                                            </div>
                                            <span>người theo dõi</span>
                                        </div>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.Username className="fill-current w-[13px] mr-[5px]" />
                                                <span>Theo dõi</span>
                                            </div>
                                            <span>{profile?.followingCounts} người dùng</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 col-span-4 w-full shadow-sm bg-white rounded lg:mt-[0px] md:mt-[10px] sm:mt-[10px]">
                    <div className="w-full px-[10px] py-[15px] border-b">
                        <h2 className="font-bold text-[20px]">Thông tin tài khoản</h2>
                    </div>
                    <div className="w-full px-[10px] py-[15px]">
                        <div className="py-[5px]">
                            <span className="inline-block"><Icon.Profile className="fill-current w-[16px] mb-[-2px] mr-[5px]" /> </span>
                            <span className="inline-block"> {profile?.descriptions}</span>
                        </div>
                        <div className="py-[5px]">
                            <span className="font-bold text-gray-800">Phone: </span> {profile?.phoneNumber}
                            </div>
                        <div className="py-[5px]">
                            <span className="font-bold text-gray-800">Address: </span> {profile?.address}
                            </div>
                        <div className="py-[5px]">
                            <span className="font-bold text-gray-800">Email: </span> {profile?.email}
                        </div>
                        <div className="py-[5px]">
                            <span className="font-bold text-gray-800">Hobbies: </span>
                            {profile?.hobbies?.map((hob, index) => {
                                return (
                                    <>
                                        <div className="font-bold mx-[5px] px-[5px] inline-block border-r border-black last:border-0" key={index}>
                                            {hob}
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="py-[5px]">
                            <span className="font-bold text-gray-800">Skills: </span>
                            {profile?.skills?.map((ski, index) => {
                                return (
                                    <>
                                        <div className="font-bold mx-[5px] inline-block md:px-[10px] px-[10px] py-[5px] lg:px-[8px] text-[12px] xl:px-[15px] hover:bg-gray-300 text-[#4A5568] bg-[#BEE3F8]" key={index}>
                                            {ski}
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;
