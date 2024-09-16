import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Loader, X } from "lucide-react";
import { IoMenuSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import MemberCard from "./MemberCard";
import { useParams } from "next/navigation";

export const UpdateTeamMembers = ({ addNewMember, clubData }) => {
  const pathName = useParams()
  const { user } = useSelector((state) => state.user);
  const hasPermission = user && user.erpID === "111111";
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const getAddedUsers = async (id) => {
    try {
      const { data } = await axios.post("/api/auth/search-user", {
        erpID: id,
      });
      if (data.successs) {
        const existingMemberIds = new Set(clubData.members.map(member => member.erpID));
        const newUsers = data.data.filter(user => !existingMemberIds.has(user.erpID));
        setErpIds(newUsers);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(
        "An error occurred while fetching data. Please try again later."
      );
    }
  };

  const removeMember = (id) => {
    setErpIds(prev => prev.filter(member => member.erpID !== id));
  };
  useEffect(() => {
    if (searchInput != '')
      getAddedUsers(searchInput);
  }, [searchInput]);

  const [erpIds, setErpIds] = useState([]);

  if (!hasPermission) {
    return null;
  }

  return (
    <section className="max-w-[264px]">
      <Sheet open={isOpen}>
        <SheetTrigger>
          <IoMenuSharp className="text-3xl" onClick={() => setIsOpen(true)} />
        </SheetTrigger>
        <SheetPortal>
          <SheetOverlay onClick={() => setIsOpen(false)} />
          <SheetContent side="right" className="border-none overflow-auto">
            <SheetClose
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetClose>
            <SheetTitle>
              <div className="text-xl font-semibold">Update Club Details</div>
            </SheetTitle>
            <SheetDescription className="mb-3">
              Description
            </SheetDescription>
            <Input
              className="w-full"
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <div className="mt-6 flex flex-col w-full gap-2">
              {erpIds.length > 0 &&
                erpIds.map(id => (
                  <MemberCard
                    key={id.erpID}
                    id={id}
                    addNewMember={(newMember) => {
                      addNewMember(newMember);
                      removeMember(id.erpID);
                    }}
                    club={pathName.club}
                  />
                ))}
            </div>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </section >
  );
};
