import React, { useEffect, useState } from "react";
import { BreadcrumbDemo } from "@/components/breadcrumb";
import { fetchClub } from "@/utils/clubs";
import dynamic from "next/dynamic";

const UpdateClubDetails = dynamic(() => import('./updateClub'), { ssr: false })
const Clubevents = dynamic(() => import('../clubevents'), { ssr: false })
const ClubTeamMembers = dynamic(() => import('@/components/clubTeamMembers'), { ssr: false })

const Club = ({ clubId }) => {
  const [loading, setLoading] = useState(true);
  const [clubInfo, setClubInfo] = useState({});

  useEffect(() => {
    fetchClub(clubId, setClubInfo, setLoading);
  }, []);
  return (
    <div className="w-full justify-center items-center">
      <div className="hidden md:flex items-center justify-between">
        <div></div>
        <BreadcrumbDemo clubName={clubInfo.clubName} loading={loading} />
        <div>
          {clubInfo && !loading &&
            <UpdateClubDetails clubData={clubInfo} />}
        </div>
      </div>

      <div className="md:hidden w-full flex items-center justify-end">
        <div>
          {clubInfo && loading &&
            <UpdateClubDetails clubData={clubInfo} />}
        </div>
      </div>
      <Clubevents
        event={clubInfo.event ? clubInfo.event : []}
        loading={loading}
      />
      <ClubTeamMembers clubData={clubInfo} loading={loading} setClubInfo={setClubInfo} />
    </div>
  );
};

export default Club;
