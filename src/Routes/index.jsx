import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { path } from '../Constants';
import SiteLayout from '../Layouts/SiteLayout';
import PublicRouter from './PublicRouter';
import { useDispatch, useSelector } from 'react-redux';
import LocalStorage from 'src/Helpers/Storage';
import { ActionGetProfile } from 'src/Redux/Actions/Auth.action';
import queryParam from 'src/Helpers/QueryParams'
import AdminLayout from 'src/Layouts/AdminLayout';
import PrivateRouter from './PrivateRouter';
// import AlertMessage from 'src/Components/';
import AuthLayout from 'src/Layouts/AuthLayout';
import Loading from 'src/Components/Loading'

const RootRoute = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const loading = useSelector(state => state.Loading)
    queryParam("token") && LocalStorage.Set('_token_', queryParam("token"))

    useEffect(() => {
        (async () => {
            LocalStorage.Get('_token_')
                ? await dispatch(ActionGetProfile())
                && setIsLoading(false)
                : setIsLoading(false)
        })()
    }, [dispatch])

    if (isLoading) return <div className="h-screen flex items-center justify-center bg-gray-100">
        <Loading className="w-[40px] h-[40px] fill-current text-gray-500" /></div>
    return (
        <Router>
            {loading && <Loading />}
            {/* <AlertMessage /> */}
            <Switch>
                <PrivateRouter path={path.ADMIN} component={AdminLayout} />
                <PublicRouter path={path.AUTH} component={AuthLayout} />
                <PublicRouter path={path.HOME} component={SiteLayout} />
            </Switch>
        </Router>
    );
};

export default RootRoute;