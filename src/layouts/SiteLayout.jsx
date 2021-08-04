import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { path } from '../constants';
import HomePage from '../pages/HomePage';
import CoursePage from '../pages/CoursePage';
import PracticePage from '../pages/PracticePage';

const SiteLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="bg-gray-900">
                <Nav />
            </div>
            <Switch>
                <Route exact path={path.HOME} component={HomePage} />
                <Route path={path.COURSE} component={CoursePage} />
                <Route path={path.PRACTICE} component={PracticePage} />
            </Switch>

            <Footer />
        </>
    );
};

export default SiteLayout;