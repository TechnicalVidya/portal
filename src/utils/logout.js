import { userInitialState } from "@/redux/intialStates/userInitialState";
import { resetUser } from "@/redux/slices/userSlice";
import { toast } from "sonner";

export const handleLogout = (dispatchFunction) => {
  const userSlice = userInitialState;
  dispatchFunction(resetUser(userSlice));
  toast.success("Logged out successfully.");
};
