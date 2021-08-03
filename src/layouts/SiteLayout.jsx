import React from 'react';
import Banner from '../components/Banner';
import BannerColla from '../components/BannerColla';
import Contact from '../components/Contact';
import HotCourse from '../components/HotCourse';
import Introduce from '../components/Introduce';
import Footer from '../components/Footer';
import Header from '../components/Headers';
import { Route, Switch } from 'react-router-dom';
import { path } from "../constants";
import HomePage from '../pages/HomePage';

const SiteLayout = () => {
    return (
        <>
            <Header />

            <Switch>
                <Route path={path.HOME} component={HomePage} />
            </Switch>


            <Footer />
        </>
    );
};

export default SiteLayout;