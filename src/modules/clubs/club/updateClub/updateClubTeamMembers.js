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
import { X } from "lucide-react";
import { IoMenuSharp } from "react-icons/io5";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { Combobox } from "@/components/combo-box";
import { useSelector } from "react-redux";

export const UpdateTeamMembers = ({ addNewMember, clubData }) => {
  const { user } = useSelector((state) => state.user);
  const hasPermission = user && user.erpID === "111111";
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const pathName = useParams();
  const addTeamMember = async (id) => {
    const { data } = await axios.post(
      `/api/club/add/member/${pathName.club}/${id}`
    );
    if (data.success) {
      addNewMember(data.data);
    }
  };
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
  useEffect(() => {
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
                erpIds.map((id, index) => (
                  <div
                    key={index}
                    className="w-full px-4 py-2 hover:bg-muted border flex gap-2 items-center"
                    onClick={() => addTeamMember(id.erpID)}
                  >
                    <div>
                      <img src={id.avatar} className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="grid">
                      <p className="capitalize">
                        {id.firstName + " " + id.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {id.erpID}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </section >
  );
};
