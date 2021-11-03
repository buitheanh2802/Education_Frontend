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
<<<<<<< HEAD
        <PublicRouter exact path={path.HOME} component={HomePage} />
        <PublicRouter path={path.POSTS} component={PostPage} />
        <PublicRouter path={path.TAGS} component={TagsPage} />
        <PublicRouter path={path.USER_ID} component={Userpage} />
      </Switch>
      <Footer />
=======
      </Switch>
>>>>>>> b81ac7ea3f5fe5a1aaef9f42fd3885522d556881
    </>
  );
};

export default SiteLayout;
