import React from 'react';
import { Route } from 'react-router-dom';

const PublicRouter = ({ ...props }) => {
    return <Route {...props} />
}

export default PublicRouter
