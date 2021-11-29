import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { path } from "src/Constants/";

const SlideBar = () => {
  return (
    <div className="h-screen hidden lg:block shadow-lg relative w-80">
      <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
        <Link to={path.HOME} className="flex items-center pt-6 px-4">
          <Icon.Logo className="sm:w-[30px] w-[24px]" />
          <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">
            DevStar
          </span>
        </Link>
        <nav className="mt-6">
          <NavLink
            exact
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to={path.ADMIN}
          >
            <span className="text-left">
              <Icon.Dasboarh />
            </span>
            <span className="mx-4 text-sm font-normal">Dashboard</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/chart"
          >
            <span className="text-left">
              <Icon.Chart />
            </span>
            <span className="mx-4 text-sm font-normal">Thống kê</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/exercise"
          >
            <span className="text-left">
              <Icon.AdminExercise />
            </span>
            <span className="mx-4 text-sm font-normal">Quản trị bài tập</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/publish_post"
          >
            <span className="text-left">
              <Icon.AdminExercise />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lí bài viết</span>
          </NavLink>
          <NavLink
            activeClassName="text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            to="/manager/publish_question"
          >
            <span className="text-left">
              <Icon.AdminExercise />
            </span>
            <span className="mx-4 text-sm font-normal">Quản lí câu hỏi</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default SlideBar;
