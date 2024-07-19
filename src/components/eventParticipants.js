import React from "react";
import MembersCard from "./membersCard";
import { Button } from "./ui/button";
import { toast } from "sonner";
import axios from "axios";

const EventParticipants = ({ eventData, loading }) => {
    const participate = async () => {
        try {
            const response = await axios.put(`/api/event/addParticipant/${eventData.id}`);
            console.log(response);
            if (response.data.success) {
                toast.success("Participated successfully!");
            } else {
                toast.error("Failed to Participate. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error("Error:", error);
        }
    }
    return (
        <div className="flex justify-center flex-col">
            <div className="flex items-center justify-center w-full">
                <div></div>
                <h1 className="mt-6 scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-center md:mt-16 px-4 md:px-0">
                    Event Participants
                </h1>
            </div>

            <div className="flex justify-center w-full items-center">
                <p className="leading-7 text-center">Be One Of Them By Participating</p>
            </div>
            <div className="flex justify-end w-full">
                <Button onClick={participate}>Participate</Button>
            </div>
            <MembersCard clubData={eventData} loading={loading} />
        </div>
    );
};

export default EventParticipants;

