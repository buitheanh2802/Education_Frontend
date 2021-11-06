import React from "react";
import { Icon } from "src/Components/Icon";
import { Link } from "react-router-dom";
const UserTag = ({ userTag }) => {
  console.log(userTag);
  return (
    <div>
        {userTag.length==0 ? (
            <div>
            <p className="text-center text-[18px] leading-[30px] my-[10px] py-[35px] font-bold text-gray-500">
              Không có gì ở đây cả
            </p>
          </div>
        ) :
        <div className="flex justify-between  max-[200px] px-[15px] sm:px-[35px] xl:gap-x-[95px]  sm:gap-x-[60px]  gap-y-[20px] mb-[30px] pb-[45px] w-full  py-[15px] bg-white shadow rounded  ">
        <div className="grid grid-cols-1 gap-[20px] 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2">
          {userTag.map((item, index) => {
            return (
              <div
                key={index}
                className="item md:text-[16px] text-[14px] w-max-[220px]"
              >
                <Link
                  className="grid grid-cols-3  justify-center items-center"
                  to={`/tags/${item?.slug}`}
                >
                  <div className="col-span-1">
                    {item.avatar.avatarUrl ? (
                      <img
                        src={item.avatar.avatarUrl}
                        alt=""
                        className="w-[80px] "
                      />
                    ) : (
                      <div className="w-[80px] h-[75px] bg-blue-400 flex justify-center items-center ">
                        <p className="text-white text-[12px]">{item.name}</p>
                      </div>
                    )}
                  </div>
                  <div className="col-span-2 ml-[10px]">
                    <div className="flex items-center">
                      <h3 className="text-[18px] leading-[20px] ">
                        {item?.name}
                      </h3>
                      <Icon.Star className="w-[14px] ml-[10px] " />
                    </div>
                    <p className="text-[#8A8A8A] text-[14px]">
                      <span className="font-bold leading-[20px] ">
                        {item?.postCounts}
                      </span>{" "}
                      Bài viết
                    </p>
                    <p className="text-[#8A8A8A] text-[14px]">
                      <span className="font-bold leading-[20px] ">
                        {item?.questionCounts}
                      </span>{" "}
                      Câu hỏi
                    </p>
                    <p className="text-[#8A8A8A] text-[14px]">
                      <span className="font-bold leading-[20px] ">
                        {item?.followerCounts || item?.followers}
                      </span>{" "}
                      Người theo dõi
                    </p>
                  </div>
                </Link>

                {item?.isFollowing ? (
                  <div className="mt-[5px] xl:[mx-10px] text-center  my-auto   border border-[#6C91F0] font-bold rounded   text-[15px] bg-[#1273eb] :text-white">
                    <button className="font-bold  px-[20px] md:px-[30px] py-[5px] ">
                      {" "}
                      - Bỏ theo dõi
                    </button>
                  </div>
                ) : (
                  <div className="mt-[5px]  xl:[mx-10px] text-center  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded   text-[15px] hover:bg-[#1273eb] hover:text-white">
                    <button className="font-bold px-[20px] md:px-[30px] py-[5px] ">
                      {" "}
                      + Theo dõi
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    }
    
    </div>
  );
};
export default UserTag;
