import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { path } from '../../Constants';
import Login from './Login';
import Register from './Register';

const Authorization = () => {
    const { profile } = useSelector(state => state.Auth)

    if (profile) return <Redirect to={path.HOME} />
    return (
        <>
            <Switch>
                <Route exact path={path.AUTH} component={Login} />
                <Route path={path.LOGIN} component={Login} />
                <Route path={path.REGISTER} component={Register} />
            </Switch>
        </>
    )
}

export default Authorization
