import React from 'react';
import Banner from '../ReusedComponent/Banner';
import Form from './Form';
import Map from './Map';

const ContactPage = () => {
    return (
        <div>
            <Banner image={"/images/contact-banner.webp"} page={"Contact Us"}/>
            <div className="xl:w-[70%] w-[90%] mx-auto">
               <Form/>
               <Map/>
            </div>
        </div>
    );
};

export default ContactPage;