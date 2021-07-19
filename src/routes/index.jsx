import React from 'react';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import  Headers from '../components/Headers'

const RootRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Headers />
                </Route>
            </Switch>
        </Router>
    );
};

export default RootRoute;