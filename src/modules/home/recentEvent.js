import Cards from "@/components/cards";
import { cardData } from "../events/dummyEventData";

const RecentEvents = () => {
  return (
    <div >
    <div className='items-center font-bold text-3xl md:text-5xl pb-6 md:pb-12 text-center'>
      Recent Events
    </div>
       
      <Cards cardData={cardData} btnText={"Participate"} type={"events"} />
    </div>
  );
};

export default RecentEvents;
