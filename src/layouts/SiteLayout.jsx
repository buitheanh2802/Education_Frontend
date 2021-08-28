import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRouter from '../routes/PublicRouter';
import { path } from '../constants'
import HomePage from '../pages/Public/HomePage';
import Nav from '../components/Nav';
import PostPage from '../pages/Public/PostPage';
import QuestionsPage from '../pages/Public/QuestionsPage';

const SiteLayout = () => {
    return (
        <>
            <Nav />
            <Switch>
                <PublicRouter path={path.POSTS} component={PostPage} />
                <PublicRouter path={path.QUESTIONS} component={QuestionsPage} />
                <PublicRouter path={path.HOME} component={HomePage} />
            </Switch>
        </>
    );
};

export default SiteLayout;