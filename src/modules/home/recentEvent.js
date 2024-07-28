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
  return (
    <div >
      <div className='items-center font-bold text-3xl md:text-5xl pb-6 md:pb-12 text-center'>
        Recent Events
      </div>

      <Cards cardData={cardData} btnText={"Participate"} type={"events"} loading={loading} functionToBeExecuted={participate} />
    </div>
  );
};

export default RecentEvents;
