import React from "react";
import { Switch } from "react-router-dom";
import PublicRouter from "../Routes/PublicRouter";
import { path } from "../Constants";
import HomePage from "../Pages/Public/HomePage";
import Header from "../Pages/Public/Commons/Header";
import PostPage from "../Pages/Public/PostPage";
import QuestionsPage from "../Pages/Public/QuestionsPage";
import Notfound from "src/Pages/Public/Notfound";
import Footer from "src/Pages/Public/Commons/Footer";
import ChallengeCatePage from "src/Pages/Public/ChallengeCatePage";
import ChallengePage from "src/Pages/Public/ChallengePage";
import QuizPage from "src/Pages/Public/QuizPage";
import DetailChallenge from "src/Pages/Public/DetailChallenge";
import SolutionPage from "src/Pages/Public/SolutionPage";
import TagsPage from "../Pages/Public/TagsPage";
import PostsCreate from "src/Pages/Public/PostsCreate";
import Userpage from "src/Pages/Public/UserPage";
import DetailTagPage from "src/Pages/Public/DetailTagPage";
import IntroPage from "src/Pages/Public/IntroPage/IntroPage";
import EditProfile from "src/Pages/Public/EditProfile";
import ProfilePage from "src/Pages/Public/ProfilePage";
import QuestionsDetail from "src/Pages/Public/QuestionsDetail";
import QuestionsCreate from "src/Pages/Public/QuestionsCreate";
import QuestionUpdate from "src/Pages/Public/QuestionUpdate";
import PostsDetail from "src/Pages/Public/PostDetail";
import PostUpdate from "src/Pages/Public/PostUpdate";
import ContactPage from "src/Pages/Public/ContactPage";
import SearchPage from "src/Pages/Public/Search";
import SolutionDetail from "src/Pages/Public/SolutionDetail";
import ListUserPage from "src/Pages/Public/ListUserPage";

const SiteLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <PublicRouter
          exact
          path={path.SOLUTION_ID}
          component={SolutionDetail}
        />
        <PublicRouter path={path.USERS} component={ListUserPage} />
        <PublicRouter exact path={path.CONTACT} component={ContactPage} />
        <PublicRouter exact path={path.SEARCH} component={SearchPage} />
        <PublicRouter path={path.QUESTIONS_UPDATE} component={QuestionUpdate} />
        <PublicRouter
          path={path.QUESTIONS_DETAIL}
          component={QuestionsDetail}
        />
        <PublicRouter
          path={path.QUESTIONS_CREATE}
          component={QuestionsCreate}
        />
        <PublicRouter exact path={path.POSTS_UPDATE} component={PostUpdate} />
        <PublicRouter exact path={path.POSTS_ID} component={PostsDetail} />
        <PublicRouter path={path.TAGS} component={TagsPage} />
        <PublicRouter path={path.USER_ID} component={Userpage} />
        <PublicRouter path={path.INTRO} component={IntroPage} />
        <PublicRouter exact path={path.EDIT_PROFILE} component={EditProfile} />
        <PublicRouter exact path={path.PROFILE} component={ProfilePage} />
        <PublicRouter path={path.CHALLENGE_ID} component={DetailChallenge} />
        <PublicRouter path={path.TAGS_ID} component={DetailTagPage} />
        <PublicRouter exact path={path.HOME} component={HomePage} />
        <PublicRouter path={path.QUESTIONS} component={QuestionsPage} />
        <PublicRouter path={path.POSTS_CREATE} component={PostsCreate} />
        <PublicRouter path={path.POSTS} component={PostPage} />
        <PublicRouter path={path.PROFILE_CHANGE} component={EditProfile} />
        <PublicRouter exact path={path.PROFILE_ME} component={ProfilePage} />
        <PublicRouter
          exact
          path={path.CHALLENGE}
          component={ChallengeCatePage}
        />
        <PublicRouter
          exact
          path={path.CHALLENGE_CATE_ID}
          component={ChallengePage}
        />
        <PublicRouter path={path.QUIZ} component={QuizPage} />
        <PublicRouter
          path={path.CHALLENGE_SOLUTION_CHALLENGE_ID}
          component={SolutionPage}
        />
        <PublicRouter path={path.POSTS} component={PostPage} />
        <PublicRouter path="*" component={Notfound} />
      </Switch>
      <Footer />
    </>
  );
};

export default SiteLayout;
