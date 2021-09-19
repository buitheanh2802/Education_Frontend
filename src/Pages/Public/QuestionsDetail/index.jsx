import React, { useState } from "react";
import { Icon } from "src/Components/Icon";
import { Link } from "react-router-dom";
import ProfileUseQuestion from "../Commons/ProfileUseQuestion";
import ProfileUserQuestionMobile from "../Commons/ProfileUserQuestionMobile";
import QuestionsNew from "../Commons/QuestionsNew";
const QuestionsDetail = () => {
  const [postmenu, setPostmenu] = useState(false);
  const [Questionshare, setQuestionshare] = useState(false);

  return (
    <>
      <div className="mt-[80px] container mx-auto bg-white rounded-[5px] shadow">
        <div className="px-[10px] sm:px-[15px] py-[10px] ">
          <p className="text-gray-500 text-[14px] ">
          Trang chủ / Hỏi đáp /
            <span className="text-blue-500">
            Tìm hiểu EpressJs
            </span>
          </p>
        </div>
      </div>
      <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[2.8fr,1.2fr] gap-[30px] mt-[20px]">
        <div className="">
          <div className="bg-white rounded-[5px] shadow px-[5px] sm:px-[15px] py-[20px] ">
            <ProfileUserQuestionMobile />
            <div className="flex justify-between  ">
              <p className="text-[18px] sm:text-[24px] font-medium">
              Tìm hiểu EpressJs
              </p>
              <div className="relative">
                <button
                  className="h-full btn__post"
                  onClick={() => setPostmenu(!postmenu)}
                >
                  <Icon.DotsVertical className=" w-[13px] " />
                </button>
                <div
                  className={
                    postmenu
                      ? "post__menu bg-white"
                      : "post__menu bg-white hidden"
                  }
                >
                  <ul className="relative text-[12px] py-[5px]">
                    <li className="flex items-center cursor-pointer text-gray-700 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500">
                      <Icon.Flag className="fill-current w-[16px]  mr-[5px]" />
                      Báo cáo
                    </li>
                    <li className="flex items-center cursor-pointer text-gray-700 mt-1 hover:bg-blue-100 py-1 px-[10px] hover:text-blue-500">
                      <Icon.ExternaLink className="fill-current w-[20px] mr-[5px]" />
                      Nhờ chuyên gia trả lời
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-[12px] sm:text-[14px] mt-[8px]">
            Yêu cầu khoảng 2 giờ trước
            </p>
            <div className="flex items-center mt-[10px]">
              <p className="flex items-center text-gray-500">
                <Icon.Eye className="fill-current w-[15px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                9 lượt xem
                </span>
              </p>
              <p className="flex items-center text-gray-500 ml-[10px]">
                <Icon.Chat className="fill-current w-[13px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                  2 bình luận
                </span>
              </p>
              <p className="flex items-center text-gray-500 ml-[10px]">
                <Icon.Bookmark className="fill-current w-[13px] " />
                <span className="text-[12px] sm:text-[14px] ml-1">
                  0 đã lưu
                </span>
              </p>
            </div>
            <div className="flex items-center mt-[8px]">
              <p className="flex items-center text-gray-500">
                <Icon.Tags className="fill-current w-[13px] " />
                <span className="text-[14px] ml-1">Tags</span>
              </p>
              <span>
                <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">
                  JavaScript
                </button>
                <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">
                  JavaScript
                </button>
                <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">
                  JavaScript
                </button>
              </span>
            </div>
           
            <div className="mt-[20px] h-96 bg-gray-500"></div>
            <div className="mt-[20px] flex items-center">
                    <button className="border border-blue-500 px-4 py-[3px] text-[14px] text-blue-500  rounded-[3px] hover:bg-blue-500 hover:text-white">
                        <span className="text-[12x] md:text-[14x] ml-1">Ghi Câu Trả Lời</span>
                    </button>
              
                    
                </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <ProfileUseQuestion />
          <QuestionsNew />
        </div>
      </div>
    </>
  );
};

export default QuestionsDetail;
