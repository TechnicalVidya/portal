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
import { z } from "zod";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { OptionsField, ReusableField } from "./formcomponents";

const FormSchema = z.object({
    boarding: z.string().min(2, {
        message: "Boarding station must be at least 2 characters.",
    }),
    feesReceipt: z.string().min(14, {
        message: "Fees receipt number must be at least 14 characters.",
    }),
    className: z.string().min(1, {
        message: "Class selection is required.",
    }),
    duration: z.string().min(1, {
        message: "duration selection is required.",
    }),
    line: z.string().min(1, {
        message: "Line selection is required.",
    }),
});

export function AddConcession() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            boarding: '',
            feesReceipt: '',
            className: 'Second',
            duration: 'Quarterly',
            line: 'Central'
        },
    });

    async function onSubmit(data) {
        try {
            const response = await axios.post("/api/concession/student/student-form", data);
            console.log(response);

            if (response.data.success) {
                form.reset();
                toast.success("Concession request sent successfully!");
            } else {
                toast.error("Failed to send request. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error("Error:", error);
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>Student</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Railway Concession</AlertDialogTitle>
                </AlertDialogHeader>
                <div className="overflow-auto p-1">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <ReusableField
                                form={form}
                                name="boarding"
                                label="Boarding Station*"
                                placeholder="Boarding Station"
                                component={Input}
                            />
                            <ReusableField
                                form={form}
                                name="feesReceipt"
                                label="Fees Receipt Number*"
                                placeholder="Fees Receipt"
                                component={Input}
                            />
                            <OptionsField
                                form={form}
                                name="className"
                                label="Class*"
                                options={[
                                    { value: "First", label: "First Class" },
                                    { value: "Second", label: "Second Class" },
                                ]}
                            />
                            <OptionsField
                                form={form}
                                name="line"
                                label="Line*"
                                options={[
                                    { value: "Harbour", label: "Harbour Line" },
                                    { value: "Central", label: "Central Line" },
                                    { value: "Western", label: "Western Line" },
                                ]}
                            />
                            <OptionsField
                                form={form}
                                name="duration"
                                label="Duration*"
                                options={[
                                    { value: "Monthly", label: "Monthly" },
                                    { value: "Quarterly", label: "Quarterly" },
                                ]}
                            />
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