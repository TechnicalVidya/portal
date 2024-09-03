import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateField, DropDownField, ImageUpload, ReusableField } from "../formcomponents";
import { toast } from "sonner";
import axios from "axios";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const FormSchema = z.object({
  clubName: z.string().min(2, {
    message: "Clubname must be at least 2 characters.",
  }),
  clubDesc: z.string().min(20, {
    message: "Club description must be at least 20 characters.",
  }),
  avatar: z.union([
    z.any().refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
    z.string().url("Please enter a valid URL."),
  ]),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  gender: z.string().min(1, {
    message: "Gender selection is required.",
  }),
  dob: z.date().refine(
    (dob) => new Date() >= dob,
    "Date of birth should be less than or equal to today's date."
  ),
  branch: z.string().min(1, {
    message: "Branch selection is required.",
  }),
  batch: z.number().min(1990, { message: "Batch selection is required." })
    .max(new Date().getFullYear(), { message: `Batch must be less than or equal to ${new Date().getFullYear()}.` }),
});

export default function UpdateClubDetails({ clubData }) {
  const { user } = useSelector((state) => state.user);
  const hasPermission = user && user.erpID === "111111";
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(clubData?.avatar);
  const originalData = {
    clubName: clubData?.clubName,
    clubDesc: clubData?.clubDesc,
    avatar: clubData?.avatar,
    firstName: clubData?.head?.firstName,
    lastName: clubData?.head?.lastName,
    email: clubData?.head?.email,
    gender: clubData?.head?.gender,
    dob: new Date(clubData?.head?.dob),
    branch: clubData?.head?.branch,
    batch: clubData?.head?.batch,
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      clubName: clubData?.clubName,
      clubDesc: clubData?.clubDesc,
      avatar: clubData?.avatar,
      firstName: clubData?.head?.firstName,
      lastName: clubData?.head?.lastName,
      email: clubData?.head?.email,
      gender: clubData?.head?.gender,
      dob: new Date(clubData?.head?.dob),
      branch: clubData?.head?.branch,
      batch: clubData?.head?.batch
    },
  });



  if (!hasPermission) {
    return null;
  }
  async function onSubmit(data) {
    try {
      const formData = new FormData();

      for (const key in data) {
        if (data[key] !== originalData[key]) {
          if (key === "avatar" && data[key] !== null) {
            formData.append(key, data[key][0]);
          } else {
            formData.append(key, data[key]);
          }
        }
      }

      const response = await axios.post(`/api/club/update/${clubData?._id}`, formData);

      if (response.data.success) {
        form.reset();
        setLogo(null);
        toast.success("Club Updated successfully!");
      } else {
        toast.error("Failed to update club. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error:", error);
    }
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
            <SheetDescription>
              Description
            </SheetDescription>

            <div className="mt-5 grid gap-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <ImageUpload
                    form={form}
                    name="avatar"
                    label="Logo"
                    description="Choose your logo wisely."
                    preview={logo}
                    setPreview={setLogo}
                  />
                  <ReusableField
                    form={form}
                    name="clubName"
                    label="Club Name*"
                    placeholder="Club Name"
                    component={Input}
                  />

                  <ReusableField
                    form={form}
                    name="clubDesc"
                    label="Club Desc*"
                    placeholder="Club Description"
                    component={Input}
                  />
                  <ReusableField
                    form={form}
                    name="firstName"
                    label="Head First Name*"
                    placeholder="First Name"
                    component={Input}
                  />
                  <ReusableField
                    form={form}
                    name="lastName"
                    label="Head Last Name*"
                    placeholder="Last Name"
                    component={Input}
                  />
                  <ReusableField
                    form={form}
                    name="email"
                    label="Head Email*"
                    placeholder="Email Address"
                    component={Input}
                  />
                  <ReusableField
                    form={form}
                    name="batch"
                    label="Head Batch*"
                    placeholder="Batch"
                    component={Input}
                    type="number"
                    min={1990}
                    max={new Date().getFullYear()}
                    onChange={(e) => form.setValue('batch', Number(e.target.value))}
                  />
                  <DropDownField
                    form={form}
                    name="gender"
                    label="Gender*"
                    options={[
                      { value: 'Male', label: 'Male' },
                      { value: 'Female', label: 'Female' },
                      { value: 'Other', label: 'Other' },
                    ]}
                    placeholder={'Select Gender'}
                  />
                  <DateField
                    form={form}
                    label="Date of Birth*"
                    name="dob"
                  />
                  <DropDownField
                    form={form}
                    name="branch"
                    label="Branch*"
                    placeholder="Branch"
                    options={[
                      { value: 'CE', label: 'Computer Engineering' },
                      { value: 'IoT', label: 'Internet Of Things' },
                      { value: 'DS', label: 'Data Science' },
                      { value: 'ME', label: 'Mechanical Engineering' },
                      { value: 'EXTC', label: 'Electronics & Telecommunications Engineering' },
                      { value: 'ELE', label: 'Electrical Engineering' },
                      { value: 'AIML', label: 'Artificial Intelligence & Machine Learning' }
                    ]}
                  />
                  <div className="flex w-full justify-center">
                    <Button type="submit">Update</Button>
                  </div>
                </form>
              </Form>
            </div>
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </section>
  );
};
