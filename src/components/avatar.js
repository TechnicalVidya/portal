import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { handleLogout } from "@/utils/logout";
import { useDispatch } from "react-redux";

export function AvatarDemo({ imgURI }) {
  const dispatch = useDispatch();
  const logout = () => {
    handleLogout(dispatch);
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={imgURI} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="max-w-[50%] ml-[22%]">
          <div
            className="grid gap-4 cursor-pointer hover:text-red-500"
            onClick={logout}
          >
            <p>Logout</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
