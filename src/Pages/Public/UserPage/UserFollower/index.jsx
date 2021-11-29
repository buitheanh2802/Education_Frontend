import React from "react";
import { Icon } from "src/Components/Icon";
import { Link } from "react-router-dom";
const UserFollower = ({ userFollower }) => {
  console.log("userFollower", userFollower);
  return (
    <div className="container mx-auto">
      {userFollower.length == 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có gì ở đây cả
          </p>
        </div>
      ) : (
        <div className="flex grid-cols-4 ">
          <div className="flex justify-between items-center gap-[50px]">
            {userFollower.map((item, index) => {
              return (
                <div key={index} className="flex py-[20px] px-[10px] mb-[20px] bg-white">
                  <div className="">
                    <img
                      src="https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg"
                      className="mx-auto max-h-[40px] rounded-full "
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div className="ml-[12px] my-auto">
                    <div className="">
                      <h3 className="text-[16px] font-semibold inline-block">
                        {item.fullname}
                      </h3>
                    </div>
                    <div className=" flex">
                      <p className="text-center  ">
                        <span className="flex items-center text-[14px] text-gray-500">
                          <Icon.Point className="fill-current w-[10px] " />
                          <span className="text-[13px] mx-[2px]">
                            {item.points}
                          </span>
                        </span>
                      </p>
                      <p className="text-center ml-[10px] ">
                        <span className="flex items-center text-[14px] text-gray-500">
                          <Icon.Pen className="fill-current w-[10px]  " />
                          <span className="text-[13px] mx-[2px]">
                            {item.postCounts}
                          </span>
                        </span>
                      </p>{" "}
                      <p className="text-center ml-[10px]">
                        <span className="flex items-center text-[14px] text-gray-500">
                          <Icon.Questions className="fill-current w-[10px]  mx-[2px]" />
                          <span className="text-[13px] mx-[2px]">
                            {item.questionCounts}
                          </span>
                        </span>
                      </p>
                    </div>
                    <button className="mt-[5px] bg-[#fff] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#fdfdfd] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[12px] ">
                      + Theo dõi
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserFollower;
