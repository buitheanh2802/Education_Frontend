import React, { useState, useEffect } from "react";
import Navigation from "../Commons/Navigation";
import { path } from "src/Constants/";
import { Icon } from "src/Components/Icon";
import { Link } from "react-router-dom";
import ProfileApi from "src/Apis/ProfileApi";
import FollowApi from "src/Apis/FollowApi";

const ProfilePage = (props) => {
  const [profile, setProfile] = useState([]);
  const username = props.match.params.username;

  const handleFollow = async() => {
    const fol = !profile?.data?.isFollowing ? FollowApi.unFollow(username) : FollowApi.follow(username);
    await fol;
  }

  useEffect(() => {
    const profile = async () => {
      try {
        const { data: profile } = await ProfileApi.getUser(username);
        console.log("pro", profile.data);
        setProfile(profile);
      } catch (error) {
        console.log("Failed to get data", error.response);
      }
    };
    profile();
  }, []);

  const [posts, setPost] = useState([]);
  useEffect(() => {
    const listPost = async () => {
      try {
        // const { data: post } = await ProfileApi.;
        // setProfile(post);
      } catch (error) {
        console.log("Failed to get data", error.response);
      }
    };
    listPost();
  }, []);
  
  const pathName = [
    {
      path: path.POSTS,
      value: "Bài viết",
    },
    {
      path: path.PROFILE,
      value: "Câu hỏi",
    },
    {
      path: path.QUESTIONS_BOOK_MARK,
      value: "Bookmark của tôi",
    },
    {
      path: path.TAGS,
      value: "Tags",
    },
  ];
  const button = {
    path: path.QUESTIONS_CREATE,
    icon: Icon.questions,
    value: "Đặt câu hỏi",
  };

  return (
    <div className="container mx-auto mt-[80px]">
      <Navigation path={pathName} button={button} />
      <div className="mt-[15px] lg:grid lg:grid-cols-4 gap-3">
        <div className=" min-w-100 max-w-100 bg-white shadow rounded">
          <div className="py-[5px] mx-[10px]">
            <div className="py-[10px] bg-[#BEE3F8]">
              <Link className="block">
                { profile?.data?.avatar?.avatarUrl ? 
                  <img
                    className="mx-auto max-h-[70px] rounded-full"
                    width="70px" height="70px"
                    src={profile?.data?.avatar?.avatarUrl}
                    alt={profile?.data?.username} />
                  : 
                  <div className="py-[22px] text-[#4A5568] mx-auto text-center md:w-[70px] md:h-[70px] rounded-full bg-white text-[18px]">
                    {profile?.data?.username.toUpperCase().substring(0,1)}
                  </div>
                }   
              </Link>
            </div>
            <div>
              <div className=" divide-y divide-light-blue-400 pb-[10px]">
                <div className="grid md:grid-cols-3 lg:grid-cols-3 lg:gap-[3px] md:gap-[10px] my-[20px]">
                  <div class="col-span-2">
                    <Link className="font-semibold text-[#2D3748] md:text-[16px] sm:text-[16px] xl:text-[18px] lg:text-[14px] hover:underline">
                      {profile?.data?.fullname}
                    </Link>
                    <span></span>
                    <br />
                    <span className="lg:text-[13px] xl:text-[16px] sm:text-[14px] text-[#4A5568] ">
                      {profile?.data?.username}
                    </span>
                  </div>
                  <div className="mt-2 md:text-right">
                    <button onClick={() => handleFollow() } className="bg-[#fff] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#BEE3F8] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">
                    { !profile?.data?.isFollowing ? '- Bỏ theo dõi' : '+ Theo dõi' }  
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 xl:text-[15px] text-[12px] py-[15px]">
                  <div className="mx-auto">
                      <div className="text-center gap-[5px] text-[#4A5568]">
                        <div className="flex items-center">
                          <Icon.Point className="fill-current w-[13px] mr-[5px]" />
                          <span>Điểm</span>
                        </div>
                        <span>{profile?.data?.points}</span>
                      </div>
                  </div>
                  <div className="mx-auto">
                      <div className="text-center gap-[5px] text-[#4A5568]">
                        <div className="flex items-center">
                          <Icon.Pen className="fill-current w-[13px] mr-[5px]" />
                          <span>Bài viết</span>
                        </div>
                        <span>{profile?.data?.postCounts}</span>
                      </div>
                  </div>
                  <div className="mx-auto">
                      <div className="text-center gap-[5px] text-[#4A5568]">
                        <div className="flex items-center">
                          <Icon.questions className="fill-current w-[13px] mr-[5px]" />
                          <span>Câu hỏi</span>
                        </div>
                        <span>{profile?.data?.questionCounts}</span>
                      </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[30px] xl:text-[15px] py-[15px] text-[13px]">
                  <div className="mx-auto">
                      <div className="text-center gap-[5px] text-[#4A5568]">
                        <div className="flex items-center">
                          <Icon.User className="fill-current w-[13px] mr-[5px]" />
                          <span>Có {profile?.data?.followers}</span>
                        </div>
                        <span>người theo dõi</span>
                      </div>
                  </div>
                  <div className="mx-auto">
                      <div className="text-center gap-[5px] text-[#4A5568]">
                        <div className="flex items-center">
                          <Icon.Username className="fill-current w-[13px] mr-[5px]" />
                          <span>Theo dõi</span>
                        </div>
                        <span>{profile?.data?.followingCounts} người dùng</span>
                      </div>
                  </div>
                </div>
                {/* <div className="">
                  <div className="flex flex-wrap">
                    <h2 className="uppercase text-[#4A5568] font-medium py-[10px] ml-[5px] mr-[10px] text-[14px] xl:text-[16px]">
                      Các kỹ năng
                    </h2>
                    <hr class="filler-line border-t-1 xl:mt-[28px] mt-[25px] border-[#4A5568] overflow-visible h-0 flex-grow" />
                  </div>
                  <div className="py-[5px] flex flex-wrap gap-[10px] mx-[10px] text-[14px]">
                    {profile?.data?.skills?.map((skill, indexSki) => {
                      return (
                        <Link
                          key={indexSki}
                          className="md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[15px] xl:py-[5px] xl:text-[14px] hover:bg-gray-300 text-[#4A5568] bg-[#BEE3F8] rounded"
                        >
                          {skill}
                        </Link>
                      );
                    })}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-4 w-full shadow-sm bg-white rounded">
          {posts?.map((item, index) => {
            return (
              <div key={index}
                className="w-full xl:grid-cols-5 md:grid md:grid-cols-4 px-[10px] py-[15px] border-b lg:mt-0 md:mt-3"
              >
                <div className="lg:mr-[35px]">
                  <div className="grid grid-cols-6">
                    <div className="pt-[2px]">
                      <Icon.Calendar className="fill-current w-[13px] " />
                    </div>
                    <span className="col-span-5 text-[13px] text-[#707885]">
                      T5, 5:00 PM
                    </span>
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
                      <Link to={item?.userId?.id}>
                        <img
                          className="max-h-[40px] rounded-full"
                          width="40px"
                          src={item?.userId?.avatar?.avatarUrl}
                          alt={item?.userId?.fullName}
                        />
                      </Link>
                    </div>
                    <div className="w-full">
                      <Link to={item?.userId?.id}
                        className="text-[#2d6ff7] hover:underline font-medium text-[16px]"
                      >
                        {item?.userId?.fullName}
                      </Link>
                      <h3 className="pr-[50px] my-[5px] ">
                        <Link to={item?.path}
                          className="text-[18px] hover:underline"
                        >
                          {item?.title}
                        </Link>
                      </h3>
                      <div className="w-full gap-[5px] my-[10px] flex justify-between">
                        <div className="flex-start">
                          {item?.tagsId?.map((tag, indexTag) => {
                            return (
                              <div className="inline-block mr-3">
                                <Link
                                  key={indexTag}
                                  className="hover:bg-gray-300 bg-[#EBF8FF] px-[15px] py-[3px] text-[#5f5f5f] lg:text-[12px] rounded-[3px]"
                                >
                                  {tag}
                                </Link>
                              </div>
                            );
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
