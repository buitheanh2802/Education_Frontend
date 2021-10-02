import React from "react";
import { Icon } from "src/Components/Icon";
import { Link } from "react-router-dom";
const ProfileUsePost = () => {
  return (
    <div className="bg-white shadow rounded-[5px] ">
      <div className="flex py-[7px] block-avt">
        <Link to="" className="m-auto ">
          <img
            className="max-w-[55px] max-h-[55px] rounded-full"
            src="https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="p-[10px]  border-b border-gray-100 flex justify-between items-center">
        <p className="text-[16px] font-medium ">
          <span className="block">Trần Quang Vĩnh</span>
          <span className="block text-[14px] text-gray-500 font-normal">
            @tranquangvinh
          </span>
        </p>
        <button className="border border-blue-500 px-4 py-[3px] text-[14px] text-blue-500  rounded-[3px] hover:bg-blue-500 hover:text-white">
          + Theo dõi
        </button>
      </div>
      <div className="py-[10px] flex border-b border-gray-100">
        <div className="m-auto flex">
          <p className="text-center  ">
            <span className="flex items-center text-[14px] text-gray-500">
              <Icon.Point className="fill-current w-[13px]  mr-[3px]" />
              Điểm
            </span>
            <span className="block ">100</span>
          </p>
          <p className="text-center ml-[30px] ">
            <span className="flex items-center text-[14px] text-gray-500">
              <Icon.Pen className="fill-current w-[13px]  mr-[3px]" />
              Bài viết
            </span>
            <span className="block ">100</span>
          </p>{" "}
          <p className="text-center ml-[30px]">
            <span className="flex items-center text-[14px] text-gray-500">
              <Icon.Questions className="fill-current w-[13px]  mr-[3px]" />
              Câu hỏi
            </span>
            <span className="block ">100</span>
          </p>
        </div>
      </div>
      <div className="p-[15px]">
        <button className="text-blue-500 w-full  py-[3px] border border-blue-500 rounded-[3px] flex justify-center items-center hover:bg-blue-500 hover:text-white">
          <Icon.Bookmark className="fill-current w-[13px]" />
          <span className="text-[14x] ml-1">Bookmark bài viết này</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileUsePost;
