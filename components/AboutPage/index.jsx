import React from 'react';

import Team from './Team';
import Quotes from './Quotes';
import MailBox from './MailBox';
import DoResult from './DoResult';
import Banner from '../ReusedComponent/Banner';

const AboutPage = () => {
    return (
        <>
            <Banner image={"/images/about-banner.png"} page={"About Us"} />
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