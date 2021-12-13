import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchApi from "src/Apis/SearchApi";
import Loading from "src/Components/Loading";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import QuestionView from "../Commons/QuestionView";
import FeaturedAuthor from "../Commons/FeaturedAuthor";
import TrendingTags from "../Commons/TrendingTags";
import UserApi from "src/Apis/UserApi";
import TagAPi from "src/Apis/TagApi";
import { Icon } from "src/Components/Icon";
import { timeFormatter } from "src/Helpers/Timer";

const SearchPage = () => {
  const history = useHistory();
  const keyword = new URLSearchParams(history.location.search).get("keyword");
  const [dataSearch, setDataSeach] = useState([]);
  const [dataSearchPost, setDataSearchPost] = useState([]);
  const [dataSearchQuestion, setDataSearchQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredAuthor, setFeaturedAuthor] = useState([]);
  const [tagPopular, setTagPopular] = useState([]);
  const [tabPost, setTabPost] = useState(true);
  const [tabQuestion, setTabQuestion] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        const condition = { title: keyword };
        const { data } = await SearchApi.Search(condition);
        const dataNewQuestion = data?.data?.modelsQuestion?.filter(
          (data) => data.spam === false
        );
        setDataSearchQuestion(dataNewQuestion);
        setDataSearchPost(data?.data?.modelsPost);
        setLoading(false);
      })();

      const listFeaturedAuthor = async () => {
        try {
          const { data: FeaturedAuthor } = await UserApi.getFeaturedAuthor();
          setFeaturedAuthor(FeaturedAuthor?.data);
        } catch (error) {
          console.log(error);
        }
      };
      listFeaturedAuthor();

      const listTagPopular = async () => {
        try {
          const { data: tagsPopular } = await TagAPi.getTagPopular();
          setTagPopular(tagsPopular?.data);
        } catch (error) {
          console.log(error);
        }
      };
      listTagPopular();
    } catch (error) { }
  }, [keyword]);
  // console.log("post", dataSearchPost);
  // console.log("question", dataSearchQuestion);

  const handleActivePost = () => {
    setTabPost(true);
    setTabQuestion(false);
  };
  const handleActiveQuestion = () => {
    setTabPost(false);
    setTabQuestion(true);
  };
  return (
    <>
      {loading && <Loading />}
      <Tabs className="container mx-auto mt-[80px] mb-[20px]">
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
                  ? "relative text-[15px] px-[10px]  after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
                  : "relative cursor-pointer text-[15px] px-[10px] text-gray-600 hover:text-blue-600"
              }
            >
              Câu hỏi
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
                                <Link
                                  to={`/user/${item?.createBy?.username}`} >
                                  <img
                                    className="mx-auto max-h-[40px] rounded-full"
                                    width="40px" height="40px"
                                    src={item?.createBy?.avatar?.avatarUrl}
                                    alt="Avatar" />
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
                                    <Icon.Chat className="fill-current w-[15px]" />
                                    <span>{item?.comments}</span>
                                  </div>
                                  <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                    <Icon.Bookmark className="fill-current w-[15px]" />
                                    <span>{item?.bookmarks}</span>
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
              </div>
            </div>
          </div>
          <div className="w-[350px] min-w-[350px] max-w-[350px] bg-white shadow rounded">
            <FeaturedAuthor authors={featuredAuthor} />
            <TrendingTags tags={tagPopular} />
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default SearchPage;
