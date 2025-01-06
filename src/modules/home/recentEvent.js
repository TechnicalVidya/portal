import Cards from "@/components/cards";
import { fetchRecentEvents, participate } from "@/utils/events";
import { useEffect, useState } from "react";

const RecentEvents = () => {
  const [cardData, setCardData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading)
      fetchRecentEvents(setCardData, setLoading)
  }, [])

  const handleParticipate = (event) => {
    if (event.googleFormLink) {
      window.open(event.googleFormLink, '_blank');
    } else {
      toast.error("Participation link not available for this event");
    }
  };

  
  return (
    <div >
      <div className='items-center font-bold text-3xl md:text-5xl pb-6 md:pb-12 text-center'>
        Recent Events
      </div>

      <Cards cardData={cardData} btnText={"Participate"} type={"events"} loading={loading} functionToBeExecuted={(event) => handleParticipate(event)} />
    </div>
  );
};

export default RecentEvents;
