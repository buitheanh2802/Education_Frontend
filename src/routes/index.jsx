import React from 'react';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import SiteLayout from './../layouts/SiteLayout';

const RootRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'> <SiteLayout /> </Route>
            </Switch>
        </Router>
    );
};

export default RootRoute;