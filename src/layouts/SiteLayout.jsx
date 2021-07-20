import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Headers';
import Introduce from '../components/Introduce';

const SiteLayout = () => {
    return (
        <>
            <Header />
            <div className="px-[15px]">
                <Introduce />
            </div>
            <Banner />
        </>
    );
};

export default SiteLayout;