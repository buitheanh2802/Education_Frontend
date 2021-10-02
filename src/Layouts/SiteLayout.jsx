import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRouter from '../Routes/PublicRouter';
import { path } from '../Constants'
import HomePage from '../Pages/Public/HomePage';
import Header from '../Pages/Public/Commons/Header';
import PostPage from '../Pages/Public/PostPage';
import QuestionsPage from '../Pages/Public/QuestionsPage';
import Notfound from 'src/Pages/Public/Notfound';
import Footer from 'src/Pages/Public/Commons/Footer';

const SiteLayout = () => {
    return (
        <>
            <Header />
            <Switch>
                <PublicRouter exact path={path.HOME} component={HomePage} />
                <PublicRouter path={path.POSTS} component={PostPage} />
                <PublicRouter path={path.QUESTIONS} component={QuestionsPage} />
                <PublicRouter path="*" component={Notfound} />
            </Switch>
            <Footer />
        </>
    );
};

export default SiteLayout;