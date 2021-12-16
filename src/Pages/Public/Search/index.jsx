import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchApi from "src/Apis/SearchApi";
import Loading from "src/Components/Loading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import QuestionView from "../Commons/QuestionView";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "src/Helpers/Timer";
import ResultSearchUser from "./ResultSearchUser";
import ResultSearchTag from "./ResultSearchTag";

const SearchPage = () => {
  const history = useHistory();
  const [dataSearchPost, setDataSearchPost] = useState([]);
  const [dataSearchQuestion, setDataSearchQuestion] = useState([]);
  const [dataSearchUser, setDataSearchUer] = useState([]);
  const [dataSearchTag, setDataSearchTag] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabPost, setTabPost] = useState(true);
  const [tabQuestion, setTabQuestion] = useState(false);
  const [tabUser, setTabUser] = useState(false);
  const [tabTag, setTabTag] = useState(false);

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

  return (
    <>
      {/* {loading && <Loading />} */}
      <div className="container mx-auto mt-[80px] mb-[20px]">
        <div className="shadow-sm bg-white px-[10px] rounded gap-[15px] border">
          <form className="flex justify-center">
            <input
              type="password"
              className="px-[10px] w-[350px] rounded-l-lg py-[5px] border my-[8px] outline-none border border-blue-500"
              placeholder="Tìm kiếm..."
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 py-[6px] rounded-r-lg min-w-[100px] my-[8px] text-white outline-none"
            >
              Tìm kiếm
            </button>
          </form>
        </div>
      </div>
      <Tabs className="container mx-auto mb-[20px]">
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
            <div className="mt-[15px] gap-[15px] flex justify-between">
              <div className="w-full shadow-sm bg-white px-[5px] rounded">
                <TabPanel>
                  {dataSearchPost?.length === 0 ? (
                    <div>
                      <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
                        Không có gì ở đây cả
                      </p>
                    </div>
                  ) : (
                    <>
                      {dataSearchPost?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full flex px-[10px] py-[15px] border-b"
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
                  <QuestionView questions={dataSearchQuestion} />
                </TabPanel>
                <TabPanel>
                  <ResultSearchUser dataSearchUser={dataSearchUser} />
                </TabPanel>
                <TabPanel>
                  <ResultSearchTag dataSearchTag={dataSearchTag} />
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
