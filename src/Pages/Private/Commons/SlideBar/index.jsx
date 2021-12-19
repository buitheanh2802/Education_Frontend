import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { path } from "src/Constants/";

const SlideBar = () => {
  const { profile } = useSelector(state => state.Auth);
  return (
    <div className="h-screen hidden lg:block shadow-lg relative w-80">
      <div className="bg-white h-full rounded-2xl">
        <Link to={path.HOME} className="flex items-center py-6 px-4 border-b">
          <Icon.Logo className="sm:w-[30px] w-[24px]" />
          <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">
            DevStar
          </span>
        </Link>
        <nav className="">
          <NavLink
            exact
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to={path.ADMIN}
          >
            <span className="text-left">
              <Icon.Dasboarh />
            </span>
            <span className="mx-4 text-sm font-normal">Dashboard</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/chart"
          >
            <span className="text-left">
              <Icon.Chart />
            </span>
            <span className="mx-4 text-sm font-normal">Thống kê</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/exercise"
          >
            <span className="text-left">
              <Icon.AdminExercise />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý bài tập</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/publish_post"
          >
            <span className="text-left">
              <Icon.Pen className="fill-current w-[20px]" />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý bài viết</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to={path.COMMENT_MANGER}
          >
            <span className="text-left">
              <Icon.Comment className="fill-current w-[20px]" />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý bình luận</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/publish_question"
          >
            <span className="text-left">
              <Icon.Questions className="fill-current w-[20px]" />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý câu hỏi</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/contact"
          >
            <span className="text-left">
              <Icon.Form className="fill-current w-[20px]" />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý liên hệ</span>
          </NavLink>
          {profile?.role === "admin" && <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/account"
          >
            <span className="text-left">
              <Icon.User className="fill-current w-[20px]" />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý tài khoản</span>
          </NavLink>}
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500"
            className="w-full font-thin uppercase text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/tag"
          >
            <span className="text-left">
              <Icon.Tags className="fill-current w-[20px]" />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lý tag</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default SlideBar;
