import React, { useState, useEffect } from "react";
import Navigation from "../Commons/Navigation";
import QuestionView from "../Commons/QuestionView";
import FeaturedAuthor from "../Commons/FeaturedAuthor";
import TrendingTags from "../Commons/TrendingTags";
import { path } from "src/Constants/";
import { Icon } from "src/Components/Icon";
import QuestionApi from "src/Apis/QuestionApi";
import { useLocation } from "react-router";
import Loading from "src/Components/Loading";
import UserApi from "src/Apis/UserApi";
import TagAPi from "src/Apis/TagApi";
const QuestionsPage = () => {
  // navigation
  const location = useLocation();
  const [questions, setQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredAuthor, setFeaturedAuthor] = useState([]);
  const [tagPopular, setTagPopular] = useState([]);

  const pathName = [
    {
      path: path.QUESTIONS,
      value: "Mới cập nhật",
    },
    {
      path: path.QUESTIONS_FLOW,
      value: "Đang theo dõi",
    },
    {
      path: path.QUESTIONS_BOOK_MARK,
      value: "Bookmark của tôi",
    },
  ];
  const button = {
    path: path.QUESTIONS_CREATE,
    icon: Icon.questions,
    value: "Đặt câu hỏi",
  };

  // tags
  const tags = [
    {
      path: "/",
      value: "NodeJS",
    },
  ];
  useEffect(() => {
    const listQuestion = async () => {
      try {
        let endPoint;
        if (location.pathname === "/questions") {
          endPoint = "";
        } else if (location.pathname === "/questions/follow") {
          endPoint = "follow";
        } else {
          endPoint = "listbookmark";
        }
        const { data: questions } = await QuestionApi.getQuestion(endPoint);
        const dataNew = questions?.data?.models?.filter(
          (data) => data.spam === false
        );
        // console.log(dataNew);
        setQuestion(dataNew);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error", error.sesponse);
      }
    };
    listQuestion();

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
  }, [location.pathname]);
  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Loading className="w-[40px] h-[40px] fill-current text-gray-500" />
      </div>
    );
  return (
    <div className="container mx-auto mt-[80px] mb-[20px]">
      <Navigation path={pathName} button={button} />
      <div className="mt-[15px] gap-[15px] flex justify-between">
        <div className="w-full shadow-sm bg-white px-[5px] rounded">
          <QuestionView questions={questions} />
        </div>
        <div className="w-[350px] min-w-[350px] max-w-[350px] bg-white shadow rounded">
          <FeaturedAuthor authors={featuredAuthor} />
          <TrendingTags tags={tagPopular} />
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
