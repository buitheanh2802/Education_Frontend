import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';

const Auth = ({ isPopup, setIsPopup, setIsMenu }) => {
    const { pathname } = useLocation();
    const { profile } = useSelector(state => state.Auth);

    return (
        <>
            {profile
                ?
                <>
                    <ul className="mx-[15px] border-t lg:hidden">
                        <li className="py-[10px] lg:py-0">
                            <NavLink
                                onClick={() => {
                                    setIsMenu(false)
                                    setIsPopup(false)
                                }}
                                activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                                className="hover:text-blue-600 duration-300 flex items-center"
                                to="/admin">
                                <Icon.Admin className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                                Trang quản trị
                            </NavLink>
                        </li>
                        <li className="cursor-pointer py-[10px] flex items-center text-red-600"><Icon.LogOut className="w-[20px] h-[20px] fill-current" /> <p className="ml-[10px]">Đăng xuất</p></li>
                    </ul>
                    <ul className="lg:flex lg:gap-[5px] px-[15px] lg:px-0 items-center">
                        <li className="px-[15px] menu-after relative hidden lg:block">
                            <i className={pathname === path.HOME ? 'text-white hover:text-[#51ffb9]' : 'text-gray-500 hover:text-blue-600'}><Icon.Bell className="cursor-pointer w-[20px] h-[20px] fill-current" /></i>
                        </li>
                        <li className='pl-[15px] relative hidden lg:block'>
                            {(profile?.avatar?.avatarUrl?.length > 0)
                                ? <p onClick={() => setIsPopup(!isPopup)} className="absolute top-1/2 transform -translate-y-1/2 border border-gray-300 cursor-pointer select-none w-[30px] h-[30px] rounded-full bg-center bg-cover" style={{ backgroundImage: `url(${profile?.avatar?.avatarUrl})` }} alt={profile?.fullname} ></p>
                                : <p onClick={() => setIsPopup(!isPopup)} className="flex justify-center items-center text-gray-500 absolute top-1/2 transform -translate-y-1/2 border border-gray-300 bg-gray-200 cursor-pointer select-none w-[30px] h-[30px] rounded-full"> {profile?.fullname?.slice(0, 1)?.toUpperCase()} </p>}
                            {isPopup && <div className="absolute top-[calc(100%+15px)] right-[-30px] w-[200px] pt-[12px]">
                                <span className="absolute w-[10px] h-[10px] block border-t border-l bg-white border-gray-300 transform rotate-[45deg] -translate-y-1/2 right-[10px]"></span>
                                <ul className="bg-white text-[#333] text-[15px] rounded-[3px] font-normal p-[5px] shadow-lg border border-solid border-gray-300">
                                    <Link onClick={() => setIsPopup(!isPopup)} to={path.PROFILE_ME}><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]"><Icon.Profile className="w-[20px] h-[20px] fill-current" /> <p className="ml-[10px]">Thông tin cá nhân</p></li></Link>
                                    <Link onClick={() => setIsPopup(!isPopup)} to={path.ADMIN}><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]"><Icon.Admin className="w-[20px] h-[20px] fill-current" /> <p className="ml-[10px]">Trang quản trị</p></li></Link>
                                    <Link onClick={() => setIsPopup(!isPopup)} to={path.SETTING}><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]"><Icon.Setting className="w-[20px] h-[20px] fill-current" /> <p className="ml-[10px]">Cài đặt</p></li></Link>
                                    <li className="cursor-pointer px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-red-600"><Icon.LogOut className="w-[20px] h-[20px] fill-current" /> <p className="ml-[10px]">Đăng xuất</p></li>
                                </ul>
                            </div>}
                        </li>
                    </ul>
                </>
                : <ul className="lg:flex lg:gap-[5px] px-[15px] lg:px-0">
                    <li className="py-[10px] lg:py-0"><Link className={`lg:px-[15px] lg:py-[5px] lg:border lg:border-solid lg:rounded duration-300 lg:border-[#fff0] ${pathname === path.HOME ? "hover:text-[#51ffb9]" : "lg:text-gray-800 lg:hover:text-blue-600"}`} to={path.LOGIN}>Đăng nhập</Link></li>
                    <li className="py-[10px] lg:py-0"><Link className={`lg:px-[15px] lg:py-[5px] lg:border lg:border-solid lg:rounded duration-300 ${pathname === path.HOME ? "lg:border-white hover:border-[#67d4a8] hover:text-[#fff] hover:bg-[#67d4a8]" : "lg:border-[#1273eb] lg:text-gray-800 hover:text-[#fff] hover:bg-blue-600"}`} to={path.REGISTER}>Đăng ký</Link></li>
                </ul>
            }
        </>
    )
}

export default Auth
