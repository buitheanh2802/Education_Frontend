import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { path } from "src/Constants/";
import Notification from "./Components/Notification";
import Auth from "./Components/Auth";
import SearchApi from "src/Apis/SearchApi";
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const Header = () => {
  const { pathname } = useLocation();
  const [active, isActive] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const { profile } = useSelector((state) => state.Auth);
  const [isSearch, setIsSearch] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [suggestPost, setSuggestPost] = useState([]);
  const [suggestQues, setSuggestQues] = useState([]);
  const [suggestUser, setSuggestUser] = useState([]);
  const [suggestTag, setSuggestTag] = useState([]);
  const history = useHistory();
  const searchBox = useRef();
  const timeout = useRef(null);
  const [loading, setLoading] = useState({
    error: false,
    success: false,
  });
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

  useEffect(() => {
    document.addEventListener('click',handleClickOutside)
    function handleClickOutside(e){
      if(!searchBox.current.contains(e.target)){
        if(isSearch) setIsSearch(false);
      }
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  },[isSearch])

  const EnterEvent = (e) => {
    e.preventDefault();
    setIsSearch(false);
    history.push(`/search?keyword=${searchKey}`);
  };

  const handleSearchSuggest = async (e) => {
    try {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(async () => {
        if (e.target.value) {
          setLoading({ ...loading, success: true });
          const { data: res } = await SearchApi.SuggestSearch(e.target.value);
          if (res) {
            const questions = res.data[0];
            setSuggestQues(questions);
            const posts = res.data[1];
            setSuggestPost(posts);
            const tags = res.data[2];
            setSuggestTag(tags);
            const users = res.data[3];
            setSuggestUser(users);
          }
          setLoading({ ...loading, success: false });
        }
      }, 1000);
    } catch (error) {
      setLoading({ ...loading, success: false });
      console.log(error);
    }
  };

  return (
    <>
      {isNotification && (
        <Notification
          setIsNotification={setIsNotification}
          className="z-[999] fixed top-0 left-0 bottom-0 right-0 lg:hidden"
        />
      )}
      <div
        className={`${
          active
            ? "bg-white text-gray-900 shadow-sm"
            : "pt-[15px] border-transparent text-white"
        } border-b border-solid duration-300 fixed top-0 left-0 right-0 z-[999]`}
      >
        <nav className="container mx-auto select-none flex justify-between items-center py-[10px] relative">
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
            <form className="relative ">
              <span
                onClick={() => {
                  history.push("/search");
                }}
                className="lg:hidden block pr-[10px] relative before:absolute before:inline-block before:w-[0.5px] border-r border-blue-600"
              >
                <Icon.SearchLarge className="w-[22px] h-[22px] mr-[5px] cursor-pointer text-blue-600 fill-current" />
              </span>
            </form>
            {profile && (
              <span
                onClick={() => setIsNotification(!isNotification)}
                className={`${
                  active
                    ? "text-gray-500 hover:text-blue-600"
                    : "text-white hover:text-[#51ffb9]"
                } lg:hidden`}
              >
                <Icon.Bell className="cursor-pointer w-[25px] h-[25px] fill-current" />
              </span>
            )}
            <button onClick={() => setIsMenu(true)} className="lg:hidden">
              <Icon.Menu
                className={`fill-current w-[20px] sm:w-[25px] ${
                  active ? "text-black" : "text-white"
                }`}
              />
            </button>
          </div>
          <div
            className={`${
              isMenu ? "ml-0 sm:ml-[50%] md:ml-[60%]" : "ml-[100%] lg:ml-0"
            } menu_top lg:flex w-full lg:justify-between font-medium text-[14px] sm:text-[16px] lg:transform lg:translate-y-[2px]`}
          >
            <ul className="flex justify-between lg:hidden py-[10px] border-b px-[15px] lg:px-0">
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
                <Icon.Close className="w-[20px]" />
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
            <div className="flex items-center gap-[20px] relative">
              <form onSubmit={(e) => EnterEvent(e)} className="relative">
                <input
                  type="text"
                  ref={searchBox}
                  onChange={(e) => {
                    setIsSearch(true);
                    setSearchKey(e.target.value);
                    handleSearchSuggest(e);
                  }}
                  onClick={() => setIsSearch(true)}
                  className={`absolute lg:block hidden right-full translate-x-[25px] translate-y-[-5px] text-[14px] text-gray-700 outline-none rounded-[5px] pl-[10px] py-[5px] opacity-100 border border-blue-600 duration-300 ${
                    isSearch ? "w-[380px]" : "w-[250px]"
                  }`}
                  placeholder="Tìm kiếm..."
                />
                <span
                  onClick={() => setIsSearch(!isSearch)}
                  className="hidden lg:block relative before:absolute before:inline-block before:w-[0.5px] before:h-[60%] before:right-0 before:top-[50%] before:translate-y-[-50%]"
                >
                  <Icon.SearchLarge className="w-[22px] h-[22px] pr-[5px] cursor-pointer text-blue-600 fill-current " />
                </span>
                <button
                  type="submit"
                  className={
                    isSearch
                      ? "hidden lg:block pr-[15px] relative before:absolute before:inline-block before:w-[0.5px] before:h-[60%] before:right-0 before:top-[50%] before:translate-y-[-50%] before:bg-[#51ffb9]"
                      : "hidden"
                  }
                ></button>
              </form>
              {isSearch && searchKey.length > 0 ? (
                suggestPost?.searchResults?.length === 0 &&
                suggestQues?.searchResults?.length === 0 &&
                suggestUser?.searchResults?.length === 0 &&
                suggestTag?.searchResults?.length === 0 ? (
                  <div
                    className={`absolute w-[380px] shadow-xl shadow-blue-300 bg-white top-[30px] rounded overflow-auto max-h-[500px] ${
                      profile ? "right-[118px]" : "right-[225px]"
                    }`}
                  >
                    <p className="text-center text-[16px] leading-[30px] py-[20px] font-bold text-gray-600">
                      Không có dữ liệu
                    </p>
                  </div>
                ) : (
                  <div
                    className={`${
                      profile ? "right-[118px]" : "right-[225px]"
                    } absolute w-[380px] shadow-xl shadow-blue-300 bg-white top-[30px] rounded overflow-y-auto max-h-[500px]`}
                  >
                    {loading.success && (
                      <LoadingIcon className="w-[20px] fill-current mx-auto my-[20px] h-[20px] text-blue-200" />
                    )}
                    <div className="">
                      {suggestPost?.searchResults?.length > 0 ? (
                        <div className="bg-blue-300 rounded">
                          <p className="py-[10px] pl-[10px] text-white text-[16px] uppercase font-bold">
                            {suggestPost.title}
                          </p>
                        </div>
                      ) : null}
                      {suggestPost?.searchResults?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="px-[10px] py-[10px] border-dashed border-b-[0.5px] border-blue-500"
                          >
                            <div>
                              <Link
                                to={`/user/${item?.createBy?.username}`}
                                className="font-bold text-blue-600 uppercase text-[13px] mr-[5px]"
                              >
                                {item?.createBy?.fullname}
                              </Link>
                              -
                              <span className="ml-[5px] text-gray-600 text-[13px]">
                                {item.createdAt}
                              </span>
                            </div>
                            <Link
                              className="font-semibold text-gray-800 text-[14px]"
                              to={`/posts/${item?.slug}-${item?.shortId}`}
                            >
                              {item.title}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                    <div className="">
                      {suggestQues?.searchResults?.length > 0 ? (
                        <div className="bg-blue-300 rounded">
                          <p className="py-[10px] pl-[10px] text-white text-[16px] uppercase font-bold">
                            {suggestQues.title}
                          </p>
                        </div>
                      ) : null}
                      {suggestQues?.searchResults?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="px-[10px] py-[10px] border-dashed border-b-[0.5px] border-blue-500"
                          >
                            <div>
                              <Link
                                to={`/user/${item?.createBy?.username}`}
                                className="font-bold text-blue-600 uppercase text-[13px] mr-[5px]"
                              >
                                {item?.createBy?.fullname}
                              </Link>
                              -
                              <span className="ml-[5px] text-gray-600 text-[13px]">
                                {item.createdAt}
                              </span>
                            </div>
                            <Link
                              to={`/question/${item?.slug}-${item?._id}`}
                              className="font-semibold text-gray-800 text-[14px]"
                            >
                              {item.title}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                    <div className="">
                      {suggestUser?.searchResults?.length > 0 ? (
                        <div className="bg-blue-300 rounded">
                          <p className="py-[10px] pl-[10px] text-white text-[16px] uppercase font-bold">
                            {suggestUser.title}
                          </p>
                        </div>
                      ) : null}
                      <div className="">
                        {suggestUser?.searchResults?.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              to={`/user/${item?.username}`}
                              className="flex px-[10px] py-[10px] items-center border-dashed border-b-[0.5px] border-blue-500"
                            >
                              {item?.avatar?.avatarUrl.length > 0 ? (
                                <img
                                  src={item?.avatar?.avatarUrl}
                                  className="mx-auto max-h-[40px] min-h-[40px] rounded-full"
                                  width="40px"
                                  height="40px"
                                />
                              ) : (
                                <div className="py-[5px] text-[#4A5568] mx-auto text-center w-[40px] h-[40px] rounded-full bg-blue-200 font-bold text-[20px]">
                                  {item?.fullname
                                    ?.toUpperCase()
                                    .substring(0, 1)}
                                </div>
                              )}
                              <div className="py-[10px]">
                                <p className="flex flex-wrap text-[#707885] items-center gap-[5px] mb-[5px] max-w-[300px]">
                                  <p className="text-[#2d6ff7] hover:underline">
                                    {item?.fullname}
                                  </p>
                                </p>
                                <div className="flex text-[13px] gap-[15px] items-center w-[300px]">
                                  <div className="flex items-center gap-[5px] text-[#707885]">
                                    <Icon.Pen className="fill-current w-[13px]" />
                                    <span>{item?.postCounts}</span>
                                  </div>
                                  <div className="flex items-center gap-[5px] text-[#707885]">
                                    <Icon.Questions className="fill-current w-[13px]" />
                                    <span>{item?.questionCounts}</span>
                                  </div>
                                  <div className="flex items-center gap-[5px] text-[#707885]">
                                    <Icon.User className="fill-current w-[13px]" />
                                    <span>{item?.followerCounts}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <div className="">
                      {suggestTag?.searchResults?.length > 0 ? (
                        <div className="bg-blue-300 rounded">
                          <p className="py-[10px] pl-[10px] text-white text-[16px] uppercase font-bold">
                            {suggestTag.title}
                          </p>
                        </div>
                      ) : null}
                      <div className="">
                        {suggestTag?.searchResults?.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              to={`/tag/${item?.slug}`}
                              className="flex items-center px-[10px] py-[10px] border-dashed border-b-[0.5px] border-blue-500"
                            >
                              {item?.avatar?.avatarUrl.length > 0 ? (
                                <img
                                  src={item?.avatar?.avatarUrl}
                                  className="mx-auto max-h-[40px] min-h-[40px] rounded"
                                  width="40px"
                                  height="40px"
                                />
                              ) : (
                                <div className="py-[5px] text-[#4A5568] mx-auto text-center w-[40px] h-[40px] rounded bg-blue-200 font-bold text-[20px]">
                                  {item?.name?.toUpperCase().substring(0, 1)}
                                </div>
                              )}
                              <div className="py-[10px]">
                                <div className="text-[#707885] items-center gap-[5px] mb-[5px]">
                                  <p className="text-[#2d6ff7] hover:underline w-[300px]">
                                    {item?.name}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )
              ) : null}
              <Auth
                isNotification={isNotification}
                setIsNotification={setIsNotification}
                isPopup={isPopup}
                setIsMenu={setIsMenu}
                setIsPopup={setIsPopup}
                active={active}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
