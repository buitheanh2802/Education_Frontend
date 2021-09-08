<<<<<<< HEAD
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
import QuestionsDetail from "src/Pages/Public/QuestionsDetail";

const SiteLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <PublicRouter exact path={path.HOME} component={HomePage} />
        <PublicRouter path={path.POSTS} component={PostPage} />
        <PublicRouter path={path.QUESTIONS} component={QuestionsPage} />
        <PublicRouter path={path.TAGS} component={TagsPage} />
        <PublicRouter path={path.POSTS_DETAIL} component={PostsDetail} />
        <PublicRouter path={path.CONTACT} component={ContactPage} />
        <PublicRouter path={path.QUESTIONS_DETAIL} component={QuestionsDetail}/>
      </Switch>
    </>
  )
  }
=======
import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRouter from '../Routes/PublicRouter';
import { path } from '../Constants'
import HomePage from '../Pages/Public/HomePage';
import Header from '../Pages/Public/Commons/Header';
import PostPage from '../Pages/Public/PostPage';
import QuestionsPage from '../Pages/Public/QuestionsPage';
import TagsPage from '../Pages/Public/TagsPage';
import ContactPage from '../Pages/Public/ContactPage';
import ProfilePage from 'src/Pages/Public/ProfilePage';
import DetailTagPage from 'src/Pages/Public/DetailTagPage';
import PostsDetail from 'src/Pages/Public/PostsDetail';


const SiteLayout = () => {
    return (
        <>
            <Header />
            <Switch>
                <PublicRouter exact path={path.HOME} component={HomePage} />
                <PublicRouter exact path={path.POSTS} component={PostPage} />
                <PublicRouter exact path={path.QUESTIONS} component={QuestionsPage} /> 
                <PublicRouter exact path={path.TAGS} component={TagsPage} />      
                <PublicRouter exact path={path.CONTACT} component={ContactPage}/> 
                <PublicRouter exact path={path.POSTS_DETAIL} component={PostsDetail} />
                <PublicRouter exact path={path.PROFILE} component={ProfilePage} />      
                <PublicRouter exact path={path.TAGS_DETAIL} component={DetailTagPage}/>                    
            </Switch>
        </>
    );
};

>>>>>>> c4e7f01f662f76b4a86ea4d8e0d437f31805a717

export default SiteLayout;
