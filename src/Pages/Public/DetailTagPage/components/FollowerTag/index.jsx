import React from "react";
import { Link } from "react-router-dom";

const FollowerTag = ({ follower }) => {
  return (
    <>
      {follower?.length === 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có người theo dõi
          </p>
        </div>
      ) : (
        <div>
          {follower?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full px-[10px] py-[15px] border-b lg:mt-0 md:mt-3"
              >
                <div className="flex">
                  <div className="mx-[10px]">
                    <Link to={`/user/${item?.username}`}>
                      {item?.avatar?.avatarUrl ? (
                        <img
                          className="mx-auto max-h-[70px] rounded-full"
                          width="70px"
                          height="70px"
                          src={item?.avatar?.avatarUrl}
                          alt={item?.fullname}
                        />
                      ) : (
                        <div className="py-[8px] text-[#4A5568] mx-auto text-center md:w-[55px] md:h-[55px] rounded-full bg-blue-300 font-bold text-[28px]">
                          {item?.fullname.toUpperCase().substring(0, 1)}
                        </div>
                      )}
                    </Link>
                  </div>
                  <div className="w-full">
                    <Link
                      to={`/user/${item?.username}`}
                      className="text-[#2d6ff7] hover:underline font-medium text-[18px]"
                    >
                      {item?.fullname}
                    </Link>
                    <h3 className="pr-[50px] my-[5px]">
                      <Link
                        to={`/user/${item?.username}`}
                        className="font-medium text-[15px] hover:underline"
                      >
                        {item?.email}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FollowerTag;
