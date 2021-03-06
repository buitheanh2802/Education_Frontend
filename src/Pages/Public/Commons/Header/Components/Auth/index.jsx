import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { path } from "src/Constants/";
import Notification from "../Notification";
import { ActionLogout } from "src/Redux/Actions/Auth.action";
import { hasNotification } from "src/Redux/Slices/Notification.slice";
import {
  notificationGets,
  notificationReadAll,
} from "src/Redux/Actions/Notification.action";
import Loading from "src/Components/Loading";

const Auth = ({
  isPopup,
  setIsPopup,
  setIsMenu,
  isNotification,
  setIsNotification,
  active,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { profile, actionLoading } = useSelector((state) => state.Auth);
  const { counter, models } = useSelector((state) => state.Notification);
  const { socket } = useSelector((state) => state.SocketService);
  // listen notification
  useEffect(() => {
    socket.on("responseForJoin", (data) => { });
    socket.on("responseForSendTo", () => {
      dispatch(hasNotification());
      dispatch(notificationGets(localStorage.getItem("_token_")));
    });
  }, []);
  // set counter notification
  useEffect(() => {
    if (isNotification && counter !== 0) {
      dispatch(notificationReadAll(localStorage.getItem("_token_")));
    }
  }, [isNotification]);
  return (
    <div className="border-l border-[#1273eb]">
      {profile ? (
        <>
          <ul className="mx-[15px] border-t lg:hidden">
            <li className="py-[10px] lg:py-0">
              <NavLink
                onClick={() => {
                  setIsMenu(false);
                  setIsPopup(false);
                }}
                activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                className="hover:text-blue-600 duration-300 flex items-center"
                to={path.PROFILE_ME}
              >
                <Icon.Profile className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                Th??ng tin c?? nh??n
              </NavLink>
            </li>
            {profile?.role && (
              <li className="py-[10px] lg:py-0">
                <NavLink
                  onClick={() => {
                    setIsMenu(false);
                    setIsPopup(false);
                  }}
                  activeClassName="text-blue-700 relative lg:after:bottom-[-15px] lg:after:right-0 lg:after:bg-[#1273eb] lg:after:absolute lg:after:w-full lg:after:h-[2px]"
                  className="hover:text-blue-600 duration-300 flex items-center"
                  to="/admin"
                >
                  <Icon.Admin className="w-[16px] h-[16px] mr-[10px] sm:w-[20px] sm:h-[20px] lg:hidden fill-current" />
                  Trang qu???n tr???
                </NavLink>
              </li>
            )}
            <li
              onClick={async () => {
                await dispatch(ActionLogout());
                history.push(path.HOME);
              }}
              className="cursor-pointer py-[10px] flex items-center text-red-600"
            >
              {actionLoading ? (
                <Loading className="w-[20px] h-[20px] fill-current" />
              ) : (
                <Icon.LogOut className="w-[20px] h-[20px] fill-current" />
              )}{" "}
              <p className="ml-[10px]">????ng xu???t</p>
            </li>
          </ul>
          <ul className="lg:flex lg:gap-[5px] px-[15px] lg:px-0 items-center">
            <li className="px-[15px] menu-after relative hidden lg:block cursor-pointer ">
              <i
                onClick={() => setIsNotification(!isNotification)}
                className={
                  active
                    ? "text-gray-500 hover:text-blue-600"
                    : "text-white hover:text-[#51ffb9]"
                }
              >
                <Icon.Bell className=" w-[20px] h-[20px] fill-current" />
              </i>
              {counter !== 0 ? (
                <span
                  className="absolute top-[-10px] right-[10px] rounded-full leading-[15px] text-center
                            text-white bg-red-500 w-[18px] h-[18px] text-[10px]
                        "
                >
                  {counter}
                </span>
              ) : null}
              {isNotification && (
                <div className="absolute top-full right-0 w-[400px] pt-[12px]">
                  <span className="absolute w-[10px] h-[10px] block border-t border-l bg-white border-gray-300 transform rotate-[45deg] -translate-y-1/2 right-[20px]"></span>
                  <Notification className="hidden lg:block font-normal" />
                </div>
              )}
            </li>
            <li className="pl-[15px] relative hidden lg:block w-[30px] ml-[15px]">
              {profile?.avatar?.avatarUrl?.length > 0 ? (
                <p
                  onClick={() => setIsPopup(!isPopup)}
                  className="right-0 absolute top-1/2 transform -translate-y-1/2 border border-gray-300 cursor-pointer select-none w-[30px] h-[30px] rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${profile?.avatar?.avatarUrl})`,
                  }}
                  alt={profile?.fullname}
                ></p>
              ) : (
                <p
                  onClick={() => setIsPopup(!isPopup)}
                  className="right-0 flex justify-center items-center text-gray-500 absolute top-1/2 transform -translate-y-1/2 border border-gray-300 bg-gray-200 cursor-pointer select-none w-[30px] h-[30px] rounded-full"
                >
                  {" "}
                  {profile?.fullname?.slice(0, 1)?.toUpperCase()}{" "}
                </p>
              )}
              {isPopup && (
                <div className="absolute top-[calc(100%+15px)] right-0 w-[200px] pt-[12px]">
                  <span className="absolute w-[10px] h-[10px] block border-t border-l bg-white border-gray-300 transform rotate-[45deg] -translate-y-1/2 right-[10px]"></span>
                  <ul className="bg-white text-[#333] text-[15px] rounded-[3px] font-normal p-[5px] shadow-lg border border-solid border-gray-300">
                    <Link
                      onClick={() => setIsPopup(!isPopup)}
                      to={path.PROFILE_ME}
                    >
                      <li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]">
                        <Icon.Profile className="w-[20px] h-[20px] fill-current" />{" "}
                        <p className="ml-[10px]">Th??ng tin c?? nh??n</p>
                      </li>
                    </Link>
                    {profile?.role && (
                      <Link
                        onClick={() => setIsPopup(!isPopup)}
                        to={path.ADMIN}
                      >
                        <li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]">
                          <Icon.Admin className="w-[20px] h-[20px] fill-current" />{" "}
                          <p className="ml-[10px]">Trang qu???n tr???</p>
                        </li>
                      </Link>
                    )}
                    <Link
                      onClick={() => setIsPopup(!isPopup)}
                      to={path.SETTING}
                    >
                      <li className="px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-[#333]">
                        <Icon.Setting className="w-[20px] h-[20px] fill-current" />{" "}
                        <p className="ml-[10px]">C??i ?????t</p>
                      </li>
                    </Link>
                    <li
                      onClick={async () => {
                        await dispatch(ActionLogout());
                        history.push(path.HOME);
                      }}
                      className="cursor-pointer px-[10px] py-[5px] hover:bg-gray-100 duration-300 rounded-[3px] flex items-center text-red-600"
                    >
                      {actionLoading ? (
                        <Icon.Loading className="w-[20px] h-[20px] fill-current" />
                      ) : (
                        <Icon.LogOut className="w-[20px] h-[20px] fill-current" />
                      )}{" "}
                      <p className="ml-[10px]">????ng xu???t</p>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </>
      ) : (
        <ul className="lg:flex lg:gap-[5px] mx-[15px] lg:mx-0 border-t lg:border-none">
          <li className="py-[10px] lg:py-0">
            <Link
              className={`lg:px-[15px] lg:py-[5px] lg:border lg:border-solid lg:rounded duration-300 lg:border-[#fff0] ${active
                ? "lg:text-gray-800 lg:hover:text-blue-600"
                : "hover:text-[#51ffb9]"
                }`}
              to={path.LOGIN}
            >
              ????ng nh???p
            </Link>
          </li>
          <li className="py-[10px] lg:py-0">
            <Link
              className={`lg:px-[15px] lg:py-[5px] lg:border lg:border-solid lg:rounded duration-300 ${active
                ? "lg:border-[#1273eb] lg:text-gray-800 hover:text-[#fff] hover:bg-blue-600"
                : "lg:border-white hover:border-[#67d4a8] hover:text-[#fff] hover:bg-[#67d4a8]"
                }`}
              to={path.REGISTER}
            >
              ????ng k??
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Auth;
