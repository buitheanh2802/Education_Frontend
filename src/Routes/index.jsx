import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { path } from '../Constants';
import SiteLayout from '../Layouts/SiteLayout';
import PublicRouter from './PublicRouter';
import Authorization from '../Pages/Auth'

const RootRoute = () => {
    return (
        <Router>
            <Switch>
                <PublicRouter path={path.AUTH}> <Authorization /> </PublicRouter>
                <PublicRouter path={path.HOME}> <SiteLayout /> </PublicRouter>
            </Switch>
        </Router>
    );
};

export default RootRoute;