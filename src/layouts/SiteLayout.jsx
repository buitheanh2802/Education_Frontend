import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { path } from "../constants";
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import CoursePage from '../pages/CoursePage';
import PracticePage from '../pages/PracticePage';

const SiteLayout = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path={path.HOME} component={HomePage} />
                <Route path={path.COURSE} component={CoursePage} />
                <Route path={path.EXERCISE} component={PracticePage} />
            </Switch>
            <Footer />
        </>
    );
};

export default SiteLayout;