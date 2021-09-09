import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';
import Notification from './Components/Notification';
import Auth from './Components/Auth';

const Header = () => {
    const { pathname } = useLocation();
    const [isMenu, setIsMenu] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const { profile } = useSelector(state => state.Auth);

    return (
        <>
            {isNotification && <Notification setIsNotification={setIsNotification} className="z-[99999] fixed top-0 left-0 bottom-0 right-0 lg:hidden" />}
            <div className={`${pathname !== path.HOME ? 'bg-white text-gray-800 shadow-sm' : 'pt-[15px] border-transparent text-white'} border-b border-solid duration-300 fixed top-0 left-0 right-0 z-[9999]`}>
                <nav className="container mx-auto select-none flex justify-between items-center py-[10px]">
                    <h1 className="mr-[80px]">
                        <Link
                            onClick={() => {
                                setIsMenu(false)
                                setIsPopup(false)
                            }}
                            className="flex items-center" to={path.HOME}>
                            <Icon.Logo className="sm:w-[30px] w-[24px]" />
                            <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">DevStar</span>
                        </Link>
                    </h1>
                    <div className="flex items-center gap-[15px]">
                        {profile && <i onClick={() => setIsNotification(!isNotification)} className={`${pathname === path.HOME ? 'text-white hover:text-[#51ffb9]' : 'text-gray-500 hover:text-blue-600'} lg:hidden`}><Icon.Bell className="cursor-pointer w-[20px] h-[20px] fill-current" /></i>}
                        <button onClick={() => setIsMenu(true)} className="lg:hidden"><Icon.Menu className={`fill-current w-[20px] sm:w-[25px] ${pathname === path.HOME ? "text-white" : "text-black"}`} /></button>
                    </div>
                    <div className={`${isMenu ? "ml-0 sm:ml-[50%] md:ml-[60%]" : "ml-[100%] lg:ml-0"} menu_top lg:flex w-full lg:justify-between font-medium text-[14px] sm:text-[16px] lg:transform lg:translate-y-[2px]`}>
                        <ul className="flex justify-between lg:hidden  py-[10px] border-b px-[15px] lg:px-0">
                            <Link
                                onClick={() => {
                                    setIsMenu(false)
                                    setIsPopup(false)
                                }}
                                className="flex items-center" to={path.HOME}>
                                <Icon.Logo className="w-[24px]" />
                                <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">DevStar</span>
                            </Link>
                            <button onClick={() => setIsMenu(false)}> <Icon.Close className="w-[20px]" /> </button>
                        </ul>
                        <ul className="lg:flex lg:gap-[20px] px-[15px] lg:px-0 pt-[10px] lg:pt-0">
                            <li className="py-[10px] lg:py-0">
                                <NavLink
                                    onClick={() => {
                                        setIsMenu(false)
                                        setIsPopup(false)
                                    }}
                                    activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                                    className="hover:text-blue-600 duration-300 flex items-center"
                                    to="/cours">
                                    <Icon.Course className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                                    Khóa học
                                </NavLink>
                            </li>
                            <li className="py-[10px] lg:py-0">
                                <NavLink
                                    onClick={() => {
                                        setIsMenu(false)
                                        setIsPopup(false)
                                    }}
                                    activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                                    className="hover:text-blue-600 duration-300 flex items-center"
                                    to="/posts">
                                    <Icon.Pen className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                                    Bài viết
                                </NavLink>
                            </li>
                            <li className="py-[10px] lg:py-0">
                                <NavLink
                                    onClick={() => {
                                        setIsMenu(false)
                                        setIsPopup(false)
                                    }}
                                    activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                                    className="hover:text-blue-600 duration-300 flex items-center"
                                    to="/questions">
                                    <Icon.Questions className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                                    Hỏi đáp
                                </NavLink>
                            </li>
                            <li className="py-[10px] lg:py-0">
                                <NavLink
                                    onClick={() => {
                                        setIsMenu(false)
                                        setIsPopup(false)
                                    }}
                                    activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                                    className="hover:text-blue-600 duration-300 flex items-center"
                                    to="/groups">
                                    <Icon.Group className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                                    Tổ chức
                                </NavLink>
                            </li>
                            <li className="py-[10px] lg:py-0">
                                <NavLink
                                    onClick={() => {
                                        setIsMenu(false)
                                        setIsPopup(false)
                                    }}
                                    activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                                    className="hover:text-blue-600 duration-300 flex items-center"
                                    to="/about">
                                    <Icon.About className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                                    Giới thiệu
                                </NavLink>
                            </li>
                        </ul>

                        <Auth isPopup={isPopup} setIsMenu={setIsMenu} setIsPopup={setIsPopup} />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
