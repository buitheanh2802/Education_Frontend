import React from "react";
import { Switch } from "react-router-dom";
import PublicRouter from "../Routes/PublicRouter";
import { path } from "../Constants";
import HomePage from "../Pages/Public/HomePage";
import Header from "../Pages/Public/Commons/Header";
import PostPage from "../Pages/Public/PostPage";
import QuestionsPage from "../Pages/Public/QuestionsPage";
import PostsCreate from "../Pages/Public/PostsCreate";
import PostsDetail from "src/Pages/Public/PostDetail";
import TagsPage from "src/Pages/Public/TagsPage";
import Userpage from "src/Pages/Public/UserPage";
import Footer from "src/Pages/Public/Commons/Footer";
import QuestionsDetail from "src/Pages/Public/QuestionsDetail";
import QuestionsCreate from "src/Pages/Public/QuestionsCreate";

const SiteLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <PublicRouter exact path={path.HOME} component={HomePage} />
        <PublicRouter path={path.POSTS_CREATE} component={PostsCreate} />
        <PublicRouter
          path={path.QUESTIONS_CREATE}
          component={QuestionsCreate}
        />
        <PublicRouter path={path.POSTS_ID} component={PostsDetail} />
        <PublicRouter path={path.QUESTION_ID} component={QuestionsDetail} />
        <PublicRouter path={path.POSTS} component={PostPage} />
        <PublicRouter path={path.QUESTIONS} component={QuestionsPage} />
        <PublicRouter exact path={path.HOME} component={HomePage} />
        <PublicRouter path={path.POSTS} component={PostPage} />
        <PublicRouter path={path.TAGS} component={TagsPage} />
        <PublicRouter path={path.USER_ID} component={Userpage} />
      </Switch>
      <Footer />
    </>
  );
};

export default SiteLayout;
