import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { path } from "src/Constants/";
import Notification from "./Components/Notification";
import Auth from "./Components/Auth";

const Header = () => {
  const { pathname } = useLocation();
  const [active, isActive] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const { profile } = useSelector((state) => state.Auth);

  useEffect(() => {
    const fixedTop = () =>
      window.pageYOffset > 300 ? isActive(true) : isActive(false);

    if (pathname === path.HOME)
      return (() => {
        fixedTop();
        window.addEventListener("scroll", fixedTop);
      })();

    isActive(true);
    window.addEventListener("scroll", () => isActive(true));
  }, [pathname]);

  return (
    <>
      {/* Mobile */}
      {isNotification && (
        <Notification
          setIsNotification={setIsNotification}
          className="z-[999] fixed top-0 left-0 bottom-0 right-0 lg:hidden"
        />
      )}
      {/* end */}
      <div
        className={`${active
            ? "bg-white text-gray-900 shadow-sm"
            : "pt-[15px] border-transparent text-white"
          } border-b border-solid duration-300 fixed top-0 left-0 right-0 z-[999]`}
      >
        <nav className="container mx-auto select-none flex justify-between items-center py-[10px]">
          <h1 className="mr-[80px]">
            <Link
              onClick={() => {
                setIsMenu(false);
                setIsPopup(false);
              }}
              className="flex items-center"
              to={path.HOME}
            >
              <Icon.Logo className="sm:w-[30px] w-[24px]" />
              <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">
                DevStar
              </span>
            </Link>
          </h1>
          <div className="flex items-center gap-[15px]">
            {profile && (
              <i
                onClick={() => setIsNotification(!isNotification)}
                className={`${active
                    ? "text-gray-500 hover:text-blue-600"
                    : "text-white hover:text-[#51ffb9]"
                  } lg:hidden`}
              >
                <Icon.Bell className="cursor-pointer w-[25px] h-[25px] fill-current" />
              </i>
            )}
            <button onClick={() => setIsMenu(true)} className="lg:hidden">
              <Icon.Menu
                className={`fill-current w-[20px] sm:w-[25px] ${active ? "text-black" : "text-white"
                  }`}
              />
            </button>
          </div>
          <div
            className={`${isMenu ? "ml-0 sm:ml-[50%] md:ml-[60%]" : "ml-[100%] lg:ml-0"
              } menu_top lg:flex w-full lg:justify-between font-medium text-[14px] sm:text-[16px] lg:transform lg:translate-y-[2px]`}
          >
            <ul className="flex justify-between lg:hidden  py-[10px] border-b px-[15px] lg:px-0">
              {profile ? (
                <Link
                  to={path.PROFILE_ME}
                  className="flex items-center gap-[10px]"
                >
                  {profile?.avatar?.avatarUrl?.length > 0 ? (
                    <p
                      onClick={() => setIsPopup(!isPopup)}
                      className="border border-gray-300 cursor-pointer select-none w-[45px] h-[45px] rounded-full bg-center bg-cover"
                      style={{
                        backgroundImage: `url(${profile?.avatar?.avatarUrl})`,
                      }}
                      alt={profile?.fullname}
                    ></p>
                  ) : (
                    <p
                      onClick={() => setIsPopup(!isPopup)}
                      className="flex justify-center items-center text-gray-500 border border-gray-300 bg-gray-200 cursor-pointer select-none w-[45px] h-[45px] rounded-full"
                    >
                      {" "}
                      {profile?.fullname?.slice(0, 1)?.toUpperCase()}{" "}
                    </p>
                  )}
                  <span className="text-[16px] font-medium">
                    {profile?.fullname}
                  </span>
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    setIsMenu(false);
                    setIsPopup(false);
                  }}
                  className="flex items-center"
                  to={path.HOME}
                >
                  <Icon.Logo className="w-[24px]" />
                  <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">
                    DevStar
                  </span>
                </Link>
              )}
              <button onClick={() => setIsMenu(false)}>
                {" "}
                <Icon.Close className="w-[20px]" />{" "}
              </button>
            </ul>
            <ul className="lg:flex lg:gap-[20px] px-[15px] lg:px-0 pt-[10px] lg:pt-0">
              <li className="py-[10px] lg:py-0">
                <NavLink
                  onClick={() => {
                    setIsMenu(false);
                    setIsPopup(false);
                  }}
                  activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                  className="hover:text-blue-600 duration-300 flex items-center"
                  to="/posts"
                >
                  <Icon.Pen className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                  Bài viết
                </NavLink>
              </li>
              <li className="py-[10px] lg:py-0">
                <NavLink
                  onClick={() => {
                    setIsMenu(false);
                    setIsPopup(false);
                  }}
                  activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                  className="hover:text-blue-600 duration-300 flex items-center"
                  to="/questions"
                >
                  <Icon.Questions className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                  Hỏi đáp
                </NavLink>
              </li>
              <li className="py-[10px] lg:py-0">
                <NavLink
                  onClick={() => {
                    setIsMenu(false);
                    setIsPopup(false);
                  }}
                  activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                  className="hover:text-blue-600 duration-300 flex items-center"
                  to="/challenge"
                >
                  <Icon.Group className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                  Thực hành
                </NavLink>
              </li>
            </ul>
            <Auth
              isNotification={isNotification}
              setIsNotification={setIsNotification}
              isPopup={isPopup}
              setIsMenu={setIsMenu}
              setIsPopup={setIsPopup}
              active={active}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
