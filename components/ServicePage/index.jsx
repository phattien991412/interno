import React from 'react';
import dynamic from 'next/dynamic';


const Banner = dynamic(() => import("../ReusedComponent/Banner"));
const Services = dynamic(() => import('./Services'));
const Work = dynamic(() => import('./Work'));
const Contact = dynamic(() => import('../HomePage/Contact'));

const ServicePage = () => {
    return (
        <div>
            <Banner image={"/images/service-banner.png"} page={"Services"} />
            <div className="xl:w-[70%] w-[90%] mx-auto">
                <Services/>
                <Work/>
                <Contact/>
            </div>
        </div>
    );
};

export default ServicePage;