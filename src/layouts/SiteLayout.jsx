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
import KhoaHoc from '../pages/KhoaHoc';
import Thuchanh from '../pages/Thuchanh';

const SiteLayout = () => {
    return (
        <>
            <Header />

            <Switch>
                <Route path={path.KHOAHOC} component={KhoaHoc}></Route>
                <Route path={path.THUCHANH} component={Thuchanh}></Route>
            </Switch>


            <Footer />
        </>
    );
};

export default SiteLayout;