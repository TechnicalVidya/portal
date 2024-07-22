import axios from "axios";
import { toast } from "sonner";

function formatDate(dateString) {
    const today = new Date();
    const targetDate = new Date(dateString);
    const timeDiff = targetDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (daysLeft < 0) {
        return "expired";
    }
    if (daysLeft == 0) {
        return "Today is the last day";
    }
    const monthsLeft = Math.floor(daysLeft / 30);
    if (daysLeft < 30) {
        return `${daysLeft} day${daysLeft !== 1 ? 's' : ''} pending`;
    } else {
        return `${monthsLeft} month${monthsLeft !== 1 ? 's' : ''} pending`;
    }
}
export const fetchInternships = async (setCardData, setLoading) => {
    try {
        const { data } = await axios.get("/api/internship/getAll");
        if (data.success) {
            const resData = data.data;
            const temp = resData.map((internship) => ({
                id: internship._id,
                imageUrl: internship.image,
                title: internship.title,
                description: internship.desc,
                url: internship.url,
                altText: "Internship Avatar",
                startDate: internship.startDate,
                endDate: internship.endDate,
                status: formatDate(new Date(internship.startDate).getTime())
            }));
            setCardData(temp);
        }
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};
