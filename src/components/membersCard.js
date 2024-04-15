import React from "react";

const MembersCard = ({ clubData }) => {
  //   const members = [
  //     {
  //       name: "Oliver Aguilerra",
  //       role: "Product Manager",
  //       imageUrl:
  //         "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  //     },
  //     {
  //       name: "Marta Clermont",
  //       role: "Design Team Lead",
  //       imageUrl:
  //         "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  //     },
  //   ];

  return (
    <div className="py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
        {clubData.members.map((member, index) => (
          <div key={index} className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src={member.avatar}
              alt={member.name}
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersCard;
