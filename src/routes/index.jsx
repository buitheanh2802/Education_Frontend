import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import SiteLayout from './../layouts/SiteLayout';
import PublicRouter from './PublicRouter';

const RootRoute = () => {
    return (
        <Router>
            <Switch>
                <PublicRouter path='/'> <SiteLayout /> </PublicRouter>
            </Switch>
        </Router>
    );
};

export default RootRoute;