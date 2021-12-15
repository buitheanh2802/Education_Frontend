import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Icon } from "src/Components/Icon";
import ProfileUserApi from "src/Apis/ProfileUserApi";
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";

const UserBookMark = (props) => {
  const username = props.match.params.username;
  const [userBookMark, setUserBookMark] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const userBookMark = async () => {
      try {
        dispatch(setLoading(true))
        const { data: bookMarkUser } = await ProfileUserApi.getBookmarkUser(username);
        setUserBookMark(bookMarkUser.data.models);
        console.log(bookMarkUser.data.models);
        dispatch(setLoading(false))
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
    userBookMark();
  }, []);

  return (
    <div className="">
      {userBookMark?.length == 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có gì ở đây cả
          </p>
        </div>
      ) : (
        <div className="w-full px-[10px] py-[15px] border-b lg:mt-0 md:mt-3">
          {userBookMark.map((item, index) => {
            return <>
              <div key={index} className="flex py-[10px] border-b">
                <div>
                  {item?.createBy?.avatar?.avatarUrl ?
                    <img
                      src={item?.createBy?.avatar?.avatarUrl}
                      className="mx-auto max-h-[40px] rounded-full"
                      width="40px"
                      height="40px"
                    />
                    :
                    <div className="py-[5px] text-[#4A5568] mx-auto text-center w-[40px] w-[40px] rounded-full bg-blue-300 font-bold text-[20px]">
                      {item?.createBy?.fullname?.toUpperCase().substring(0, 1)}
                    </div>
                  }
                </div>
                <div className="w-full ml-[10px]">
                  <Link to={`/user/${item?.createBy?.username}`} className="text-[#2d6ff7] inline-block hover:underline font-medium text-[15px]">
                    {item?.createBy?.fullname}
                  </Link>
                  <span className="px-[5px]  inline-block">-</span>
                  <div className=" inline-block">
                    <div className=" inline-block mr-[5px] pt-[0px]">
                      <Icon.Calendar className="fill-current w-[13px] " />
                    </div>
                    <div className=" inline-block">
                      <span className="col-span-4 text-[13px] text-[#707885]">
                        {item?.createdAt}
                      </span>
                    </div>
                  </div>
                  <h3 className="pr-[50px] my-[2px]">
                    <Link to={`/posts/${item?.slug}-${item?.shortId}`} className="font-medium text-[18px] hover:underline">
                      {item?.title}
                    </Link>
                    <span className="px-[5px]">-</span>
                    <button className="translate-y-[2px]">
                      {" "}
                      <Icon.Link className="w-[14px] fill-current text-[#666]" />
                    </button>
                  </h3>
                  <div className="flex  gap-[5px] my-[5px]">
                    {item?.tags.map((tag, index) => {
                      return (
                        <div key={index}>
                          <Link
                            to={`/tag/${tag?.slug}`}
                            className="block mx-0 hover:bg-gray-300 bg-[#e7e7e7] px-[10px] py-[2px] text-[#5f5f5f] lg:text-[12px] rounded-[3px]">
                            {tag?.name}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-[5px] ">
                    <div className="flex text-[14px] gap-[15px]">
                      <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                        <Icon.Eye className="fill-current w-[15px]" />
                        <span>{item?.views}</span>
                      </div>
                      <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                        <Icon.Chat className="fill-current w-[15px]" />
                        <span>{item.comments}</span>
                      </div>
                      <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                        <Icon.Bookmark className="fill-current w-[15px]" />
                        <span>{item.bookmarks}</span>
                      </div>
                    </div>
                    <Icon.Questions className="fill-current w-[20px] text-[#5f5f5f]" />
                  </div>
                </div>
              </div>
            </>
          })}
        </div>
      )}
    </div>
  );
};
export default UserBookMark;

