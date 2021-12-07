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
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { setLoading } from "src/Redux/Slices/Loading.slice";

const QuestionsPage = () => {
  // navigation
  const location = useLocation();
  const [questions, setQuestion] = useState([]);
  const [featuredAuthor, setFeaturedAuthor] = useState([]);
  const [tagPopular, setTagPopular] = useState([]);
  const [newests, setNewests] = useState([]);
  const [trendings, setTrendings] = useState([]);
  const [follows, setFollows] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const dispatch = useDispatch();

  const pathName = [
    {
      path: path.QUESTIONS,
      value: "Mới cập nhật",
    },
    {
      path: path.QUESTIONS_TRENDING,
      value: "Câu hỏi nổi bật",
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

  useEffect(() => {
    const listQuestion = async () => {
      try {
        dispatch(setLoading(true));
        if (location.pathname === path.QUESTIONS) {
          const { data: newests } = await QuestionApi.getQuestion();
          const dataNew = newests?.data?.models?.filter(
            (data) => data.spam === false
          );
          setNewests(dataNew);
          dispatch(setLoading(false));
        } else if (location.pathname === path.QUESTIONS_TRENDING) {
          const { data: trendings } = await QuestionApi.getQuestionTren();
          const dataNew = trendings?.data?.models?.filter(
            (data) => data.spam === false
          );
          setTrendings(dataNew);
          dispatch(setLoading(false));
        } else if (location.pathname === path.QUESTIONS_FLOW) {
          const token = localStorage.getItem("_token_");
          if (token) {
            const { data: follows } = await QuestionApi.getQuestionFol();
            const dataNew = follows?.data?.models?.filter(
              (data) => data.spam === false
            );
            setFollows(dataNew);
            dispatch(setLoading(false));
          }
        } else if (location.pathname === path.QUESTIONS_BOOK_MARK) {
          const token = localStorage.getItem("_token_");
          if (token) {
            const { data: bookmarks } = await QuestionApi.getQuestionBookmark();
            const dataNew = bookmarks?.data?.models?.filter(
              (data) => data.spam === false
            );
            setBookmarks(dataNew);
            dispatch(setLoading(false));
          }
        }
      } catch (error) {
        console.log(error);
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

  return (
    <div className="container mx-auto mt-[80px] mb-[20px]">
      <Navigation path={pathName} button={button} />
      <div className="mt-[15px] gap-[15px] flex justify-between">
        <div className="w-full shadow-sm bg-white px-[5px] rounded">
          <Switch>
            <Route
              exact
              path={path.QUESTIONS}
              render={(props) => (
                <QuestionView questions={newests} {...props} />
              )}
            ></Route>
            <Route
              exact
              path={path.QUESTIONS_TRENDING}
              render={(props) => (
                <QuestionView questions={trendings} {...props} />
              )}
            ></Route>
            <Route
              exact
              path={path.QUESTIONS_FLOW}
              render={(props) => (
                <QuestionView questions={follows} {...props} />
              )}
            ></Route>
            <Route
              exact
              path={path.QUESTIONS_BOOK_MARK}
              render={(props) => (
                <QuestionView questions={bookmarks} {...props} />
              )}
            ></Route>
          </Switch>
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
