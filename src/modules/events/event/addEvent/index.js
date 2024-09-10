import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { DateField, ImageUpload } from "./formcomponents";
import { ReusableField } from "./formcomponents";
import { useSelector } from "react-redux";



const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

const FormSchema = z.object({
    eventName: z.string().min(2, {
        message: "Event name must be at least 2 characters.",
    }),
    eventDesc: z.string().min(20, {
        message: "Event description must be at least 20 characters.",
    }),
    firstDate: z.date({
        required_error: "Start date is required.",
    }).refine((startDate) => {
        const currentDate = new Date().toDateString();
        return startDate.toDateString() >= currentDate;
    }, {
        message: "Start date must be greater than or equal to today's date.",
    }),
    lastDate: z.date({
        required_error: "End date is required.",
    }),
    image: z
        .any()
        .refine(
            (file) =>
                file && ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."

        ),
}).superRefine((data, ctx) => {
    if (data.lastDate < data.firstDate) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "End date must be greater than or equal to start date.",
            path: ["lastDate"], // Specify the path for the issue
        });
    }
});


export function AddEvent() {
    const { user } = useSelector((state) => state.user);
    const hasPermission = user && user.erpID === "111111";
    const [logo, setLogo] = useState(null);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            image: null,
            eventName: "",
            eventDesc: "",
            firstDate: new Date(),
            lastDate: new Date()
        },
    });

    async function onSubmit(data) {
        try {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            const response = await axios.post("/api/event/create", formData);
            console.log(response);
            if (response.data.success) {
                form.reset();
                setLogo(null);
                toast.success("Event added successfully!");
            } else {
                toast.error("Failed to add club. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Try Logging in again");
            console.error("Error:", error);
        }
    }

    if (!hasPermission) {
        return null;
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>Add Event</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add Event</AlertDialogTitle>
                </AlertDialogHeader>
                <div className="overflow-auto p-1">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                                <ImageUpload
                                    form={form}
                                    name="image"
                                    label="Logo"
                                    description="Choose your logo wisely."
                                    preview={logo}
                                    setPreview={setLogo}
                                />

                                <div className="col-span-2 grid gap-y-3">
                                    <div className="grid col-span-2 gap-6">
                                        <ReusableField
                                            form={form}
                                            name="eventName"
                                            label="Name*"
                                            placeholder="Event Name"
                                            component={Input}
                                        />
                                        <ReusableField
                                            form={form}
                                            name="eventDesc"
                                            label="Description*"
                                            placeholder="Description"
                                            component={Textarea}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-x-10 px-2 flex-wrap md:flex-nowrap">
                                    <DateField
                                        form={form}
                                        label="Start Date*"
                                        name="firstDate"
                                    />
                                    <DateField
                                        form={form}
                                        label="End Date*"
                                        name="lastDate"
                                    />
                                </div>
                            </div>

                            <AlertDialogFooter>
                                <div className="flex justify-center gap-x-6 w-full items-center">
                                    <Button type="submit">Continue</Button>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                </div>
                            </AlertDialogFooter>
                        </form>
                    </Form>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}
