import axios from "axios";
import { toast } from "sonner";

function formatDate(dateString) {
    const today = new Date();
    const targetDate = new Date(dateString);

    // Calculate the time difference in milliseconds
    const timeDiff = targetDate.getTime() - today.getTime();

    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Check if the date has passed
    if (daysLeft < 0) {
        return "expired";
    }

    // Calculate months left
    const monthsLeft = Math.floor(daysLeft / 30);

    // Format the output based on days or months
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
                altText: "Club Avatar",
                github: "https://www.github.com",
                twitter: "https://www.twitter.com",
                startDate: internship.startDate,
                endDate: internship.endDate,
                status: formatDate(new Date(internship.endDate).getTime())
            }));
            setCardData(temp);
        }
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};
