import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { path } from '../constants';
import HomePage from '../pages/HomePage';
import KhoaHoc from '../pages/KhoaHoc';

const SiteLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="bg-gray-900">
                <Nav />
            </div>
            <Switch>
                <Route exact path={path.HOME} component={HomePage} />
                <Route path={path.KHOAHOC} component={KhoaHoc} />
            </Switch>

            <Footer />
        </>
    );
};

export default SiteLayout;