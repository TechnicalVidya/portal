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
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { Combobox } from "@/components/combo-box";

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

export const UpdateTeamMembers = ({ addNewMember }) => {
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
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const pathName = useParams();
  const addTeamMember = async (id) => {
    const { data } = await axios.post(
      `/api/club/add/member/${pathName.club}/${id}`
    );
    console.log(data);
    if (data.success) {
      addNewMember(data.data);
    }
  };
  // {
  //   _id: '668299d9d7081720f5672da0',
  //   erpID: '111111',
  //   erpPassword: '$2a$10$Eh5w3J8R3ENqEYYsfTVCHOf.qH0ZfaKdZb3JCB75KlBNjpfbsT4D6',
  //   firstName: 'Technical',
  //   lastName: 'Vidya',
  //   email: 'techvidya1905@gmail.com',
  //   gender: 'Male',
  //   dob: '10-03-2004',
  //   archiveForms: [],
  //   avatar: 'https://api.dicebear.com/5.x/initials/svg?seed=Technical%20Vidya',
  //   dept: 'Iot',
  //   batch: 2022,
  //   createdAt: '2024-07-01T11:58:17.065Z',
  //   updatedAt: '2024-07-22T09:19:57.431Z',
  //   __v: 0,
  //   token:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODI5OWQ5ZDcwODE3MjBmNTY3MmRhMCIsImlhdCI6MTcyMTYzOTk5NywiZXhwIjoxNzIyNTAzOTk3fQ.tFJ8WgCq97Zkvw93PnIvtf6XJcLXjT9wUtjiGsJmTg4'
  // },
  // const getAddedUsers = async (id) => {
  //   try {
  //     const { data } = await axios.post("/api/auth/search-user", {
  //       erpID: id,
  //     });

  //     if (data.success) {
  //       console.log(data.data);
  //       setErpIds(data.data);
  //     }

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //     toast.error(
  //       "An error occurred while fetching data. Please try again later."
  //     );
  //   }
  // };

  // useEffect(() => {
  //   getAddedUsers();
  // }, [searchInput]);

  const [erpIds, setErpIds] = useState([]);

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
    </section>
  );
};
