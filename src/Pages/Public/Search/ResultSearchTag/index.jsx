import React, { useState, useEffect } from "react";
import SearchApi from "src/Apis/SearchApi";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "src/Helpers/Timer";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import { useDispatch } from "react-redux";

const ResultSearchTag = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const keyword = location.search.substring(9, location.search.length);
  const [dataSearchTag, setDataSearchTag] = useState([]);

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
        const { data: tag } = await SearchApi.searchTag(keyword);
        setDataSearchTag(tag.data.models);
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
      {dataSearchTag?.length === 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có tag trùng khớp với từ khoá trên
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-x-[20px] gap-y-[40px] xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 pb-[30px]">
            {dataSearchTag?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="item md:text-[16px] text-[14px] w-max-[200px] px-[10px] py-[10px]"
                >
                  <Link
                    className="grid grid-cols-3 gap-[10px] justify-center items-center"
                    to={`/tag/${item?.slug}`}
                  >
                    <div className="mx-auto">
                      {item?.avatar?.avatarUrl ? (
                        <img
                          src={item?.avatar?.avatarUrl}
                          alt=""
                          className="w-[80px] rounded-[5px]"
                        />
                      ) : (
                        <div className="w-[80px] h-[80px] bg-blue-400 flex justify-center items-center rounded-[5px]">
                          <p className="text-white text-[20px]">
                            {item?.name?.toUpperCase().substring(0, 1)}
                          </p>
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
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultSearchTag;
