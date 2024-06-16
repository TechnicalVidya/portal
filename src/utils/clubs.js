import axios from "axios";
import { toast } from "sonner";

export const fetchAllClubs = async (setCardData, setLoading) => {
  try {
    const { data } = await axios.get("/api/club/get");
    if (data.success) {
      const resData = data.data;
      const temp = resData.map((club) => ({
        id: club._id,
        imageUrl: club.avatar,
        title: club.clubName,
        description: club.clubDesc,
        managedBy: "Unknown Manager",
        altText: "Club Avatar",
        github: "https://www.github.com",
        twitter: "https://www.twitter.com",
        members: club.members,
      }));
      setCardData(temp);
    }
  } catch (error) {
    toast.error(error.message);
  } finally {
    setLoading(false);
  }
};
