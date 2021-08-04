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
import UrlAvatar from '../../assets/media/pictures/avatar.png';
import { useSelector } from 'react-redux';

const Nav = () => {
    const { isUser, profile } = useSelector(state => state.user);
    const [showMenu, setShowMenu] = useState(false);
    const { pathname } = useLocation();
    const [isPopup, setIsPopup] = useState(false);

    console.log(profile)

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
        <nav className={`menu px-[15px] sm:px-[35px] z-[9999] ${pathname === path.HOME ? 'pt-[20px] pb-[10px]' : 'py-[5px] bg-gray-900'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/"><img className="w-[100px] lg:w-[120px] 2xl:w-[140px]" src={LogoWhite} alt="Education.com" /></Link>
                <button onClick={() => setShowMenu(true)} className="lg:hidden"><img className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" src={IconMenu} alt="" /></button>
                <ul className={`${showMenu ? 'block' : 'hidden'} subMenu lg:flex lg:text-white text-[14px] sm:text-[17px] 2xl:text-[20px] items-center`}>
                    <li className="px-[15px] flex lg:hidden justify-between items-center">
                        {isUser ? <Link to='/'><div className="flex items-center"> <i className="mr-[10px] cursor-pointer bg-center bg-contain bg-no-repeat w-[30px] h-[30px] rounded-full block" style={{ backgroundImage: `url(${UrlAvatar})` }}></i>
                            <p className="font-medium">{profile.fullname}</p></div>
                        </Link> : <Link to="/"><img className="w-[100px] lg:w-[120px] 2xl:w-[140px]" src={LogoBlack} alt="Education.com" /></Link>}
                        <button onClick={() => setShowMenu(false)} className="lg:hidden"><img className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" src={IconClose} alt="" /></button>
                    </li>
                    <li className="px-[15px]"><NavLink exact to="/" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconHome} alt="trang chủ" /> Trang chủ</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/khoa-hoc" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconCourse} alt="khóa học" /> Khóa học</NavLink></li>
                    <li className="px-[15px]"><NavLink to="/thuc-hanh" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconPractice} alt="thục hành" /> Thực hành</NavLink></li>
                    <li className="px-[15px] menu-after relative">
                        {isUser ? <Link to="/dang-xuat" activeClassName="text-[#f44336]" className="flex items-center lg:hidden"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconLogin} alt="đăng xuất" /> Đăng xuất</Link>
                            : <Link to="/dang-nhap" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconLogin} alt="đăng nhập" /> Đăng nhập</Link>}

                        {isUser && <p className="hidden lg:block">Thông báo</p>}
                    </li>
                    <li className={`pl-[15px] relative ${isUser ? 'lg:block hidden' : 'block'}`}>
                        {isUser ? <i onClick={() => setIsPopup(!isPopup)} className="cursor-pointer bg-center bg-contain bg-no-repeat w-[30px] h-[30px] rounded-full block" style={{ backgroundImage: `url(${UrlAvatar})` }}></i> :
                            <Link to="/dang-ky" activeClassName="text-[#f44336]" className="flex items-center"><img className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" src={IconSignUp} alt="đăng ký" /> Đăng ký</Link>}
                        {isPopup && <div className='z-10 absolute top-full right-0 w-[200px] pt-[10px]'>
                            <i className="z-[-1] absolute top-[5px] right-[10px] transform w-[10px] h-[10px] bg-white rotate-45"></i>
                            <ul className="bg-white text-black rounded-[5px] text-[15px] lg:text-[16px]">
                                <li className="hover:bg-blue-300 rounded-t-[5px]"><Link className="px-[20px] py-[5px] block" to="/profile">Thông tin cá nhân</Link></li>
                                <li className="hover:bg-blue-300"><Link className="px-[20px] py-[5px] block" to="/profile">Trang quản trị</Link></li>
                                <li className="hover:bg-blue-300"><Link className="px-[20px] py-[5px] block" to="/profile">Cài đặt</Link></li>
                                <li className="hover:bg-blue-300 rounded-b-[5px]"><Link className="px-[20px] py-[5px] block" to="/profile">Đăng xuất</Link></li>
                            </ul>
                        </div>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
