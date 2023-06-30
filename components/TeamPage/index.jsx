import React from 'react';

import TeamMembers from './TeamMembers';
import Banner from '../ReusedComponent/Banner';

const TeamPage = () => {
    return (
        <div>
            <Banner page={"Our Professional"} image={"/images/team-banner.webp"} />
            <div className="xl:w-[70%] w-[90%] mx-auto">
                <TeamMembers/>
            </div>
        </div>
    );
};

export default TeamPage;