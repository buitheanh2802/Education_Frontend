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
import ChallengeCatePage from 'src/Pages/Public/ChallengeCatePage';
import ChallengePage from 'src/Pages/Public/ChallengePage';
import QuizPage from 'src/Pages/Public/QuizPage';
import DetailChallenge from 'src/Pages/Public/DetailChallenge';
import SolutionPage from 'src/Pages/Public/SolutionPage';

const SiteLayout = () => {
    return (
        <>
            <Header />
            <Switch>
                <PublicRouter exact path={path.HOME} component={HomePage} />
                <PublicRouter path={path.POSTS} component={PostPage} />
                <PublicRouter path={path.QUESTIONS} component={QuestionsPage} />
                <PublicRouter exact path={path.CHALLENGE} component={ChallengeCatePage} />
                <PublicRouter exact path={path.CHALLENGE_CATE_ID} component={ChallengePage} />
                <PublicRouter path={path.CHALLENGE_ID} component={DetailChallenge} />
                <PublicRouter path={path.QUIZ} component={QuizPage} />
                <PublicRouter path={path.CHALLENGE_SOLUTION_CHALLENGE_ID} component={SolutionPage}/>
                <PublicRouter path="*" component={Notfound} />
            </Switch>
            <Footer />
        </>
    );
};

export default SiteLayout;