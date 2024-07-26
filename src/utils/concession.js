import axios from "axios";
import { toast } from "sonner";

export const fetchForms = async (setCardData, setLoading) => {
    try {
        const { data } = await axios.get("/api/concession/student/form-status");
        if (data.success) {
            console.log(data)
            setCardData(data.data);
        }
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};

