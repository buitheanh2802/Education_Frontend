import React, { userState, useState } from "react";
import cover_img from "../../../Assets/media/pictures/cover_image.png";
import profile_icon from "../../../Assets/media/pictures/profile.png";
import contact_icon from "../../../Assets/media/pictures/contact.png";
import key_icon from "../../../Assets/media/pictures/digital-key.png";
import { Icon } from "src/Components/Icon";

const Profile = () => {
  const [BoxInfo, setBoxInfo] = useState(false);
  const [BoxSecurity, setBoxSecurity] = useState(false);
  return (
    <>
      <div className=" mx-auto mt-[75px] ">
        <div className="flex mt-10">
          <div className=" lg:w-[20%] bg-white shadow-lg rounded-[3px] 2xl:h-[90vh]">
            <div className="w-full">
              <div className="flex items-center py-[17px] hover:bg-blue-100 px-[20px]">
                <Icon.Home className="fill-current w-[25px] text-gray-400 " />
                <p className="ml-3 text-[15px] hidden lg:block">Trang Chủ</p>
              </div>
            </div>
            <div className="w-full " onClick={() => setBoxInfo(!BoxInfo)}>
              <div className="flex items-center justify-between py-[17px] hover:bg-blue-100 px-[20px]">
                <div className="flex items-center">
                  <Icon.Card className="fill-current w-[23px] text-gray-400" />
                  <p className="ml-3 text-[15px] hidden lg:block">Thông Tin</p>
                </div>
                <Icon.ArrowDown
                  className={
                    BoxInfo
                      ? "fill-current w-[12px] text-gray-400 hidden lg:block"
                      : "fill-current w-[12px] text-gray-400 rotate-180 hidden lg:block"
                  }
                />
              </div>
              <ul className={BoxInfo ? "hidden" : "w-full hidden lg:block"}>
                <li className="px-[45px] flex items-center hover:bg-blue-100 py-[13px]">
                  <Icon.User className="fill-current w-[18px] text-gray-400" />
                  <span className="ml-3 text-[15px] ">Thông Tin Cá Nhân</span>
                </li>
                <li className="px-[45px] flex items-center hover:bg-blue-100 py-[13px]">
                  <Icon.Card className="fill-current w-[18px] text-gray-400" />
                  <span className="ml-3 text-[15px]">Thông Tin Liên Hệ</span>
                </li>
              </ul>
            </div>
            <div
              className="w-full "
              onClick={() => setBoxSecurity(!BoxSecurity)}
            >
              <div className="flex items-center justify-between py-[17px] hover:bg-blue-100 px-[20px]">
                <div className="flex items-center">
                  <Icon.Shield className="fill-current w-[25px] text-gray-400" />
                  <p className="ml-3 text-[15px] hidden lg:block">Bảo Mật</p>
                </div>
                <Icon.ArrowDown
                  className={
                    BoxSecurity
                      ? "fill-current w-[12px] text-gray-400 hidden lg:block"
                      : "fill-current w-[12px] text-gray-400 rotate-180 hidden lg:block"
                  }
                />
              </div>
              <ul
                className={BoxSecurity ? " hidden" : "w-full hidden lg:block"}
              >
                <li className="px-[45px] flex items-center hover:bg-blue-100 py-[13px]">
                  <Icon.Key className="fill-current w-[22px] text-gray-400" />
                  <span className="ml-3 text-[15px]">Mật Khẩu</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[80%] px-[15px] md:px-[30px] ">
            <div className=" max-w-[1100px] mx-auto py-[20px] ">
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
                      <span className="text-[16px] font-normal">
                        Quản lý thông tin cá nhân của bạn và bảo mật với DevStar
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[15px] mt-10">
                    <div className="bg-gradient-to-r from-[#a1f0f0]  to-[#79a3f1]  text-center pt-5 pb-7 rounded-[5px] cursor-pointer card-item ">
                      <div className="w-[75px] h-[75px] mx-auto">
                        <img src={profile_icon} alt="" />
                      </div>
                      <p className="text-[24px] font-medium mt-3 text-white">
                        Thông tin cá nhân
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#a1f0f0]  to-[#79a3f1]  pt-5 pb-7 text-center rounded-[5px] cursor-pointer card-item">
                      <div className="w-[75px] h-[75px]  mx-auto">
                        <img src={contact_icon} alt="" />
                      </div>
                      <p className="text-[24px] font-medium mt-3 text-white">
                        Thông tin liên hệ
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#a1f0f0]  to-[#79a3f1]  pt-5 pb-7 text-center rounded-[5px] cursor-pointer card-item">
                      <div className="w-[75px] h-[75px] - mx-auto">
                        <img src={key_icon} alt="" />
                      </div>
                      <p className="text-[24px] font-medium mt-3 text-white">
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

export default Profile;
