
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
import QuestionsDetail from 'src/Pages/Public/QuestionsDetail';


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
                <PublicRouter exact path={path.QUESTIONS_DETAIL} component={QuestionsDetail}/> 
                <PublicRouter exact path={path.POSTS_DETAIL} component={PostsDetail} />
                <PublicRouter exact path={path.PROFILE} component={ProfilePage} />      
                <PublicRouter exact path={path.TAGS_DETAIL} component={DetailTagPage}/>                    
            </Switch>
        </>
    );
};


export default SiteLayout;
