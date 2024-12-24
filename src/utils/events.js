import axios from "axios";
import { toast } from "sonner";

export const fetchAllEvents = async (setCardData, setLoading) => {
    try {
        const { data } = await axios.get("/api/event/getAllEvent");
        if (data.success) {
            const resData = data.data;
            const temp = resData.map((event) => ({
                id: event._id,
                imageUrl: event.eventImg,
                title: event.eventName,
                description: event.eventDesc,
                googleFormLink: event.googleFormLink,
                managedBy: "",
                altText: "Event Avatar",
                github: "",
                twitter: "",
                members: event.eventParticipants.filter(Boolean).map((participant, index) => ({
                    avatar: participant ? participant.avatar : "",
                    name: participant ? participant.firstName + ' ' + participant.lastName : `Participant ${index + 1}`,
                    role: participant ? participant.role : "Unknown",
                })),
            }));
            setCardData(temp);
        }
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};

export const fetchRecentEvents = async (setCardData, setLoading) => {
    try {
        const { data } = await axios.get("/api/event/getRecentEvent");
        if (data.success) {
            const resData = data.data;
            const temp = resData.map((event) => ({
                id: event._id,
                imageUrl: event.eventImg,
                title: event.eventName,
                description: event.eventDesc,
                googleFormLink: event.googleFormLink,
                managedBy: "",
                altText: "Event Avatar",
                github: "",
                twitter: "",
                members: event.eventParticipants.filter(Boolean).map((participant, index) => ({
                    avatar: participant ? participant.avatar : "",
                    name: participant ? participant.firstName + ' ' + participant.lastName : `Participant ${index + 1}`,
                    role: participant ? participant.role : "Unknown",
                })),
            }));
            setCardData(temp);
        }
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};

export const fetchEvent = async (eventId, setEventInfo, setLoading) => {
    try {
        const { data } = await axios.get(`/api/event/get/${eventId}`);
        if (data.success) {
            const eventData = data.data;
            console.log(eventData);
            setEventInfo({
                id: eventData._id,
                imageUrl: eventData.eventImg,
                title: eventData.eventName,
                description: eventData.eventDesc,
                googleFormLink: event.googleFormLink,
                managedBy: "",
                altText: "Event Avatar",
                github: "",
                twitter: "",
                members: eventData.eventParticipants.filter(Boolean).map((participant, index) => ({
                    avatar: participant ? participant.avatar : "",
                    name: participant ? participant.firstName + ' ' + participant.lastName : `Participant ${index + 1}`,
                    role: participant ? participant.role : "Unknown",
                })),
            });
        }
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
}


export const participate = async (id) => {
    try {
        console.log('first')
        const response = await axios.put(`/api/event/addParticipant/${id}`);
        console.log(response);
        if (response.data.success) {
            toast.success("Participated successfully!");
        } else {
            toast.error("Failed to Participate. Please try again.");
        }
    } catch (error) {
        toast.error(error.response.data.message);
        console.error("Error:", error);
    }
}

