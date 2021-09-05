import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { path } from '../../constants'
import { Icon } from '../Icon'

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <div className={`${pathname !== path.HOME ? 'bg-white text-gray-800 shadow-sm' : 'pt-[15px] border-transparent text-white'} border-b border-solid duration-300 fixed top-0 left-0 right-0 z-[9999]`}>
            <nav className="container mx-auto flex justify-between items-center select-none">
                <div className="grid grid-cols-3 py-[10px]">
                    <h1>
                        <Link className="flex items-center" to={path.HOME}>
                            <Icon.Logo className="sm:w-[30px] w-[24px]" />
                            <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">DevStar</span>
                        </Link>
                    </h1>
                    <ul className="flex my-auto  col-span-2 font-medium text-[14px] sm:text-[16px]">
                        <li className="mr-[20px]">
                            <NavLink to="/cours" activeClassName="text-blue-700 relative after:bottom-[-17px] after:right-0 after:bg-[#1273eb] after:absolute after:w-full after:h-[2px]">Khóa học</NavLink>
                        </li>
                        <li className="mr-[20px]">
                            <NavLink to="/posts" activeClassName="text-blue-700 relative after:bottom-[-17px] after:right-0 after:bg-[#1273eb] after:absolute after:w-full after:h-[2px]">Bài viết</NavLink>
                        </li>
                        <li className="mr-[20px]">
                            <NavLink to="/questions" activeClassName="text-blue-700 relative after:bottom-[-17px] after:right-0 after:bg-[#1273eb] after:absolute after:w-full after:h-[2px]">Hỏi đáp</NavLink>
                        </li>
                        <li className="mr-[20px]">
                            <NavLink to="/blog" activeClassName="text-blue-700 relative after:bottom-[-17px] after:right-0 after:bg-[#1273eb] after:absolute after:w-full after:h-[2px]">Tổ chức</NavLink>
                        </li>
                        <li className="mr-[20px]">
                            <NavLink to="/about" activeClassName="text-blue-700 relative after:bottom-[-17px] after:right-0 after:bg-[#1273eb] after:absolute after:w-full after:h-[2px]">Giới thiệu</NavLink>
                        </li>
                    </ul>
                </div>
                <ul className="flex font-medium gap-[5px]">
                    <li> <NavLink to="/auth/login" activeClassName="border-[#1273eb] text-blue-700" className="border border-solid border-white hover:border-[#1273eb] hover:text-blue-700 duration-300 px-[15px] py-[5px] rounded-[5px]">Đăng nhập</NavLink> </li>
                    <li> <NavLink to="/auth/register" activeClassName="border-[#1273eb] text-blue-700" className="border border-solid border-white hover:border-[#1273eb] hover:text-blue-700 duration-300 px-[15px] py-[5px] rounded-[5px]">Đăng ký</NavLink> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
