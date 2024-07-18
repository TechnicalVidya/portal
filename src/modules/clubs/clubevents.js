import React from "react";
import Cards from "../../components/cards";

const Clubevents = ({ event, loading }) => {
  console.log(event)
  const demo = event.map((e) => ({
    id: e._id,
    title: e.eventName,
    imageUrl: e.eventImg,
    github: "", // Assuming no GitHub link provided in the event data
    twitter: "", // Assuming no Twitter link provided in the event data
    managedBy: "", // Assuming no managedBy field provided in the event data
    description: e.eventDesc,
    members: e.eventParticipants.filter(Boolean).map((participant, index) => ({
      name: participant ? participant.name : `Participant ${index + 1}`,
      role: participant ? participant.role : "Unknown",
    })),
  }));
  console.log(event);
  return (
    <div className="md:space-y-16">
      <div className="my-10 md:my-0">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-center md:mt-16 px-4 md:px-0">
          Club Events
        </h1>
        <p className="leading-7 text-center">
          The excited events that has been happened so far
        </p>
      </div>

      <Cards
        cardData={demo}
        btnText={"Participate"}
        type={"events"}
        loading={loading}
      />
    </div>
  );
};

export default Clubevents;
