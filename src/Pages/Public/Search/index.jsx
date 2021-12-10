import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import SearchApi from "src/Apis/SearchApi";
import Loading from "src/Components/Loading";
import { path } from "src/Constants/";
import Navigation from "../Commons/Navigation";

const SearchPage = () => {
  const history = useHistory();
  const keyword = new URLSearchParams(history.location.search).get("keyword");
  const [dataSearch, setDataSeach] = useState([]);
  const [dataSearchPost, setDataSearchPost] = useState([]);
  const [dataSearchQuestion, setDataSearchQuestion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const condition = { title: keyword };
        const { data } = await SearchApi.Search(condition);
        setDataSearchQuestion(data?.data?.modelsQuestion);
        setDataSearchPost(data?.data?.modelsPost);
        setLoading(false);
      })();
    } catch (error) {}
  }, [keyword]);
  console.log("post", dataSearchPost);
  console.log("question", dataSearchQuestion);
  //   const pathName = [
  //     {
  //       path: path.SEARCH_POST,
  //       value: "Bài viết",
  //     },
  //     {
  //       path: path.SEARCH_QUESTIONS,
  //       value: "Câu hỏi",
  //     },
  //   ];
  //   console.log("abc", pathName);
  return (
    // <div className="mt-[100px]">
    //   {loading && <Loading />}
    //   vinh dep trai
    // </div>
    <>
      {loading && <Loading />}
      <div className="container mx-auto mt-[80px] mb-[20px]">
        {/* <Navigation path={pathName} />
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
        </div> */}
      </div>
    </>
  );
};

export default SearchPage;
