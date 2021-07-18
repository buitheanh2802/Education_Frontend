import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/media/pictures/logo.png';
import Avatar from '../../assets/media/pictures/avatar.png';
import Bell from '../../assets/media/icons/bell.svg';

const Header = () => {
    return (
        <header className="py-[10px bg-[#000000] opacity-80">
            <div className="flex justify-between items-center container mx-auto">
                <Link to="/"><img src={Logo} alt="Eduford.com" /></Link> 
                <ul className="text-[18px] text-[#ffffff] flex items-center">
                    <li className="px-[15px]"><NavLink activeClassName="text-[#ff0000]" to="/">Trang chủ</NavLink></li>
                    <li className="px-[15px]"><NavLink activeClassName="text-[#ff0000]" to="/khoa-hoc">Khóa học</NavLink></li>
                    <li className="px-[15px]"><NavLink activeClassName="text-[#ff0000]" to="/thuc-hanh">Thực hành</NavLink></li>
                    <li className="px-[15px]">
                        <NavLink to="/dang-nhap">Đăng nhập</NavLink>
                        <button className="hidden">
                            <img className="w-[35px] h-[35px]" src={Bell} alt="thông báo" />
                        </button>
                    </li>
                    <li className="pl-[15px]">
                        <NavLink to="/dang-ky">Đăng ký</NavLink>
                        <button className="hidden">
                            <img className="w-[35px] h-[35px] rounded-full" src={Avatar} alt="Nguyễn Thành Đạt" />
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;