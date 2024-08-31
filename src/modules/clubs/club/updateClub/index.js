import { useState } from "react";
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
import { useSelector } from "react-redux";

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

export const UpdateClubDetails = () => {
  const { user } = useSelector((state) => state.user);
  const hasPermission = user && user.erpID === "111111";
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

  const [preview, setPreview] = useState(null);

  const getImageData = (event) => {
    try {
      const files = event.target.files;
      const displayUrl = URL.createObjectURL(files[0]);
      return { files, displayUrl };
    } catch (error) {
      console.log(error);
    }
  };

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

            <div className="text-xl font-semibold">Update Club Details</div>
            <p className="text-muted-foreground">Description</p>

            <div className="mt-5 grid gap-4">
              <div className="flex items-center justify-center">
                <Label
                  // htmlFor={`${name}_input`}
                  className="aspect-square w-32 overflow-hidden rounded-full cursor-pointer"
                >
                  {preview === null ? (
                    <div className="h-full w-full bg-muted grid p-2 place-items-center">
                      Add Logo
                    </div>
                  ) : (
                    <img
                      src={preview}
                      className="w-full h-full"
                      alt="Circle Preview"
                    />
                  )}
                </Label>
                <Input
                  // id={`${name}_input`}
                  type="file"
                  onChange={(event) => {
                    const { files, displayUrl } = getImageData(event);
                    setPreview(displayUrl);
                  }}
                  className="hidden"
                />
              </div>
              <div className="form-group">
                <Label htmlFor="clubName" className="text-gray-700">
                  Club Name
                </Label>
                <Input
                  type="text"
                  placeholder="Club Name"
                  value={clubName}
                  id="clubName"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setClubName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="clubDesc" className="text-gray-700">
                  Club Description
                </Label>
                <Input
                  type="text"
                  placeholder="Club Description"
                  value={clubDesc}
                  id="clubDesc"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setClubDesc(e.target.value)}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="firstName" className="text-gray-700">
                  Head First Name
                </Label>
                <Input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  id="firstName"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="lastName" className="text-gray-700">
                  Head Last Name
                </Label>
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  id="lastName"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="email" className="text-gray-700">
                  Head Email
                </Label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  id="email"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="gender" className="text-gray-700">
                  Head Gender
                </Label>
                <Input
                  type="text"
                  placeholder="Gender"
                  value={gender}
                  id="gender"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="dob" className="text-gray-700">
                  Head Date of Birth
                </Label>
                <Input
                  type="text"
                  placeholder="Date of Birth"
                  value={dob}
                  id="dob"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="dept" className="text-gray-700">
                  Head Department
                </Label>
                <Input
                  type="text"
                  placeholder="Department"
                  value={dept}
                  id="dept"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setDept(e.target.value)}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="batch" className="text-gray-700">
                  Head Batch
                </Label>
                <Input
                  type="number"
                  placeholder="Batch"
                  value={batch}
                  id="batch"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1"
                  onChange={(e) => setBatch(parseInt(e.target.value))}
                />
              </div>

              <Button>Update</Button>
            </div>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </section>
  );
};
