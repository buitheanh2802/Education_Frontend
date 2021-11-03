import React from 'react';
import { Route, Switch } from 'react-router';
import { path } from '../../Constants';
import Login from './Login';
import Register from './Register';

const Authorization = () => {
    return (
        <>
            <Switch>
                <Route path={path.LOGIN} component={Login} />
                <Route path={path.REGISTER} component={Register} />
            </Switch>
        </>
    )
}

export default Authorization
