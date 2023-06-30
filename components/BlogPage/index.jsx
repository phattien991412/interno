import dynamic from 'next/dynamic';
import React from 'react';

const Article = dynamic(() => import("'./Articles'")) ;
const Banner = dynamic(() => import("'../ReusedComponent/Banner'")) ;
const LastestNews = dynamic(() => import("'./LastestNews'")) ;

const index = () => {
    return (
        <div>
            <Banner image={"/images/blog-banner.webp"} page={"Articles & News"} />
            <div className="xl:w-[70%] w-[90%] mx-auto">
                <LastestNews/>
                <Article/>
            </div>
        </div>
    );
};

export default index;