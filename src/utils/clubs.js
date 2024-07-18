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

export const fetchClub = async (clubId, setClubInfo, setLoading) => {
  try {
    const { data } = await axios.get(`/api/club/get/${clubId}`);
    console.log(data);
    if (data.success) {
      const resData = data.data;
      console.log(resData)
      const members = [{...resData.head}]
      const temp = {
        id: resData._id,
        clubName: resData.clubName,
        description: resData.clubDesc,
        social: [],
        event: resData.event,
        members: resData.members,
      };
      setClubInfo(resData);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
