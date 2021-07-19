import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/media/pictures/logo.png';
import IconMenu from '../../assets/media/icons/menu.svg';
import IconClose from '../../assets/media/icons/close.svg';
import IconCourse from '../../assets/media/icons/course.svg';
import IconHome from '../../assets/media/icons/home.svg';
import IconPractice from '../../assets/media/icons/practice.svg';
import IconLogin from '../../assets/media/icons/login.svg';
import IconSignUp from '../../assets/media/icons/sign-up.svg';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="py-[10px] px-[15px] mt-[10px]">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/"><img className="sm:w-full w-[80%]" src={Logo} alt="Education.com" /></Link>
                <button onClick={() => setShowMenu(true)} className="lg:hidden"><img className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" src={IconMenu} alt="" /></button>
                <ul className={`${showMenu ? 'block' : 'hidden'} subMenu lg:flex lg:text-white text-[14px] sm:text-[17px]`}>
                    <li className="px-[15px] flex lg:hidden justify-between items-center">
                        <Link to="/"><img className="sm:w-full w-[80%]" src={Logo} alt="Education.com" /></Link>
                        <button onClick={() => setShowMenu(false)} className="lg:hidden"><img className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" src={IconClose} alt="" /></button>
                    </li>
                    <li className="px-[15px]"><NavLink to="/" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconHome} alt="" /> Trang chủ</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/khoa-hoc" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconCourse} alt="" /> Khóa học</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/thuc-hanh" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconPractice} alt="" /> Thực hành</NavLink></li>
                    <li className="px-[15px] menu-after relative"><NavLink to="/dang-nhap" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconLogin} alt="" /> Đăng nhập</NavLink></li>
                    <li className="pl-[15px]"><NavLink to="/dang-ky" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconSignUp} alt="" /> Đăng ký</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
