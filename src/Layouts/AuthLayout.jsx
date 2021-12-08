import React from 'react';
import { path } from '../Constants';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import { useSelector } from 'react-redux';
import {  Switch, Redirect } from 'react-router';
import ForgotPassword from '../Pages/Auth/ForgotPassword';
import ResetPassword from '../Pages/Auth/ResetPassword';
import PublicRouter from 'src/Routes/PublicRouter';

const AuthLayout = () => {
    const { profile } = useSelector(state => state.Auth)

    if (profile) return <Redirect to={path.HOME} />
    return (
        <Switch>
            <PublicRouter path={path.LOGIN} component={Login} />
            <PublicRouter path={path.REGISTER} component={Register} />
            <PublicRouter path={path.FORGOTPASSWORD} component={ForgotPassword} />
            <PublicRouter path={path.RESETPASSWORD} component={ResetPassword} />
            <PublicRouter path='*' component={Login}/>
        </Switch>
    );
};

export default AuthLayout;