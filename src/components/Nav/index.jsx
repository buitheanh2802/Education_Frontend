import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { path } from '../../constants';
import LogoWhite from '../../assets/media/pictures/logo-white.svg';
import LogoBlack from '../../assets/media/pictures/logo-black.svg';
import urlAvatar from '../../assets/media/pictures/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogin } from '../../redux/actions/user.action';
import {
    IconSignUp, IconMenu, IconBell,
    IconAdmin, IconLogOut, IconProfile,
    IconSetting, IconHome, IconCourse,
    IconPractice, IconClose
} from '../atoms/Icon';
import Notification from '../Notification';

const Nav = () => {
    const dispatch = useDispatch();
    const total = useSelector(state => state.notification.total)
    const user = useSelector(state => state.user);
    const { pathname } = useLocation();
    const [isMenu, setIsMenu] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    useEffect(() => {
        function fixedMenu() {
            window.addEventListener('scroll', () => {
                const menu = document.querySelector('.menu');
                (pathname === path.HOME) ? (window.pageYOffset > 100)
                    ? menu.classList.add('fixed__menu')
                    : menu.classList.remove('fixed__menu')
                    : menu.classList.add('fixed__menu')
            })
        }
        fixedMenu();
        setIsMenu(false);
        setIsPopup(false);
    }, [pathname]);

    const showNotification = () => {
        setIsPopup(false);
        setIsNotification(!isNotification);
    }

    const showPopup = () => {
        setIsPopup(!isPopup);
        setIsNotification(false);
    }

    return (
        <>
            {isNotification && <Notification setIsNotification={setIsNotification} className="z-[99999] fixed top-0 left-0 bottom-0 right-0 lg:hidden" />}
            <nav className={`z-[9999] menu px-[15px] sm:px-[35px] pt-[20px] pb-[5px] duration-300 fixed top-0 left-0 right-0 ${pathname !== path.HOME && 'fixed__menu'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <Link to={path.HOME}><img className="w-[100px] lg:w-[120px] 2xl:w-[140px]" src={LogoWhite} alt="Education.com" /></Link>
                    <div className="flex items-center text-white">
                        {user.isUser && <i onClick={showNotification} className="relative select-none block cursor-pointer lg:hidden">{total > 0 && <p className="absolute top-[-20%] right-[-20%] w-[16px] h-[16px] bg-[#ff695e] rounded-full text-[11px] flex justify-center items-center not-italic">{total}</p>}<IconBell className="w-[25px] h-[25px] fill-current text-white" /></i>}
                        <button onClick={() => setIsMenu(true)} className="lg:hidden ml-[15px] sm:ml-[35px]"><IconMenu className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] fill-current text-white" /></button>
                    </div>
                    <ul className={`${isMenu ? 'block' : 'hidden'} select-none subMenu lg:flex lg:text-white text-[14px] sm:text-[17px] 2xl:text-[20px] items-center`}>
                        <li className="px-[15px] flex lg:hidden justify-between items-center">
                            {user.isUser
                                ? <Link className="flex items-center" to="/profille"><i className="block max-w-[35px] max-h-[35px] min-w-[35px] min-h-[35px] rounded-full bg-conter bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i> <p className="font-bold pl-[10px]">Nguyễn Thành Đạt</p></Link>
                                : <Link to="/"><img className="w-[100px] lg:w-[120px] 2xl:w-[140px]" src={LogoBlack} alt="Education.com" /></Link>}
                            <button onClick={() => setIsMenu(false)} className="lg:hidden"><IconClose className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" /></button>
                        </li>
                        <li className="px-[15px]"><NavLink exact to="/" activeClassName="text-[#f44336]" className="flex items-center"><IconHome className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" /> Trang chủ</NavLink></li>
                        <li className="px-[15px]"><NavLink to="/khoa-hoc" activeClassName="text-[#f44336]" className="flex items-center"><IconCourse className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />  Khóa học</NavLink></li>
                        <li className="px-[15px]"><NavLink to="/thuc-hanh" activeClassName="text-[#f44336]" className="flex items-center"><IconPractice className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />  Thực hành</NavLink></li>
                        <li className={`px-[15px] menu-after relative ${user.isUser && 'hidden lg:block'}`}>
                            {user.isUser
                                ? <i onClick={showNotification} className="relative select-none block cursor-pointer">{total > 0 && <p className="absolute top-[-20%] right-[-20%] w-[16px] h-[16px] bg-[#ff695e] rounded-full text-[11px] flex justify-center items-center not-italic">{total}</p>}<IconBell className="w-[25px] h-[25px] fill-current text-white" /></i>
                                : <Link onClick={() => dispatch(actionLogin())} to="/dang-nhap" className="flex items-center"><IconLogOut className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" /> Đăng nhập</Link>}
                            {isNotification && <div className="absolute top-full right-0 w-[400px] pt-[12px]">
                                <span className="absolute block top-[-4px] right-[19px] border-[8px] border-solid border-transparent border-b-white"></span>
                                <Notification className="hidden lg:block" />
                            </div>}
                        </li>
                        <li className={`pl-[15px] relative ${user.isUser && 'hidden lg:block'}`}>
                            {user.isUser
                                ? <i onClick={showPopup} className="cursor-pointer select-none w-[30px] h-[30px] block rounded-full bg-center bg-cover" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
                                : <Link to="/dang-ky" className="flex items-center"><IconSignUp className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden" /> Đăng ký</Link>}
                            {isPopup && <div className="absolute top-full right-0 w-[200px] pt-[12px]">
                                <span className="absolute block top-[-4px] right-[8px] border-[8px] border-solid border-transparent border-b-white"></span>
                                <ul className="bg-white text-[#333] text-[16px] rounded-[3px] font-medium p-[5px] lg:shadow-2xl lg:border-l lg:border-r lg:border-b lg:border-solid lg:border-gray-300">
                                    <Link to='/profile'><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center"><IconProfile className="w-[20px] h-[20px] fill-current text-[#333]" /> <p className="ml-[10px]">Thông tin cá nhân</p></li></Link>
                                    <Link to='/admin'><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center"><IconAdmin className="w-[20px] h-[20px] fill-current text-[#333]" /> <p className="ml-[10px]">Trang quản trị</p></li></Link>
                                    <Link to='/setting'><li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center"><IconSetting className="w-[20px] h-[20px] fill-current text-[#333]" /> <p className="ml-[10px]">Cài đặt</p></li></Link>
                                    <li className="cursor-pointer px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center"><IconLogOut className="w-[20px] h-[20px] fill-current text-[#333]" /> <p className="ml-[10px]">Đăng xuất</p></li>
                                </ul>
                            </div>}
                        </li>
                        {user.isUser && <li className="px-[15px] lg:hidden"><a className="flex items-center"><IconLogOut className="w-[15px] h-[15px] mr-[10px] sm:w-[20px] sm:h-[20px] fill-current text-[#333]" /> Đăng xuất</a></li>}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav
