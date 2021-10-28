import React from 'react';
import { Route, Switch } from 'react-router';
import { path } from '../Constants';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';

const AuthLayout = () => {
    return (
        <Switch>
            <Route path={path.LOGIN} component={Login} />
            <Route path={path.REGISTER} component={Register} />
        </Switch>
    );
};

export default AuthLayout;