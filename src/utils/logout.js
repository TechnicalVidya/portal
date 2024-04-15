import { setUser } from "@/redux/slices/userSlice";
import { toast } from "sonner";

export const handleLogout = (dispatchFunction) => {
  const userSlice = { authenticated: false };
  dispatchFunction(setUser(userSlice));
  toast.success("Logged out successfully.");
};
