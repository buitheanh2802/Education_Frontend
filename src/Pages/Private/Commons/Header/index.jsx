import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';
import { ActionLogout } from 'src/Redux/Actions/Auth.action';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { profile, actionLoading } = useSelector(state => state.Auth);
    const [isPopup, setIsPopup] = useState(false);
    return (
        <header className="w-full bg-white items-center h-16 rounded-xl z-40">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div className="container relative left-0 z-50 flex w-3/4 h-full invisible">
                        <div className="relative flex items-center w-full lg:w-64 h-full group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-0 z-20 w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 block"
                                viewBox="0 0 20 20"
                            >
                                <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"></path>
                            </svg>
                            <input type="text"
                                className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 text-gray-400 aa-input"
                                placeholder="Search" />
                        </div>
                    </div>
                    <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                        <div className="relative">
                            {(profile?.avatar?.avatarUrl?.length > 0)
                                ? <p onClick={() => setIsPopup(!isPopup)} className="right-0 absolute top-1/2 transform -translate-y-1/2 border border-gray-300 cursor-pointer select-none w-[30px] h-[30px] rounded-full bg-center bg-cover" style={{ backgroundImage: `url(${profile?.avatar?.avatarUrl})` }} alt={profile?.fullname} ></p>
                                : <p onClick={() => setIsPopup(!isPopup)} className="right-0 flex justify-center items-center text-gray-500 absolute top-1/2 transform -translate-y-1/2 border border-gray-300 bg-gray-200 cursor-pointer select-none w-[30px] h-[30px] rounded-full"> {profile?.fullname?.slice(0, 1)?.toUpperCase()} </p>}
                            {isPopup && <div className="absolute top-[calc(100%+15px)] right-0 w-[200px] pt-[12px]">
                                <span className="absolute w-[10px] h-[10px] block border-t border-l bg-white border-gray-300 transform rotate-[45deg] -translate-y-1/2 right-[10px]"></span>
                                <ul className="bg-white text-[#333] text-[15px] rounded-[3px] font-normal p-[5px] shadow-lg border border-solid border-gray-300">
                                    <Link onClick={() => setIsPopup(!isPopup)} to={path.PROFILE_ME}><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]"><Icon.Profile className="w-[20px] h-[20px] fill-current" /> <p className="ml-[10px]">Thông tin cá nhân</p></li></Link>
                                    {profile?.role === "admin" && <Link onClick={() => setIsPopup(!isPopup)} to={path.HOME}><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]"><Icon.Home className="w-[20px] h-[20px] fill-current" /> <p className="ml-[10px]">Người dùng</p></li></Link>}
                                    <Link onClick={() => setIsPopup(!isPopup)} to={path.SETTING}><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]"><Icon.Setting className="w-[20px] h-[20px] fill-current" /> <p className="ml-[10px]">Cài đặt</p></li></Link>
                                    <li
                                        onClick={async () => {
                                            await dispatch(ActionLogout())
                                            history.push(path.HOME)
                                        }}
                                        className="cursor-pointer px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-red-600">{actionLoading ? <Icon.Loading className="w-[20px] h-[20px] fill-current" /> : <Icon.LogOut className="w-[20px] h-[20px] fill-current" />}  <p className="ml-[10px]">Đăng xuất</p></li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
