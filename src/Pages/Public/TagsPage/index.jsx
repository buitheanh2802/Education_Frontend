import React, { useEffect, useState } from "react";
import Navigation from "../Commons/Navigation";
import FeaturedAuthor from "../Commons/FeaturedAuthor";
import { path } from "src/Constants/";
import { Icon } from "../../../Components/Icon";
import TagAPi from "src/Apis/TagApi";
import { data } from "autoprefixer";
const TagsPage = () => {
 
  // navigation
  const pathName = [
    {
      path: path.TAGS,
      value: "Mới cập nhật",
    },
    {
      path: path.TAGS_ID,
      value: "Thịnh hành",
    },
    {
      path: path.TAGS_FLOW,
      value: "Đang theo dõi",
    },
  ];

  const button = {
    path: path.QUESTIONS_CREATE,
    icon: Icon.questions,
    value: "Đặt câu hỏi",
  };

  // authors
  const authors = [
    {
      path: "/",
      fullname: "Nguyễn Thành Đạt",
      username: "@nguyenthanhdat",
      avatar:
        "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
      point: 567,
      question: 234,
      folow: 345,
    },
    {
      path: "/",
      fullname: "Nguyễn Thành Đạt",
      username: "@nguyenthanhdat",
      avatar:
        "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
      point: 567,
      question: 234,
      folow: 345,
    },
  ];
  const [tag, setTag] = useState([]);
  useEffect(() => {
    const tag = async () => {
      try {
        const { data: tags } = await TagAPi.getAll();
        setTag(tags.data.models);
      } catch (error) {
        console.log(error);
      }
    };
    tag();
  }, []);
  return (
    <div className="container mx-auto mt-[80px]  ">
      <Navigation path={pathName} button={button} />
      <div className="flex justify-between mt-[15px]  gap-[30px] ">
        <div className="flex justify-between  max-[200px] px-[15px] sm:px-[35px] xl:gap-x-[95px]  sm:gap-x-[60px]  gap-y-[20px] mb-[30px] pb-[45px] w-full  py-[15px] bg-white shadow rounded  ">
          <div className="grid grid-cols-1 gap-[20px] xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2">
            {tag.map((item, index) => {
              console.log(item);

              return (
                <div className="item md:text-[16px] text-[14px] w-max-[200px]  ">
                  <div className="grid grid-cols-2 justify-center items-center ">
                    <div className="">
                      <img
                        src={item.avatar.avatarUrl}
                        alt=""
                        className="w-[80px]"
                      />
                    </div>
                    <div className="">
                      <div className="flex items-center">
                        <h3 className="text-[20px] leading-[30px] ">
                          {item.name}
                        </h3>
                        <Icon.Star className="w-[14px] ml-[10px] " />
                      </div>
                      <p className="text-[#8A8A8A] text-[14px]">
                        <span className="font-bold leading-[20px] ">
                          {item.postCounts}
                        </span>{" "}
                        Bài viết
                      </p>
                      <p className="text-[#8A8A8A] text-[14px]">
                        <span className="font-bold leading-[20px] ">
                          {item.questionCounts}
                        </span>{" "}
                        Câu hỏi
                      </p>
                      <p className="text-[#8A8A8A] text-[14px]">
                        <span className="font-bold leading-[20px] ">
                          {item.followerCounts}
                        </span>{" "}
                        Người theo dõi
                      </p>
                    </div>
                  </div>

                  {item.isFollowing ? (
                    <div className="mt-[5px] mx-[15px] xl:[mx-10px] text-center  my-auto   border border-[#6C91F0] font-bold rounded   text-[15px] bg-[#1273eb] :text-white">
                      <button className="font-bold  px-[20px] md:px-[30px] py-[5px] ">
                        {" "}
                        - Bỏ theo dõi
                      </button>
                    </div>
                  ) : (
                    <div className="mt-[5px] mx-[15px] xl:[mx-10px] text-center  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded   text-[15px] hover:bg-[#1273eb] hover:text-white">
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
        <div className="w-[350px] min-w-[350px] max-w-[350px] bg-white shadow rounded hidden lg:block">
          <FeaturedAuthor authors={authors} />
        </div>
      </div>
    </div>
  );
};
export default TagsPage;
