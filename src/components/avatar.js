import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { handleLogout } from "@/utils/logout";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
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
        <PopoverContent className="max-w-[50%] ml-[22%] flex flex-col gap-y-2">
          <div
            className="grid items-center cursor-pointer hover:text-red-500"
            onClick={logout}
          >
            <p>Logout</p>
          </div>
          
          <Link
            className="grid items-center cursor-pointer hover:text-red-500"
            href="/profile"
          >
            <p>Profile</p>
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}
