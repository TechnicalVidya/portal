import { BreadcrumbDemo } from "@/components/breadcrumb";
import ClubTeamMembers from "@/components/clubTeamMembers";
import EventParticipants from "@/components/eventParticipants";
import { Button } from "@/components/ui/button";
import { fetchEvent } from "@/utils/events";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";


const Event = ({ eventId }) => {
    const [loading, setLoading] = useState(true);
    const [eventInfo, setEventInfo] = useState({});
    useEffect(() => {
        fetchEvent(eventId, setEventInfo, setLoading)
    }, []);
    const deleteEvent = async () => {
        try {
            const response = await axios.delete(`/api/event/delete/${eventId}`);
            console.log(response);
            if (response.data.success) {
                toast.success("Event Deleted successfully!");
            } else {
                toast.error("Failed to Delete Event. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error("Error:", error);
        }
    }
    return (
        <div className="w-full justify-center flex flex-col items-center">
            <div className="hidden md:flex items-center justify-center">
                <div></div>
                <BreadcrumbDemo clubName={eventInfo.title} loading={loading} />
            </div>
            <div className="flex justify-end w-full">
                <Button onClick={deleteEvent}>Delete</Button>
            </div>
            <EventParticipants eventData={eventInfo} loading={loading} />
        </div>
    );
};

export default Event;
