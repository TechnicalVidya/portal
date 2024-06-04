import ClubTeamMembers from "@/components/clubTeamMembers";
import React, { useEffect } from "react";
import { clubInfo } from "@/modules/clubs/club/dummyData";
import { BreadcrumbDemo } from "@/components/breadcrumb";
// import Clubevents from "../clubevents";

const Event = ({ eventId }) => {
  //   {eventId} : data will be fetched from this
//   console.log(eventId);

  // console.log(clubInfo);
  return (
    <div className="w-full justify-center items-center">
      <div className="hidden md:flex items-center justify-center">
        <BreadcrumbDemo clubName={clubInfo.clubName} />
      </div>
    </div>
  );
};

export default Event;
