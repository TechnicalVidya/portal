import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { IoMenuSharp } from "react-icons/io5";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const sampleData = {
  _id: "6682a53de02cbdad4c72005c",
  clubName: "GDSC",
  clubDesc: "Where techies Innovate",
  avatar:
    "https://res.cloudinary.com/dahndiy4v/image/upload/v1719838013/clubAvatars/dwlp4oglilwdhta6xtbx.jpg",
  head: {
    _id: "668299d9d7081720f5672da0",
    firstName: "Technical",
    lastName: "Vidya",
    email: "techvidya1905@gmail.com",
    gender: "Male",
    dob: "10-03-2004",
    dept: "Iot",
    batch: 2022,
    avatar: "https://api.dicebear.com/5.x/initials/svg?seed=Technical%20Vidya",
  },
  // teams: [{erp: 451}]
};

export const UpdateTeamMembers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clubName, setClubName] = useState(sampleData.clubName);
  const [clubDesc, setClubDesc] = useState(sampleData.clubDesc);
  const [avatar, setAvatar] = useState(sampleData.avatar);
  const [firstName, setFirstName] = useState(sampleData.head.firstName);
  const [lastName, setLastName] = useState(sampleData.head.lastName);
  const [email, setEmail] = useState(sampleData.head.email);
  const [gender, setGender] = useState(sampleData.head.gender);
  const [dob, setDob] = useState(sampleData.head.dob);
  const [dept, setDept] = useState(sampleData.head.dept);
  const [batch, setBatch] = useState(sampleData.head.batch);

  const [erpIds, setErpIds] = useState([
    "111111",
    "222222",
    "333333",
    "444444",
    "555555",
    "666666",
    "777777",
    "888888",
    "999999",
    "101010",
  ]);

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

            <div className="text-xl font-semibold">Update Club Details</div>
            <p className="text-muted-foreground">Description</p>

            <div className="mt-6">
              {erpIds.map((id, index) => (
                <div key={index} className="w-full px-4 py-2">{id}</div>
              ))}
            </div>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </section>
  );
};
