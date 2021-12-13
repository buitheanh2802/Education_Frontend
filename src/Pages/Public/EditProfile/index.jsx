import React, { useState, useEffect } from "react";
import profile_icon from "../../../Assets/media/pictures/profile.png";
import key_icon from "../../../Assets/media/pictures/digital-key.png";
import { Route, Switch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import AuthApi from "src/Apis/AuthApi";
import Sidebar from "./Sidebar";
import ChangePersonal from "./ChangePersonal";
import ChangePassword from "./ChangePassword";

const EditProfile = () => {
    const dispatch = useDispatch();
    const [profileDetail, setProfileDetail] = useState([]);

    useEffect(() => {
        const proDetail = async () => {
            try {
                dispatch(setLoading(true))
                const { data : profileDetail } = await AuthApi.profileDetail();
                setProfileDetail(profileDetail.data)
                dispatch(setLoading(false))
            } catch (error) {
                console.log(error.response);
            }
        }
        proDetail();

    }, []);

    return (
        <>
            <div className="mx-auto">
                <div className="flex mb-[20px]">
                    <div className="lg:w-[20%] pt-[75px]">
                        <Sidebar profile={profileDetail} />
                    </div>
                    <div className="w-full lg:w-[80%] px-[15px] md:px-[30px] pt-[75px]">
                        <div className=" max-w-[1100px] mx-auto">
                            <div className="bg-white shadow-lg rounded-[5px] mx-auto">
                                <Switch>
                                    <Route
                                        exact
                                        path={`/profile/me/change-info`}
                                        render={() => (
                                            <div className="px-[20px] lg:px-[50px] pt-[15px] pb-[50px]">
                                                <div
                                                    className="bg-gradient-to-r from-[#a1ddf5] to-[#b662ee] h-[130px] lg:h-[150px] rounded-[5px] bg-center bg-cover bg-no-repeat cursor-pointer"
                                                >
                                                </div>
                                                <div className="lg:flex">
                                                    <Link to="/profile/me" className="w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] rounded-full translate-y-[-50%] mx-auto lg:mx-0 lg:ml-10  overflow-hidden cursor-pointer">
                                                        {profileDetail?.avatar?.avatarUrl ?
                                                            <img
                                                                className="mx-auto max-h-[110px] w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] rounded-full"
                                                                src={profileDetail?.avatar?.avatarUrl}
                                                                alt={profileDetail?.username} />
                                                            :
                                                            <div className="leading-[95px] lg:leading-[110px] text-white mx-auto text-center w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] rounded-full bg-blue-200 font-bold lg:text-[62px] text-[56px]">
                                                                {profileDetail?.username?.toUpperCase().substring(0, 1)}
                                                            </div>
                                                        }
                                                    </Link>
                                                    <p className="text-[20px] font-bold leading-[25px] lg:ml-6 text-center lg:text-left mt-[12px]">
                                                        Chào mừng, <Link to="/profile/me">{profileDetail?.fullname}</Link>
                                                        <p className="text-[14px] md:text-[16px] font-normal">
                                                            Quản lý thông tin cá nhân của bạn và bảo mật với DevStar
                                                        </p>
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[15px] mt-10">
                                                    <Link to="/profile/me/change-info/personal" className="bg-gradient-to-r from-[#a1f0f0] to-[#79a3f1] text-center pt-5 pb-7 rounded-[5px] cursor-pointer card-item ">
                                                        <div className=" w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] mx-auto">
                                                            <img src={profile_icon} alt="" />
                                                        </div>
                                                        <div className="text-[20px] md:text-[24px] font-medium mt-3 text-white">
                                                            Thông tin cá nhân
                                                        </div>
                                                    </Link>
                                                    <Link to="/profile/me/change-info/password" className="bg-gradient-to-r from-[#a1f0f0] to-[#79a3f1] pt-5 pb-7 text-center rounded-[5px] cursor-pointer card-item">
                                                        <div className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] mx-auto">
                                                            <img src={key_icon} alt="" />
                                                        </div>
                                                        <div className="text-[20px] md:text-[24px] font-medium mt-3 text-white">
                                                            Mật khẩu
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    ></Route>
                                    <Route
                                        exact
                                        path={`/profile/me/change-info/personal`}
                                        render={() => (
                                            <ChangePersonal profile={profileDetail} />
                                        )}
                                    >
                                    </Route>
                                    <Route
                                        exact
                                        path={`/profile/me/change-info/password`}
                                        render={() =>
                                            <ChangePassword profile={profileDetail} />
                                        }
                                    >
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
