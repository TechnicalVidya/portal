import Cards from "@/components/cards";
import { cardData } from "../events/dummyEventData";

const RecentEvents = () => {
  return (
    <div>
      <Cards cardData={cardData} btnText={"Participate"} type={"events"} />
    </div>
  );
};

export default RecentEvents;
