import React from 'react';
import Banner from '../components/Banner';
// import BannerColla from '../components/BannerColla';
// import Contact from '../components/Contact';
// import HotCourse from '../components/HotCourse';
import Introduce from '../components/Introduce';
import Footer from '../components/Footer';
import Header from '../components/Headers';

const SiteLayout = () => {
    return (
        <>
            <Header />
            <div className="px-[15px]">
                <Introduce />
            </div>
            <Banner />

            {/* <HotCourse/>
            
            <BannerColla/>

            <Contact/> */}

            <Footer />
        </>
    );
};

export default SiteLayout;