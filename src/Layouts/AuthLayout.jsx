import React from 'react';
import { path } from '../Constants';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';

const AuthLayout = () => {
    const { profile } = useSelector(state => state.Auth)

    if (profile) return <Redirect to={path.HOME} />
    return (
        <Switch>
            <Route path={path.LOGIN} component={Login} />
            <Route path={path.REGISTER} component={Register} />
        </Switch>
    );
};

export default AuthLayout;