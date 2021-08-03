import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import { path } from "../constants";
import HomePage from '../pages/HomePage';
import Nav from '../components/Nav';

const SiteLayout = () => {
    return (
        <>
            <Switch>
                <Route exact path={path.HOME} component={Header} />
                <Route path="*" component={Nav} />
            </Switch>

            <Switch>
                <Route path={path.HOME} component={HomePage} />
            </Switch>

            <Footer />
        </>
    );
};

export default SiteLayout;