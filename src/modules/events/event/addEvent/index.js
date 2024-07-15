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
import { DateField } from "./formcomponents";
import { ReusableField } from "./formcomponents";


const FormSchema = z.object({
    eventName: z.string().min(2, {
        message: "Eventname must be at least 2 characters.",
    }),
    clubDesc: z.string().min(20, {
        message: "Club description must be at least 20 characters.",
    }),
    startDate: z.date({
        required_error: "Start date is required.",
        invalid_type_error: "Start date must be a valid date.",
    }),
    endDate: z.date({
        required_error: "End date is required.",
        invalid_type_error: "End date must be a valid date.",
    }),
});

export function AddEvent() {
    const [logo, setLogo] = useState(null);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            eventName: "",
            eventDesc: "",
            startDate: "",
            endDate: ""
        },
    });

    async function onSubmit(data) {
        try {
            const response = await axios.post("/api/event/create", data);
            console.log(response);

            if (response.data.success) {
                form.reset();
                setLogo(null);
                toast.success("Event added successfully!");
            } else {
                toast.error("Failed to add club. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error("Error:", error);
        }
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
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
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
                                <div className="grid grid-flow-col col-span-2 gap-x-5 row-span-1">
                                    <DateField
                                        form={form}
                                        label="Start Date*"
                                    />
                                    <DateField
                                        form={form}
                                        label="End Date*"
                                    />
                                </div>
                            </div>

                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <Button type="submit">Continue</Button>
                            </AlertDialogFooter>
                        </form>
                    </Form>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
}
