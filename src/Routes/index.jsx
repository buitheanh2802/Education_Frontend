import React, { useEffect, useState } from 'react';
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
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            LocalStorage.Get('_token_')
                ? await dispatch(ActionGetProfile())
                && setIsLoading(false)
                : setIsLoading(false)
        })()
    }, [dispatch])

    if (isLoading) return null
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