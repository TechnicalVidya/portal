import ClubTeamMembers from "@/components/clubTeamMembers";
import React from "react";
import { clubInfo } from "./dummyData";


const Club = ({ clubName }) => {
  return (
    <div>
        {clubName}
      <ClubTeamMembers />
    </div>
  );
};

export default Club;
