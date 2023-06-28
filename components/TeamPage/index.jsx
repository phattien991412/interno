import React from 'react';
import Banner from '../ReusedComponent/Banner';
import TeamMembers from './TeamMembers';

const TeamPage = () => {
    return (
        <div>
            <Banner page={"Our Professional"} image={"/images/team-banner.png"} />
            <div className="xl:w-[70%] w-[90%] mx-auto">
                <TeamMembers/>
            </div>
        </div>
    );
};

export default TeamPage;