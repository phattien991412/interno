import React from 'react';
import Banner from '../ReusedComponent/Banner';
import ListProject from './ListProject';

const Project = () => {
    return (
        <div>
            <Banner page={"Our Project"} image={"/images/project-banner.webp"} />
            <div className="xl:w-[70%] w-[90%] mx-auto">
                <ListProject/>
            </div>
        </div>
    );
};

export default Project;