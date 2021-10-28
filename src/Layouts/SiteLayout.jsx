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

const SiteLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <PublicRouter exact path={path.HOME} component={HomePage} />
        <PublicRouter path={path.POSTS_CREATE} component={PostsCreate} />
        <PublicRouter path={path.POSTS_ID} component={PostsDetail} />
        <PublicRouter path={path.POSTS} component={PostPage} />
        <PublicRouter path={path.QUESTIONS} component={QuestionsPage} />
      </Switch>
    </>
  );
};

export default SiteLayout;
