import React from 'react';
import Footer from '../components/Footer';
import { Route, Switch } from 'react-router-dom';
import { path } from "../constants";
import HomePage from '../pages/HomePage';
import Nav from '../components/Nav';

const SiteLayout = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route path={path.HOME} component={HomePage} />
            </Switch>

            <Footer />
        </>
    );
};

export default SiteLayout;