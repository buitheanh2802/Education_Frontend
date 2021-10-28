import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { path } from '../Constants';

const PrivateRouter = ({ ...props }) => {
    const { profile } = useSelector(state => state.Auth);
    if (profile?.role !== "admin") return <Redirect to={path.NOT_FOUND} />
    return <Route {...props} />
}

export default PrivateRouter
