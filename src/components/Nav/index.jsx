import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoWhite from '../../assets/media/pictures/logo-white.svg';
import LogoBlack from '../../assets/media/pictures/logo-black.svg';
import IconMenu from '../../assets/media/icons/menu.svg';
import IconClose from '../../assets/media/icons/close.svg';
import IconCourse from '../../assets/media/icons/course.svg';
import IconHome from '../../assets/media/icons/home.svg';
import IconPractice from '../../assets/media/icons/practice.svg';
import IconLogin from '../../assets/media/icons/login.svg';
import IconSignUp from '../../assets/media/icons/sign-up.svg';
import { path } from '../../constants';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        function fixedMEnu() {
            const menu = document.querySelector('.menu');
            window.addEventListener('scroll', () => {
                (window.pageYOffset > 200)
                    ? menu.classList.add('fixed__menu')
                    : menu.classList.remove('fixed__menu')
            })
        }
        fixedMEnu();
    }, [pathname])
    return (
        <nav className={`menu px-[15px] sm:px-[35px] z-[9999] ${pathname === path.HOME ? 'mt-[10px] py-[10px]' : 'py-[5px] bg-gray-900'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/"><img className="w-[100px] lg:w-[120px] 2xl:w-[140px]" src={LogoWhite} alt="Education.com" /></Link>
                <button onClick={() => setShowMenu(true)} className="lg:hidden"><img className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" src={IconMenu} alt="" /></button>
                <ul className={`${showMenu ? 'block' : 'hidden'} subMenu lg:flex lg:text-white text-[14px] sm:text-[17px] 2xl:text-[20px]`}>
                    <li className="px-[15px] flex lg:hidden justify-between items-center">
                        <Link to="/"><img className="w-[100px] lg:w-[120px] 2xl:w-[140px]" src={LogoBlack} alt="Education.com" /></Link>
                        <button onClick={() => setShowMenu(false)} className="lg:hidden"><img className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" src={IconClose} alt="" /></button>
                    </li>
                    <li className="px-[15px]"><NavLink exact to="/" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconHome} alt="trang chủ" /> Trang chủ</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/khoa-hoc" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconCourse} alt="khóa học" /> Khóa học</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/thuc-hanh" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconPractice} alt="thục hành" /> Thực hành</NavLink></li>
                    <li className="px-[15px] menu-after relative"><Link to="/dang-nhap" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconLogin} alt="đăng nhập" /> Đăng nhập</Link></li>
                    <li className="pl-[15px]"><Link to="/dang-ky" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconSignUp} alt="đăng ký" /> Đăng ký</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
