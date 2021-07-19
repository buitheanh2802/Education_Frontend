import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/media/pictures/logo.png';
import Avatar from '../../assets/media/pictures/avatar.png';
import IconBell from '../../assets/media/icons/bell.svg';
import IconList from '../../assets/media/icons/list.svg';
import IconClose from '../../assets/media/icons/cancel.svg';

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <header className="py-[10px] bg-[#000000] bg-opacity-80 px-[15px]">
            <div className="flex justify-between items-center container mx-auto">
                <Link to="/"><img src={Logo} alt="Eduford.com" /></Link>
                <button onClick={() => setMenu(true)} className="xl:hidden"><img className="w-[35px] h-[35px]" src={IconList} alt="" /></button>
                <ul className={`${menu ? "block bg-[#000000] absolute top-0 right-0 bottom-0 left-0" : "hidden"} text-[18px] text-[#ffffff] xl:flex items-center`}>
                    <li className="flex xl:hidden justify-between py-[10px] px-[15px]">
                        <Link to="/"><img src={Logo} alt="Eduford.com" /></Link>
                        <button onClick={() => setMenu(false)}><img className="w-[35px] h-[35px]" src={IconClose} alt="" /></button>
                    </li>
                    <li className="px-[15px]"><NavLink activeClassName="text-[#ff0000]" to="/">Trang chủ</NavLink></li>
                    <li className="px-[15px]"><NavLink activeClassName="text-[#ff0000]" to="/khoa-hoc">Khóa học</NavLink></li>
                    <li className="px-[15px]"><NavLink activeClassName="text-[#ff0000]" to="/thuc-hanh">Thực hành</NavLink></li>
                    <li className="px-[15px] menu-before relative">
                        <NavLink to="/dang-nhap">Đăng nhập</NavLink>
                        <button className="hidden">
                            <img className="w-[35px] h-[35px]" src={IconBell} alt="thông báo" />
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