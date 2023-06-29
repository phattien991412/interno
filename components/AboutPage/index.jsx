import React from 'react';
import dynamic from 'next/dynamic';

const Team = dynamic(() => import("./Team"));
const Quotes = dynamic(() => import("./Quotes"));
const MailBox = dynamic(() => import("./MailBox"));
const DoResult = dynamic(() => import("./DoResult"));
const Banner = dynamic(() => import("../ReusedComponent/Banner"));


const AboutPage = () => {
    return (
        <>
            <Banner image={"/images/about-banner.webp"} page={"About Us"} />
            <div className="xl:w-[70%] w-[90%] mx-auto">
                <Quotes/>
                <DoResult/>
            </div>
            <Team/>
            <div className="xl:w-[70%] w-[90%] mx-auto">
                <MailBox/>
            </div>
        </>
    );
};

export default AboutPage;