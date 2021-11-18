import React, { useState, useEffect } from "react";
import Navigation from "../Commons/Navigation";
import QuestionView from "../Commons/QuestionView";
import FeaturedAuthor from "../Commons/FeaturedAuthor";
import TrendingTags from "../Commons/TrendingTags";
import { path } from "src/Constants/";
import { Icon } from "src/Components/Icon";
import QuestionApi from "src/Apis/QuestionApi";
import { useLocation } from "react-router";
const QuestionsPage = () => {
  // navigation
  const location = useLocation();
  const [questions, setQuestion] = useState([]);
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

  // authors
  const authors = [
    {
      path: "/",
      fullname: "Nguyễn Thành Đạt Phò",
      username: "@nguyenthanhdat",
      avatar:
        "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
      point: 567,
      question: 234,
      folow: 345,
    },
  ];

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
        // const { data: questions } = await QuestionApi.getQuestion();
        const { data: questions } = await QuestionApi.getQuestion(endPoint);
        setQuestion(questions);
      } catch (error) {
        console.log("Error", error.sesponse);
      }
    };
    listQuestion();
  }, [location.pathname]);
  return (
    <div className="container mx-auto mt-[80px] mb-[20px]">
      <Navigation path={pathName} button={button} />
      <div className="mt-[15px] gap-[15px] flex justify-between">
        <div className="w-full shadow-sm bg-white px-[5px] rounded">
          <QuestionView questions={questions} />
        </div>
        <div className="w-[350px] min-w-[350px] max-w-[350px] bg-white shadow rounded">
          <FeaturedAuthor authors={authors} />
          <TrendingTags tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
