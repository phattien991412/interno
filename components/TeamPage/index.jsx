import dynamic from "next/dynamic";
import React from "react";

const TeamMembers = dynamic(() => import("./TeamMembers"));
const Banner = dynamic(() => import("../ReusedComponent/Banner"));

const TeamPage = () => {
  return (
    <div>
      <Banner page={"Our Professional"} image={"/images/team-banner.webp"} />
      <div className="xl:w-[70%] w-[90%] mx-auto">
        <TeamMembers />
      </div>
    </div>
  );
};

export default TeamPage;
