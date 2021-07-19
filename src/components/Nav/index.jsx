import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/media/pictures/logo.png';

const Nav = () => {
    return (
        <nav className="py-[10px] px-[15px] mt-[10px]">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/"><img src={Logo} alt="Education.com" /></Link>
                <ul className="flex text-white text-[17px]">
                    <li className="px-[15px]"><NavLink to="/" activeClassName="text-[#f44336]">Trang chủ</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/khoa-hoc" activeClassName="text-[#f44336]">Khóa học</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/thuc-hanh" activeClassName="text-[#f44336]">Thực hành</NavLink></li>
                    <li className="px-[15px] menu-after relative"><NavLink to="/dang-nhap" activeClassName="text-[#f44336]">Đăng nhập</NavLink></li>
                    <li className="pl-[15px]"><NavLink to="/dang-ky" activeClassName="text-[#f44336]">Đăng ký</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
