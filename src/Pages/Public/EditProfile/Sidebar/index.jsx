import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "src/Components/Icon";

const Sidebar = () => {
    const [BoxInfo, setBoxInfo] = useState(false);
    const [BoxSecurity, setBoxSecurity] = useState(false);
    return (
        <div className="bg-white h-full shadow-lg rounded-[5px]">
            <div className="w-full relative">
                <NavLink
                    to="/profile/me/change-info"
                    className="flex items-center py-[17px] hover:bg-blue-100 px-[20px]">
                    <Icon.Home className="fill-current w-[25px] text-gray-400 " />
                    <p className="ml-3 text-[15px] hidden lg:block">Trang Chủ</p>
                </NavLink>
            </div>
            <div className="w-full relative ">
                <div
                    className="flex items-center justify-between py-[17px] hover:bg-blue-100 px-[20px]"
                    onClick={() => setBoxInfo(!BoxInfo)}
                >
                    <div className="flex items-center">
                        <Icon.Card className="fill-current w-[23px] text-gray-400" />
                        <p className="ml-3 text-[15px] hidden lg:block select-none">
                            Thông Tin
                        </p>
                    </div>
                    <Icon.ArrowDown
                        className={
                            BoxInfo
                                ? "fill-current w-[12px] text-gray-400 hidden lg:block rotate-180"
                                : "fill-current w-[12px] text-gray-400  hidden lg:block"
                        }
                    />
                </div>
                <ul
                    className={
                        BoxInfo
                            ? "block w-[200px] lg:w-full  rounded-r-[5px] lg:rounded-[0px] absolute lg:static top-0 left-[100%] bg-white z-10"
                            : "hidden "
                    }
                >
                    <NavLink
                        to="/profile/me/change-info/personal"
                        className="px-[15px] lg:px-[30px] xl:px-[45px] flex items-center hover:bg-blue-100 py-[13px]"
                    >
                        <Icon.User className="fill-current w-[18px] text-gray-400" />
                        <span className="ml-3 text-[15px] select-none">
                            Thông Tin Cá Nhân
                        </span>
                    </NavLink>
                </ul>
            </div>
            <div className="w-full relative">
                <div
                    className="flex items-center justify-between py-[17px] hover:bg-blue-100 px-[20px]"
                    onClick={() => setBoxSecurity(!BoxSecurity)}
                >
                    <div className="flex items-center">
                        <Icon.Shield className="fill-current w-[25px] text-gray-400" />
                        <p className="ml-3 text-[15px] hidden lg:block select-none">
                            Bảo Mật
                        </p>
                    </div>
                    <Icon.ArrowDown
                        className={
                            BoxSecurity
                                ? "fill-current w-[12px] text-gray-400 hidden lg:block rotate-180 "
                                : "fill-current w-[12px] text-gray-400 hidden lg:block"
                        }
                    />
                </div>
                <ul
                    className={
                        BoxSecurity
                            ? " block w-[200px] lg:w-full  rounded-r-[3px] lg:rounded-[0px] absolute lg:static top-0 left-[100%] bg-white z-10"
                            : " hidden"
                    }
                >
                    <NavLink to="/profile/me/change-info/password"
                        className="px-[15px] lg:px-[30px] xl:px-[45px] flex items-center justify-center lg:justify-start hover:bg-blue-100 py-[13px]">
                        <Icon.Key className="fill-current w-[22px] text-gray-400" />
                        <span className="ml-3 text-[15px] select-none">
                            Mật Khẩu
                        </span>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;