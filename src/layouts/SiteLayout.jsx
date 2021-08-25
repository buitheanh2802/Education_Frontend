import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRouter from '../routes/PublicRouter';
import { path } from '../constants'
import HomePage from '../pages/Public/HomePage';
import Nav from '../components/Nav';

const SiteLayout = () => {
    return (
        <>
            <Nav />
            <Switch>
                <PublicRouter exact path={path.HOME} component={HomePage} />
            </Switch>
        </>
    );
};

export default SiteLayout;