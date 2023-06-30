import React from 'react';

import Article from './Articles';
import Banner from '../ReusedComponent/Banner';
import LastestNews from './LastestNews';

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