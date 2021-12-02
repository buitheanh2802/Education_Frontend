import React from "react";
import { Icon } from "src/Components/Icon";
const UserFollowing = ({ userFollowing }) => {
  return (
    <div>
      {userFollowing.length == 0 ? (
        <div>
        <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
          Không có gì ở đây cả
        </p>
      </div>
      ) : (
        <div className=" mx-auto">
          <div className="flex 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3">
            <div className="flex justify-between items-center my-[10px] gap-[50px] 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3">
              {userFollowing?.map((item, index) => {
                return (
                  <div key={index} className="flex py-[20px] px-[10px] mb-[20px] bg-white">
                    <div>
                      {item?.followingUserId?.avatar?.avatarUrl ? (
                        <img
                          src={item?.followingUserId?.avatar?.avatarUrl}
                          className="mx-auto max-h-[40px] rounded-full"
                          width="40px"
                          height="40px"
                        />
                      ) : (
                        <div className="py-[5px] text-[#4A5568] mx-auto text-center md:w-[40px] md:h-[40px] rounded-full bg-blue-300 font-bold text-[20px]">
                          {item?.followingUserId?.username?.toUpperCase().substring(0, 1)}
                        </div>
                      )}
                    </div>
                    <div className="ml-[12px] my-auto">
                      <div className="">
                        <h3 className="text-[16px] font-semibold inline-block">
                          {item?.followingUserId?.fullname}
                        </h3>
                      </div>
                      <div className=" flex">
                        <p className="text-center  ">
                          <span className="flex items-center text-[14px] text-gray-500">
                            <Icon.Point className="fill-current w-[10px] " />
                            <span className="text-[13px] mx-[2px]">
                              {item?.followingUserId?.points}
                            </span>
                          </span>
                        </p>
                        <p className="text-center ml-[10px] ">
                          <span className="flex items-center text-[14px] text-gray-500">
                            <Icon.Pen className="fill-current w-[10px]  " />
                            <span className="text-[13px] mx-[2px]">
                              {item?.followingUserId?.postCounts}
                            </span>
                          </span>
                        </p>{" "}
                        <p className="text-center ml-[10px]">
                          <span className="flex items-center text-[14px] text-gray-500">
                            <Icon.Questions className="fill-current w-[10px]  mx-[2px]" />
                            <span className="text-[13px] mx-[2px]">
                              {item?.followingUserId?.questionCounts}
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <button className="mt-[5px] mx-[20px] bg-[#fff] max-h-[35px] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#fdfdfd] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[12px] ">
                      + Theo dõi
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserFollowing;
