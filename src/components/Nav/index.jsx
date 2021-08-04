import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { path } from '../../constants';
import LogoWhite from '../../assets/media/pictures/logo-white.svg';
import LogoBlack from '../../assets/media/pictures/logo-black.svg';
import IconMenu from '../../assets/media/icons/menu.svg';
import IconClose from '../../assets/media/icons/close.svg';
import IconCourse from '../../assets/media/icons/course.svg';
import IconHome from '../../assets/media/icons/home.svg';
import IconPractice from '../../assets/media/icons/practice.svg';
import IconLogin from '../../assets/media/icons/login.svg';
import IconSignUp from '../../assets/media/icons/sign-up.svg';

const Nav = () => {
    const { pathname } = useLocation();
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {
        function fixedMEnu() {
            window.addEventListener('scroll', () => {
                const menu = document.querySelector('.menu');
                (pathname === path.HOME) ? (window.pageYOffset > 200)
                    ? menu.classList.add('fixed__menu')
                    : menu.classList.remove('fixed__menu')
                    : menu.classList.add('fixed__menu')
            })
        }
        fixedMEnu();
        
    }, [pathname])

    return (
        <nav className={`z-[9999] menu px-[15px] sm:px-[35px] pt-[20px] pb-[5px] duration-300 fixed top-0 left-0 right-0 ${pathname !== path.HOME && 'fixed__menu'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to={path.HOME}><img className="w-[100px] lg:w-[120px] 2xl:w-[140px]" src={LogoWhite} alt="Education.com" /></Link>
                <button onClick={() => setIsMenu(true)} className="lg:hidden"><img className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" src={IconMenu} alt="menu" /></button>
                <ul className={`${isMenu ? 'block' : 'hidden'}  subMenu lg:flex lg:text-white text-[14px] sm:text-[17px] 2xl:text-[20px] items-center`}>
                    <li className="px-[15px] flex lg:hidden justify-between items-center">
                        <Link to="/"><img className="w-[100px] lg:w-[120px] 2xl:w-[140px]" src={LogoBlack} alt="Education.com" /></Link>
                        <button onClick={() => setIsMenu(false)} className="lg:hidden"><img className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" src={IconClose} alt="close" /></button>
                    </li>
                    <li className="px-[15px]"><NavLink exact to="/" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconHome} alt="trang chủ" /> Trang chủ</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/khoa-hoc" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconCourse} alt="khóa học" /> Khóa học</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/thuc-hanh" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconPractice} alt="thục hành" /> Thực hành</NavLink></li>
                    <li className="px-[15px] menu-after relative"><Link to="/dang-nhap" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconLogin} alt="đăng nhập" /> Đăng nhập</Link></li>
                    <li className={`pl-[15px] relative`}>
                        <Link to="/dang-ky" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconSignUp} alt="đăng ký" /> Đăng ký</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
