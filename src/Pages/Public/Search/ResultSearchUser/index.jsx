import React, { useState, useEffect } from "react";
import SearchApi from "src/Apis/SearchApi";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "src/Helpers/Timer";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ResultSearchUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search.substring(9, location.search.length);
  const [dataSearchUser, setDataSearchUer] = useState([]);
  const { profile } = useSelector((state) => state.Auth);
  useEffect(() => {
    const getData = async () => {
      const doc = document.querySelector(".result");
      const noneKey = document.querySelector(".noneKey");
      if (keyword === "") {
        doc.classList.add("hidden");
        noneKey.classList.remove("hidden");
        return;
      }
      try {
        doc.classList.remove("hidden");
        noneKey.classList.add("hidden");
        dispatch(setLoading(true));
        const { data: user } = await SearchApi.searchUser(keyword);
        setDataSearchUer(user.data.models);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
    getData();
  }, [keyword]);

  return (
    <div>
      {dataSearchUser?.length === 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có tác giả trùng khớp với từ khoá trên
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-x-[20px] gap-y-[40px] xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 px-[20px] pb-[30px]">
            {dataSearchUser?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="item md:text-[16px] text-[14px] w-max-[200px] px-[10px] py-[10px]"
                >
                  <Link
                    className="grid grid-cols-4 justify-center items-center"
                    to={`/user/${item?.username}`}
                  >
                    <div className="mx-auto">
                      {item?.avatar?.avatarUrl ? (
                        <img
                          src={item?.avatar?.avatarUrl}
                          alt="Avatar"
                          className="w-[60px] rounded-full"
                        />
                      ) : (
                        <div className="w-[60px] h-[60px] bg-blue-400 flex justify-center items-center rounded-full">
                          <p className="text-white text-[20px]">
                            {item?.fullname?.toUpperCase().substring(0, 1)}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="ml-[10px] col-span-3">
                      <div className="flex mb-[10px]">
                        <h3 className="text-[18px] leading-[20px] ">
                          {item?.fullname}
                        </h3>
                      </div>
                      <div className="flex gap-[10px]">
                        <p className="flex gap-[5px] text-[#8A8A8A] text-[14px]">
                          <Icon.Point className="fill-current w-[10px]" />
                          <span className="font-bold leading-[20px] ">
                            {item?.points}
                          </span>{" "}
                        </p>
                        <p className="flex gap-[5px] text-[#8A8A8A] text-[14px]">
                          <Icon.Pen className="fill-current w-[10px]" />
                          <span className="font-bold leading-[20px] ">
                            {item?.postCounts}
                          </span>{" "}
                        </p>
                        <p className="flex gap-[5px] text-[#8A8A8A] text-[14px]">
                          <Icon.User className="fill-current w-[10px] mx-[2px]" />
                          <span className="font-bold leading-[20px] ">
                            {item?.followerCounts}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* {item?.username === profile?.username ? (
                    <div className="w-[80%] mt-[10px] mx-auto text-center my-auto text-white border border-[#6C91F0] font-bold rounded text-[15px] bg-[#1273eb] hover:bg-blue-200 hover:text-[#6C91F0]">
                      <button
                        onClick={() => history.push("/profile/me")}
                        className="font-bold px-[10px] py-[5px]"
                      >
                        Xem thông tin
                      </button>
                    </div>
                  ) : item?.isFollowing ? (
                    <div
                      onClick={() => handleUnFollow(item.username)}
                      className="w-[80%] mt-[10px] mx-auto text-center my-auto text-white border border-[#6C91F0] font-bold rounded text-[15px] bg-[#1273eb] hover:bg-blue-200 hover:text-[#6C91F0]"
                    >
                      <button className="font-bold px-[20px] md:px-[30px] py-[5px]">
                        {" "}
                        - Bỏ theo dõi
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleFollow(item.username)}
                      className="w-[80%] mt-[10px] mx-auto text-center my-auto text-[#6C91F0] border border-[#6C91F0] font-bold rounded text-[15px] hover:bg-[#1273eb] hover:text-white"
                    >
                      <button className="font-bold px-[20px] md:px-[30px] py-[5px]">
                        {" "}
                        + Theo dõi
                      </button>
                    </div>
                  )} */}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultSearchUser;
