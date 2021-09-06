import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { path } from '../Constants';
import SiteLayout from '../Layouts/SiteLayout';
import PublicRouter from './PublicRouter';
import Authorization from '../Pages/Auth';
import { useDispatch } from 'react-redux';
import LocalStorage from 'src/Helpers/Storage';
import { ActionGetProfile } from 'src/Redux/Actions/Auth.action';

const RootRoute = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (LocalStorage.Get('_token_')) return dispatch(ActionGetProfile())
    }, [dispatch])

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