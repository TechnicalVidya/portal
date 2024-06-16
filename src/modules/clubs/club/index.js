import ClubTeamMembers from "@/components/clubTeamMembers";
import React, { useEffect, useState } from "react";
// import { clubInfo } from "./dummyData";
import { BreadcrumbDemo } from "@/components/breadcrumb";
import Clubevents from "../clubevents";
import axios from "axios";
import { fetchClub } from "@/utils/clubs";

const Club = ({ clubId }) => {
  const [loading, setLoading] = useState(true);
  const [clubInfo, setClubInfo] = useState({});

  useEffect(() => {
    fetchClub(clubId, setClubInfo, setLoading);
  }, []);
  return (
    <div className="w-full justify-center items-center">
      <div className="hidden md:flex items-center justify-center">
        <BreadcrumbDemo clubName={clubInfo.clubName} loading={loading} />
      </div>

      <Clubevents clubInfo={clubInfo} loading={loading} />
      <ClubTeamMembers clubData={clubInfo} loading={loading} />
    </div>
  );
};

export default Club;
