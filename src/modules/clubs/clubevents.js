import React, { useEffect, useState } from "react";
import Cards from "../../components/cards";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const Clubevents = ({ event, loading }) => {
  const [clubEventData, setClubEventData] = useState([]);

  useEffect(() => {
    if (event) {
      const foramattedData = event.map((e) => ({
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
      setClubEventData(foramattedData);
    }
  }, [event]);

  const participateInEvent = async (eventId) => {
    try {
      console.log(eventId);
      const { data } = await axios.put(`/api/event/addParticipant/${eventId}`);
      console.log(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!clubEventData.length) {
    if (loading)
      return <Loader />;
    return <p className="flex w-full justify-center items-center p-5 text-muted-foreground">No Events Found</p>
  }

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
        cardData={clubEventData}
        btnText={"Participate"}
        type={"events"}
        loading={loading}
        functionToBeExecuted={participateInEvent}
      />
    </div>
  );
};

export default Clubevents;