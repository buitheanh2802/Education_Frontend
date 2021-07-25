import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Headers';
import HotCourse from '../components/HotCourse';
import Introduce from '../components/Introduce';

const SiteLayout = () => {
    return (
        <>
            <Header />
            <div className="px-[15px]">
                <Introduce />
            </div>
            <Banner />

            <HotCourse/>
        </>
    );
};

export default SiteLayout;