import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';

const Header = () => {
    const { pathname } = useLocation();
    const { profile } = useSelector(state => state.Auth);
    const [isMenu, setIsMenu] = useState(false);

    return (
        <div className={`${pathname !== path.HOME ? 'bg-white text-gray-800 shadow-sm' : 'pt-[15px] border-transparent text-white'} border-b border-solid duration-300 fixed top-0 left-0 right-0 z-[9999]`}>
            <nav className="container mx-auto select-none flex justify-between items-center py-[10px]">
                <h1 className="mr-[80px]">
                    <Link className="flex items-center" to={path.HOME}>
                        <Icon.Logo className="sm:w-[30px] w-[24px]" />
                        <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">DevStar</span>
                    </Link>
                </h1>
                <button onClick={() => setIsMenu(true)} className="lg:hidden"><Icon.Menu className={`fill-current w-[25px] sm:w-[25px] ${pathname === path.HOME ? "text-white" : "text-black"}`} /></button>
                <div className={`${isMenu ? "ml-0 sm:ml-[50%] md:ml-[60%]" : "ml-[100%] lg:ml-0"} menu_top lg:flex w-full lg:justify-between font-medium text-[14px] sm:text-[16px] lg:transform lg:translate-y-[2px]`}>
                    <ul className="flex justify-between lg:hidden  py-[10px] border-b px-[15px] lg:px-0">
                        <Link className="flex items-center" to={path.HOME}>
                            <Icon.Logo className="w-[24px]" />
                            <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">DevStar</span>
                        </Link>
                        <button onClick={() => setIsMenu(false)}> <Icon.Close className="w-[20px]" /> </button>
                    </ul>
                    <ul className="lg:flex lg:gap-[20px] px-[15px] lg:px-0 pt-[10px] lg:pt-0">
                        <li className="py-[10px] lg:py-0"><NavLink onClick={() => setIsMenu(false)} activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]" className="hover:text-blue-600 duration-300" to="/cours">Khóa học</NavLink></li>
                        <li className="py-[10px] lg:py-0"><NavLink onClick={() => setIsMenu(false)} activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]" className="hover:text-blue-600 duration-300" to={path.POSTS}>Bài viết</NavLink></li>
                        <li className="py-[10px] lg:py-0"><NavLink onClick={() => setIsMenu(false)} activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]" className="hover:text-blue-600 duration-300" to={path.QUESTIONS}>Hỏi đáp</NavLink></li>
                        <li className="py-[10px] lg:py-0"><NavLink onClick={() => setIsMenu(false)} activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]" className="hover:text-blue-600 duration-300" to="/groups">Tổ chức</NavLink></li>
                        <li className="py-[10px] lg:py-0"><NavLink onClick={() => setIsMenu(false)} activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]" className="hover:text-blue-600 duration-300" to="/about">Giới thiệu</NavLink></li>
                    </ul>

                    {profile
                        ? <ul className="lg:flex lg:gap-[5px] px-[15px] lg:px-0 items-center">
                            <li className={`px-[15px] menu-after relative `}>
                                <i className={pathname === path.HOME ? 'text-white hover:text-[#51ffb9]' : 'text-gray-500 hover:text-blue-600'}><Icon.Bell className="cursor-pointer w-[20px] h-[20px] fill-current" /></i>
                            </li>
                            <li className={`pl-[15px] relative`}>
                                {(profile?.avatar?.avatarUrl?.length > 0) ? <p className="absolute top-1/2 transform -translate-y-1/2 border border-gray-300 cursor-pointer select-none w-[30px] h-[30px] rounded-full bg-center bg-cover" style={{ backgroundImage: `url(${profile?.avatar?.avatarUrl})` }}></p>
                                    : <p className="flex justify-center items-center text-gray-500 absolute top-1/2 transform -translate-y-1/2 border border-gray-300 bg-gray-200 cursor-pointer select-none w-[30px] h-[30px] rounded-full"> {profile?.fullname?.slice(0, 1)?.toUpperCase()} </p>}
                            </li>
                        </ul>
                        : <ul className="lg:flex lg:gap-[5px] px-[15px] lg:px-0">
                            <li className="py-[10px] lg:py-0"><Link className={`lg:px-[15px] lg:py-[5px] lg:border lg:border-solid lg:rounded duration-300 lg:border-[#fff0] ${pathname === path.HOME ? "hover:text-[#51ffb9]" : "lg:text-gray-800 lg:hover:text-blue-600"}`} to={path.LOGIN}>Đăng nhập</Link></li>
                            <li className="py-[10px] lg:py-0"><Link className={`lg:px-[15px] lg:py-[5px] lg:border lg:border-solid lg:rounded duration-300 ${pathname === path.HOME ? "lg:border-white hover:border-[#67d4a8] hover:text-[#fff] hover:bg-[#67d4a8]" : "lg:border-[#1273eb] lg:text-gray-800 hover:text-[#fff] hover:bg-blue-600"}`} to={path.REGISTER}>Đăng ký</Link></li>
                        </ul>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header
