import React from "react";
import { Switch } from "react-router-dom";
import PublicRouter from "../Routes/PublicRouter";
import { path } from "../Constants";
import HomePage from "../Pages/Public/HomePage";
import Header from "../Pages/Public/Commons/Header";
import PostPage from "../Pages/Public/PostPage";
import QuestionsPage from "../Pages/Public/QuestionsPage";
import TagsPage from "../Pages/Public/TagsPage";
import PostsDetail from "src/Pages/Public/PostsDetail";
import ContactPage from "src/Pages/Public/ContactPage";
import PostsCreate from "src/Pages/Public/PostsCreate";
import QuestionsCreate from "src/Pages/Public/QuestionsCreate";
import DetailTagPage from "src/Pages/Public/DetailTagPage";
import ProfilePage from "src/Pages/Public/ProfilePage";
import QuestionsDetail from "src/Pages/Public/QuestionsDetail";

const SiteLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <PublicRouter exact path={path.HOME} component={HomePage} />
        <PublicRouter path={path.TAGS} component={TagsPage} />
        <PublicRouter path={path.POSTS_DETAIL} component={PostsDetail} />
        <PublicRouter path={path.POSTS_CREATE} component={PostsCreate} />
        <PublicRouter path={path.CONTACT} component={ContactPage} />
        <PublicRouter
          path={path.QUESTIONS_CREATE}
          component={QuestionsCreate}
        />
        <PublicRouter path={path.POSTS} component={PostPage} />
        <PublicRouter path={path.QUESTIONS} component={QuestionsPage} />
        <PublicRouter path={path.QUESTIONS_DETAIL} component={QuestionsDetail} />
        <PublicRouter exact path={path.PROFILE} component={ProfilePage} />
        <PublicRouter exact path={path.TAGS_DETAIL} component={DetailTagPage} />
      </Switch>
    </>
  );
};

export default SiteLayout;
