<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react'
import Navigation from '../Commons/Navigation'
import { path } from 'src/Constants/'
import { Icon } from 'src/Components/Icon'
import { Link } from 'react-router-dom'
import ProfileApi from 'src/Apis/ProfileApi'

const ProfilePage = (props) => {
    const [profile, setProfile] = useState([]);
    const { id } = props.match.params;
    useEffect(() => {
        const profile = async () => {
            try {
                const { data: profile } = await ProfileApi.get(id);
                console.log('pro', profile)
                setProfile(profile);
            } catch (error) {
                console.log("Failed to get data", error.response);
            }
        }
        profile();
    }, []);

    const [posts, setPost] = useState([]);
    useEffect(() => {
        const listPost = async () => {
            try {
                const { data: posts } = await ProfileApi.getPost();
                console.log('post', posts)
                setPost(posts);
            } catch (error) {
                console.log("Failed to get data", error.response);
            }
        }
        listPost();
    }, []);
    const pathName = [
        {
            path: path.POSTS,
            value: "Bài viết"
        },
        {
            path: path.PROFILE,
            value: "Câu hỏi"
        },
        {
            path: path.QUESTIONS_BOOK_MARK,
            value: "Bookmark của tôi"
        },
        {
            path: path.TAGS,
            value: "Tags"
        }
    ]
    const button = { path: path.QUESTIONS_CREATE, icon: Icon.questions, value: "Đặt câu hỏi" }

    return (
        <div className="container mx-auto mt-[80px]">
            <Navigation path={pathName} button={button} />
            <div className="mt-[15px] lg:grid lg:grid-cols-4 gap-3">
                <div className=" min-w-100 max-w-100 bg-white shadow rounded">
                    <div className="py-[5px] mx-[10px]">
                        <div className="py-[10px] bg-[#BEE3F8]">
                            <Link className="block">
                                <img className="mx-auto max-h-[80px] rounded-full" width="80px" src={profile?.avatar?.avatarUrl} alt={profile?.fullName} />
                            </Link>
                        </div>
                        <div >
                            <div className=" divide-y divide-light-blue-400 pb-[10px]">
                                <div className="grid md:grid-cols-3 lg:grid-cols-3 lg:gap-[3px] md:gap-[10px] my-[20px]">
                                    <div class="col-span-2">
                                        <Link className="font-semibold text-[#2D3748] md:text-[16px] sm:text-[16px] xl:text-[18px] lg:text-[14px] hover:underline">{profile?.fullName}</Link>
                                        <span></span>
                                        <br />
                                        <span className="lg:text-[13px] xl:text-[16px] sm:text-[14px] text-[#4A5568] ">{profile?.username}</span>
                                    </div>
                                    <div className="mt-2 md:text-right">
                                        <button className="bg-[#fff] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#BEE3F8] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">+ Theo dõi</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 xl:text-[15px] text-[12px] py-[15px]">
                                    <div className="mx-auto">
                                        {profile?.points && <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.Point className="fill-current w-[13px] mr-[5px]" />
                                                <span>Điểm</span>
                                            </div>
                                            <span>{profile?.points}</span>
                                        </div>}
                                    </div>
                                    <div className="mx-auto">
                                        {profile?.totalPost && <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.Pen className="fill-current w-[13px] mr-[5px]" />
                                                <span>Bài viết</span>
                                            </div>
                                            <span>{profile?.totalPost}</span>
                                        </div>}
                                    </div>
                                    <div className="mx-auto">
                                        {profile?.totalQuestions && <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.questions className="fill-current w-[13px] mr-[5px]" />
                                                <span>Câu hỏi</span>
                                            </div>
                                            <span>{profile?.totalQuestions}</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-[30px] xl:text-[15px] py-[15px] text-[13px]">
                                    <div className="mx-auto">
                                        {profile?.follows && <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.User className="fill-current w-[13px] mr-[5px]" />
                                                <span>Có {profile?.follows}</span>
                                            </div>
                                            <span>người theo dõi</span>
                                        </div>}
                                    </div>
                                    <div className="mx-auto">
                                        {profile?.followings && <div className="text-center gap-[5px] text-[#4A5568]">
                                            <div className="flex items-center">
                                                <Icon.Username className="fill-current w-[13px] mr-[5px]" />
                                                <span>Theo dõi</span>
                                            </div>
                                            <span>{profile?.followings} người dùng</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex flex-wrap">
                                        <h2 className="uppercase text-[#4A5568] font-medium py-[10px] ml-[5px] mr-[10px] text-[14px] xl:text-[16px]">Các kỹ năng</h2>
                                        <hr class="filler-line border-t-1 xl:mt-[28px] mt-[25px] border-[#4A5568] overflow-visible h-0 flex-grow" />
                                    </div>
                                    <div className="py-[5px] flex flex-wrap gap-[10px] mx-[10px] text-[14px]">
                                        {profile?.skills?.map((skill, indexSki) => {
                                            return (
                                                <Link key={indexSki} className="md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[15px] xl:py-[5px] xl:text-[14px] hover:bg-gray-300 text-[#4A5568] bg-[#BEE3F8] rounded">{skill}</Link>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 col-span-4 w-full shadow-sm bg-white rounded">
                    {posts?.map((item, index) => {
                        return (
                            <div key={index} className="w-full xl:grid-cols-5 md:grid md:grid-cols-4 px-[10px] py-[15px] border-b lg:mt-0 md:mt-3">
                                <div className="lg:mr-[35px]">
                                    <div className="grid grid-cols-6">
                                        <div className="pt-[2px]">
                                            <Icon.Calendar className="fill-current w-[13px] " />
                                        </div>
                                        <span className="col-span-5 text-[13px] text-[#707885]">T5, 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between mt-[5px]">
                                        <div className="flex text-[14px] gap-[15px]">
                                            <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                                <Icon.Chat className="fill-current w-[15px]" />
                                                <span>{item?.views}</span>
                                            </div>
                                            <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                                <Icon.Eye className="fill-current w-[15px]" />
                                                <span>{item?.views}</span>
                                            </div>
                                            <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                                <Icon.Bookmark className="fill-current w-[15px] text-[#5f5f5f]" />
                                                <span>{item?.views}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 md:col-span-3 xs:mt-5 sm:mt-3 md:mt-0 md:py-0 sm:py-5">
                                    <div className="flex">
                                        <div className="mr-[20px]">
                                            <Link to={item?.userId?.id} >
                                                <img className="max-h-[40px] rounded-full" width="40px" src={item?.userId?.avatar?.avatarUrl} alt={item?.userId?.fullName} />
                                            </Link>
                                        </div>
                                        <div className="w-full">
                                            <Link to={item?.userId?.id} className="text-[#2d6ff7] hover:underline font-medium text-[16px]" >{item?.userId?.fullName}</Link>
                                            <h3 className="pr-[50px] my-[5px] ">
                                                <Link to={item?.path} className="text-[18px] hover:underline">{item?.title}</Link>
                                            </h3>
                                            <div className="w-full gap-[5px] my-[10px] flex justify-between">
                                                <div className="flex-start">
                                                    {item?.tagsId?.map((tag, indexTag) => {
                                                        return (
                                                            <div className="inline-block mr-3">
                                                                <Link key={indexTag} className="hover:bg-gray-300 bg-[#EBF8FF] px-[15px] py-[3px] text-[#5f5f5f] lg:text-[12px] rounded-[3px]" >{tag}</Link>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="my-auto">
                                                    <Icon.Questions className="fill-current w-[20px] text-[#5f5f5f] text-right" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
>>>>>>> 6f4ded619cc428507011f8371be2555268d317eb
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
