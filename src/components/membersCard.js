import dynamic from "next/dynamic";
import React from "react";
const MembersLoadingSkeleton = dynamic(
  () => import("./skeleton/memberLoadingSkeleton"),
  {
    ssr: false,
  }
);

const MembersCard = ({ clubData, loading }) => {
  // Display loading skeleton UI when loading is true
  if (loading) {
    return (
      <div className="py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
          <MembersLoadingSkeleton />
          <div className="invisible md:visible">
            <MembersLoadingSkeleton />
          </div>
          <div className="invisible md:visible">
            <MembersLoadingSkeleton />
          </div>
        </div>
      </div>
    );
  }

  // Display members list or message if no members are found
  return (
    <div className="py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        {clubData.members.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No members found.</p>
          </div>
        ) : (
          clubData.members.map((member, index) => (
            <div key={index} className="flex">
              <img
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src={member.avatar}
                alt={member.name}
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-bold">
                  {member.firstName
                    ? member.firstName + " " + member.lastName
                    : member.name}
                </p>

                {/* TODO: Add role in user schema */}
                <p className="text-sm text-muted-foreground">
                  {member.role ? member.role : "Club Member"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MembersCard;
