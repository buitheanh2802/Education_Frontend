import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "src/Components/Icon";

const FeaturedAuthor = ({ authors }) => {
  return (
    <div>
      <h2 className="px-[5px] uppercase font-medium py-[10px] border-b mx-[5px] ">
        Các tác giả nổi bật
      </h2>
      <div className="py-[5px] mx-[10px]">
        {authors?.map((item, index) => {
          return (
            <div key={index} className="flex items-center">
              {item?.avatar?.avatarUrl?.length > 0 ? (
                <Link
                  to={`/user/${item?.username}`}
                  className="mt-[5px] mr-[15px] border border-gray-300 cursor-pointer select-none min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${item?.avatar?.avatarUrl})`,
                  }}
                  alt={item?.fullname}
                ></Link>
              ) : (
                <Link
                  to={`/user/${item?.username}`}
                  className="mt-[5px] mr-[15px] flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-full"
                >
                  {item?.fullname?.slice(0, 1)?.toUpperCase()}
                </Link>
              )}
              <div className="border-b py-[15px]">
                <div className="flex flex-wrap text-[#707885] items-center gap-[5px] mb-[5px]">
                  <Link
                    to={`/user/${item?.username}`}
                    className="text-[#2d6ff7] hover:underline"
                  >
                    {item?.fullname}
                  </Link>
                  <span>-</span>
                  <span className="text-[13px] text-[#707885] ">
                    {item?.username}
                  </span>
                </div>
                <div className="flex text-[13px] gap-[15px] items-center">
                  <div className="flex items-center gap-[5px] text-[#707885]">
                    <Icon.Point className="fill-current w-[13px]" />
                    <span>{item?.points}</span>
                  </div>
                  <div className="flex items-center gap-[5px] text-[#707885]">
                    <Icon.Pen className="fill-current w-[13px]" />
                    <span>{item?.postCounts}</span>
                  </div>
                  <div className="flex items-center gap-[5px] text-[#707885]">
                    <Icon.Questions className="fill-current w-[12px]" />
                    <span>{item?.questionCounts}</span>
                  </div>
                  <div className="flex items-center gap-[5px] text-[#707885]">
                    <Icon.Follower className="fill-current w-[13px]" />
                    <span>{item?.followers}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedAuthor;
