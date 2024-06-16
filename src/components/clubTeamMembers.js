import React from "react";
import MembersCard from "./membersCard";

const ClubTeamMembers = ({ clubData, loading }) => {
  return (
    <div>
      <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-center md:mt-16 px-4 md:px-0">
        Club Members
      </h1>
      <p className="leading-7 text-center">Meet our team members</p>
      <MembersCard clubData={clubData} loading={loading} />
    </div>
  );
};

export default ClubTeamMembers;
