import React, { useState } from "react";
// import cover_img from "../../../Assets/media/pictures/cover_image.png";
import profile_icon from "../../../Assets/media/pictures/profile.png";
import contact_icon from "../../../Assets/media/pictures/contact.png";
import key_icon from "../../../Assets/media/pictures/digital-key.png";
import { Icon } from "src/Components/Icon";
import { NavLink } from "react-router-dom";

const EditProfile = () => {
  const [BoxInfo, setBoxInfo] = useState(false);
  const [BoxSecurity, setBoxSecurity] = useState(false);

  return (
    <>
      <div className=" mx-auto  ">
        <div className="flex ">
          <div className="lg:w-[20%]   md:h-[100vh] pt-[75px]">
            <div className=" bg-white h-full shadow-lg rounded-[3px]">
              <div className="w-full">
                <div className="flex items-center py-[17px] hover:bg-blue-100 px-[20px]">
                  <Icon.Home className="fill-current w-[25px] text-gray-400 " />
                  <p className="ml-3 text-[15px] hidden lg:block">Trang Chủ</p>
                </div>
              </div>
              <div className="w-full relative ">
                <div
                  className="flex items-center justify-between py-[17px] hover:bg-blue-100 px-[20px]"
                  onClick={() => setBoxInfo(!BoxInfo)}
                >
                  <div className="flex items-center">
                    <Icon.Card className="fill-current w-[23px] text-gray-400" />
                    <p className="ml-3 text-[15px] hidden lg:block select-none">
                      Thông Tin
                    </p>
                  </div>
                  <Icon.ArrowDown
                    className={
                      BoxInfo
                        ? "fill-current w-[12px] text-gray-400 hidden lg:block rotate-180"
                        : "fill-current w-[12px] text-gray-400  hidden lg:block"
                    }
                  />
                </div>
                <ul
                  className={
                    BoxInfo
                      ? "block w-[200px] lg:w-full  rounded-r-[3px] lg:rounded-[0px] absolute lg:static top-0 left-[100%] bg-white z-10"
                      : "hidden "
                  }
                >
                  <li className="">
                    <NavLink
                      to="/profile/:id/edit/personal"
                      className="px-[15px] lg:px-[30px] xl:px-[45px] flex items-center hover:bg-blue-100 py-[13px]"
                    >
                      <Icon.User className="fill-current w-[18px] text-gray-400" />
                      <span className="ml-3 text-[15px] select-none">
                        Thông Tin Cá Nhân
                      </span>
                    </NavLink>
                  </li>
                  <li className="px-[15px] lg:px-[30px]  xl:px-[45px] flex items-center hover:bg-blue-100 py-[13px]">
                    <Icon.Card className="fill-current w-[18px] text-gray-400" />
                    <span className="ml-3 text-[15px] select-none">
                      Thông Tin Liên Hệ
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full relative">
                <div
                  className="flex items-center justify-between py-[17px] hover:bg-blue-100 px-[20px]"
                  onClick={() => setBoxSecurity(!BoxSecurity)}
                >
                  <div className="flex items-center">
                    <Icon.Shield className="fill-current w-[25px] text-gray-400" />
                    <p className="ml-3 text-[15px] hidden lg:block select-none">
                      Bảo Mật
                    </p>
                  </div>
                  <Icon.ArrowDown
                    className={
                      BoxSecurity
                        ? "fill-current w-[12px] text-gray-400 hidden lg:block rotate-180 "
                        : "fill-current w-[12px] text-gray-400 hidden lg:block"
                    }
                  />
                </div>
                <ul
                  className={
                    BoxSecurity
                      ? " block w-[200px] lg:w-full  rounded-r-[3px] lg:rounded-[0px] absolute lg:static top-0 left-[100%] bg-white z-10"
                      : " hidden"
                  }
                >
                  <li className="px-[15px] lg:px-[30px] xl:px-[45px] flex items-center justify-center lg:justify-start  hover:bg-blue-100 py-[13px]">
                    <Icon.Key className="fill-current w-[22px] text-gray-400" />
                    <span className="ml-3 text-[15px] select-none">
                      Mật Khẩu
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[80%] px-[15px] md:px-[30px] pt-[75px]">
            <div className=" max-w-[1100px] mx-auto lg:py-[20px] ">
              <div className=" bg-white shadow-lg rounded-[5px] mx-auto">
                <div className="px-[20px] lg:px-[50px] pt-[15px] pb-[50px]">
                  <div
                    className="h-[130px] lg:h-[150px]  rounded-[5px] bg-center bg-cover bg-no-repeat cursor-pointer"
                    style={{
                      backgroundImage: `url(https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg)`,
                    }}
                  ></div>
                  <div className="lg:flex ">
                    <div className="w-[95px] h-[95px] lg:w-[110px] lg:h-[110px] rounded-full translate-y-[-50%] mx-auto lg:mx-0 lg:ml-10  overflow-hidden cursor-pointer">
                      <img
                        src="https://images.viblo.asia/128x128/0f34854c-4879-467f-a9ef-c5624d377108.jpg"
                        alt=""
                        className=" object-cover"
                      />
                    </div>
                    <p className=" text-[20px] font-bold leading-[23px] lg:ml-6 lg:mt-2 text-center lg:text-left mt-[-30px]">
                      Chào mừng, Vĩnh Trần <br />{" "}
                      <span className="text-[14px] md:text-[16px] font-normal">
                        Quản lý thông tin cá nhân của bạn và bảo mật với DevStar
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[15px] mt-10">
                    <div className="bg-gradient-to-r from-[#a1f0f0]  to-[#79a3f1]  text-center pt-5 pb-7 rounded-[5px] cursor-pointer card-item ">
                      <div className=" w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] mx-auto">
                        <img src={profile_icon} alt="" />
                      </div>
                      <p className="text-[20px] md:text-[24px] font-medium mt-3 text-white">
                        Thông tin cá nhân
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#a1f0f0]  to-[#79a3f1]  pt-5 pb-7 text-center rounded-[5px] cursor-pointer card-item">
                      <div className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] mx-auto">
                        <img src={contact_icon} alt="" />
                      </div>
                      <p className="text-[20px] md:text-[24px] font-medium mt-3 text-white">
                        Thông tin liên hệ
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#a1f0f0]  to-[#79a3f1]  pt-5 pb-7 text-center rounded-[5px] cursor-pointer card-item">
                      <div className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] mx-auto">
                        <img src={key_icon} alt="" />
                      </div>
                      <p className="text-[20px] md:text-[24px] font-medium mt-3 text-white">
                        Mật khẩu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;