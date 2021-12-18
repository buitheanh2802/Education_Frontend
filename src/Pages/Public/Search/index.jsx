import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import SearchApi from "src/Apis/SearchApi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "src/Helpers/Timer";
import ResultSearchUser from "./ResultSearchUser";
import ResultSearchTag from "./ResultSearchTag";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import { useDispatch } from "react-redux";
import ResultSearchQuestion from "./ResultSearchQuestion";

const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const keyword = location.search.substring(9, location.search.length);
  const [dataSearchPost, setDataSearchPost] = useState([]);
  const [tabPost, setTabPost] = useState(true);
  const [tabQuestion, setTabQuestion] = useState(false);
  const [tabUser, setTabUser] = useState(false);
  const [tabTag, setTabTag] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const handleActivePost = () => {
    setTabPost(true);
    setTabQuestion(false);
    setTabUser(false);
    setTabTag(false);
  };
  const handleActiveQuestion = () => {
    setTabPost(false);
    setTabQuestion(true);
    setTabUser(false);
    setTabTag(false);
  };
  const handleActiveUser = () => {
    setTabPost(false);
    setTabQuestion(false);
    setTabUser(true);
    setTabTag(false);
  };
  const handleActiveTag = () => {
    setTabPost(false);
    setTabQuestion(false);
    setTabUser(false);
    setTabTag(true);
  };

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
        const { data: posts } = await SearchApi.searchPost(keyword);
        setDataSearchPost(posts.data.models);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
    getData();
  }, [keyword]);

  const EnterEvent = (e) => {
    e.preventDefault();
    history.push(`/search?keyword=${searchKey}`);
  };

  return (
    <>
      <div className="container mx-auto mt-[80px] mb-[20px] lg:hidden block">
        <div className="shadow-sm bg-white px-[10px] rounded gap-[15px] border">
          <form className="flex justify-center" onSubmit={(e) => EnterEvent(e)}>
            <input
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              type="text"
              className="px-[10px] w-[60%] rounded-l-lg py-[5px] border my-[8px] outline-none border border-blue-500"
              placeholder="Tìm kiếm..."
            />
            <button
              type="submit"
              className="md:block hidden bg-blue-500 hover:bg-blue-400 py-[6px] rounded-r-lg min-w-[100px] my-[8px] text-white outline-none"
            >
              Tìm kiếm
            </button>
            <button
              type="submit"
              className="md:hidden bg-blue-500 hover:bg-blue-400 py-[6px] rounded-r-lg px-[20px] my-[8px] text-white outline-none"
            >
              <Icon.SearchLarge className="w-[22px] h-[22px] cursor-pointer text-white fill-current" />
            </button>
          </form>
        </div>
      </div>
      <Tabs className="container mx-auto lg:mt-[80px] mb-[20px]">
        <div className="flex justify-between shadow-sm bg-white px-[10px] rounded gap-[15px] border">
          <TabList className="py-[15px] flex items-center overflow-x-auto w-full whitespace-nowrap">
            <Tab
              onClick={() => handleActivePost()}
              className={
                tabPost
                  ? "relative text-[15px] px-[10px] after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
                  : "relative cursor-pointer text-[15px] px-[10px] text-gray-600 hover:text-blue-600"
              }
            >
              Bài viết
            </Tab>
            <Tab
              onClick={() => handleActiveQuestion()}
              className={
                tabQuestion
                  ? "relative text-[15px] px-[10px] after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
                  : "relative cursor-pointer text-[15px] px-[10px] text-gray-600 hover:text-blue-600"
              }
            >
              Câu hỏi
            </Tab>
            <Tab
              onClick={() => handleActiveUser()}
              className={
                tabUser
                  ? "relative text-[15px] px-[10px] after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
                  : "relative cursor-pointer text-[15px] px-[10px] text-gray-600 hover:text-blue-600"
              }
            >
              Tác giả
            </Tab>
            <Tab
              onClick={() => handleActiveTag()}
              className={
                tabTag
                  ? "relative text-[15px] px-[10px] after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
                  : "relative cursor-pointer text-[15px] px-[10px] text-gray-600 hover:text-blue-600"
              }
            >
              Tag
            </Tab>
          </TabList>
        </div>
        <div className="mt-[15px] gap-[15px] flex justify-between">
          <div className="w-full shadow-sm bg-white px-[5px] rounded">
            <div className="my-[10px] gap-[15px] flex justify-between">
              <div className="hidden noneKey mx-auto">
                <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
                  Vui lòng nhập vào từ khoá tìm kiếm
                </p>
              </div>
              <div className="result w-full bg-white px-[5px] rounded">
                <TabPanel>
                  {dataSearchPost?.length === 0 ? (
                    <div>
                      <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
                        Không có bài viết trùng khớp với từ khoá trên
                      </p>
                    </div>
                  ) : (
                    <>
                      {dataSearchPost?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full flex px-[10px] py-[15px] border-b last:border-none"
                          >
                            <div className="mr-[15px] hidden sm:block">
                              {item?.createBy?.avatar?.avatarUrl?.length > 0 ? (
                                <Link to={`/user/${item?.createBy?.username}`}>
                                  <img
                                    className="mx-auto max-h-[40px] rounded-full"
                                    width="40px"
                                    height="40px"
                                    src={item?.createBy?.avatar?.avatarUrl}
                                    alt="Avatar"
                                  />
                                </Link>
                              ) : (
                                <Link
                                  to={`/user/${item?.createBy?.username}`}
                                  className="mt-[5px] flex justify-center font-bold items-center text-gray-500   border border-gray-300 bg-gray-200 cursor-pointer select-none w-[40px] h-[40px] rounded-full"
                                >
                                  {item?.createBy?.fullname
                                    ?.slice(0, 1)
                                    ?.toUpperCase()}
                                </Link>
                              )}
                            </div>
                            <div className="w-full">
                              <Link
                                to={`/user/${item?.createBy?.username}`}
                                className="text-[#2d6ff7] hover:underline font-medium text-[15px]"
                              >
                                {item?.createBy?.fullname}
                              </Link>
                              <span className="px-[5px]"> - </span>
                              <span className="text-[13px] text-[#707885]">
                                {timeFormatter(item?.createdAt)}
                              </span>
                              <h3 className="pr-[50px] mt-[5px]">
                                <Link
                                  to={`/posts/${item?.slug}-${item?.shortId}`}
                                  className="font-medium text-[18px] hover:underline"
                                >
                                  {item?.title}
                                </Link>
                                <span className="px-[5px]"> - </span>
                                <button className="translate-y-[2px]">
                                  {" "}
                                  <Icon.Link className="w-[14px] fill-current text-[#666]" />
                                </button>
                              </h3>
                              <div className="flex flex-wrap items-center gap-[10px] my-[10px]">
                                {item?.tags?.map((tag, indexTag) => {
                                  return (
                                    <Link
                                      to={`/tag/${tag?.slug}`}
                                      key={indexTag}
                                      className="block hover:bg-gray-300 bg-[#e7e7e7] px-[10px] py-[2px] text-[#5f5f5f] text-[12px] rounded-[3px]"
                                    >
                                      {tag?.name}
                                    </Link>
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
                                    <Icon.Like className="fill-current w-[15px]" />
                                    <span>{item?.countLikes}</span>
                                  </div>
                                  <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                    <Icon.Bookmark className="fill-current w-[14px]" />
                                    <span>{item?.countBookmarks}</span>
                                  </div>
                                </div>
                                <Icon.Pen className="fill-current w-[20px] text-[#5f5f5f]" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                </TabPanel>
                <TabPanel>
                  <ResultSearchQuestion />
                </TabPanel>
                <TabPanel>
                  <ResultSearchUser />
                </TabPanel>
                <TabPanel>
                  <ResultSearchTag />
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default SearchPage;
