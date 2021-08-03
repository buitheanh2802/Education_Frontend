import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Route, Switch } from 'react-router-dom';
import { path } from "../constants";
import HomePage from '../pages/HomePage';

const SiteLayout = () => {
    return (
        <>
            <Header />

            <Switch>
                <Route path={path.HOME} component={HomePage} />
            </Switch>

            <Footer />
        </>
    );
};

export default SiteLayout;