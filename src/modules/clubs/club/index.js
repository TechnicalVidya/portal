import ClubTeamMembers from "@/components/clubTeamMembers";
import React, { useEffect, useState } from "react";
// import { clubInfo } from "./dummyData";

import { IoMenuSharp } from "react-icons/io5";
import { BreadcrumbDemo } from "@/components/breadcrumb";
import Clubevents from "../clubevents";
import { fetchClub } from "@/utils/clubs";
import { UpdateClubDetails } from "./updateClub";

const Club = ({ clubId }) => {
  const [loading, setLoading] = useState(true);
  const [clubInfo, setClubInfo] = useState({});
  console.log(clubInfo);

  useEffect(() => {
    fetchClub(clubId, setClubInfo, setLoading);
  }, []);
  return (
    <div className="w-full justify-center items-center">
      <div className="hidden md:flex items-center justify-between">
        <div></div>
        <BreadcrumbDemo clubName={clubInfo.clubName} loading={loading} />
        <div>
          <UpdateClubDetails />
        </div>
      </div>

      <div className="md:hidden w-full flex items-center justify-end">
        <div>
          <UpdateClubDetails />
        </div>
      </div>
      <Clubevents
        event={clubInfo.event ? clubInfo.event : []}
        loading={loading}
      />
      <ClubTeamMembers clubData={clubInfo} loading={loading} />
    </div>
  );
};

export default Club;
