import dynamic from 'next/dynamic';
import React from 'react';

const Banner = dynamic(() => import('../ReusedComponent/Banner')) ;
const ListProject = dynamic(() => import('./ListProject')) ;

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