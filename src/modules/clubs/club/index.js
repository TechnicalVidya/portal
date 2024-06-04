import ClubTeamMembers from "@/components/clubTeamMembers";
import React, { useEffect } from "react";
import { clubInfo } from "./dummyData";
import { BreadcrumbDemo } from "@/components/breadcrumb";
import Clubevents from "../clubevents";

const Club = ({ clubName }) => {
  // {clubName} : data will be fetched from this

  console.log(clubInfo)
  return (
    <div className="w-full justify-center items-center">
      <div className="hidden md:flex items-center justify-center">
        <BreadcrumbDemo clubName={clubInfo.clubName} />
      </div>

      <Clubevents clubInfo={clubInfo} />
      <ClubTeamMembers clubData={clubInfo} />
    </div>
  );
};

export default Club;
