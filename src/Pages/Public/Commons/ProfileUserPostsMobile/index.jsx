import React from "react";
import { Icon } from "src/Components/Icon";
import { Link } from "react-router-dom";
const ProfileUserPostsMobile = () => {
  return (
    <div className="block lg:hidden">
      <div className="flex items-center mb-[5px] ">
        <Link to="">
          <img
            className="max-w-[40px] max-h-[40px] rounded-full"
            src="https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg"
            alt=""
          />
        </Link>
        <div className="ml-2">
          <p className="text-blue-500 text-[14px] sm:text-[16px] font-medium flex items-center">
            Trần Quang Vĩnh
            <span className=" text-[12px] sm:text-[14px] text-gray-500 hidden sm:block">
              - @tranquangvinh
            </span>
            <span>
              <button className="mt-1 sm:mt-0 ml-2 border rounded-[3px] border-blue-500 text-[12px] text-blue-500 px-[5px] py-[1px] hover:text-white hover:bg-blue-500">
                + Theo dõi
              </button>
            </span>
          </p>
          <div className="flex items-center mt-[3px]">
            <p className="flex items-center text-gray-500">
              <Icon.Point className="fill-current w-[12px] sm:w-[15px] " />
              <span className="text-[12px] sm:text-[14px] ml-1">48</span>
            </p>
            <p className="flex items-center text-gray-500 ml-[10px]">
              <Icon.Pen className="fill-current  w-[12px] sm:w-[13px] " />
              <span className="text-[12px] sm:text-[14px] ml-1">20</span>
            </p>
            <p className="flex items-center text-gray-500 ml-[10px]">
              <Icon.Questions className="fill-current w-[12px] sm:w-[13px] " />
              <span className="text-[12px] sm:text-[14px] ml-1">12</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserPostsMobile;
