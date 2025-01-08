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
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { PDFUpload } from "./formcomponents";

const ACCEPTED_IMAGE_TYPES = [
    "application/pdf",
];
const FormSchema = z.object({
    feesReceipt: z
        .any()
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
            "Only .pdf formats are supported."
        ),
});


export function UpdateProfile() {
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [logo, setLogo] = useState(null);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            feesReceipt: null,
        },
    });


    async function onSubmit(data) {
        if(isSubmitting) return;
        setIsSubmitting(true)
        console.log(data)
        try {
            const formData = new FormData();
            console.log(data)
            formData.append('feesReceipt', data['feesReceipt'])
            const response = await axios.post("/api/auth/add/feeRecipt", formData);
            console.log(response);
            if (response.data.success) {
                form.reset();
                setLogo(null);
                toast.success("Fees Receipt Updated Successfully");
            } else {
                toast.error("Failed to update fees receipt. Please try again.");
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.error("Error:", error);
        }finally{
            setIsSubmitting(false);
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size="lg" className="button w-full sm:w-fit">Update Fees Receipt</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="md:h-max h-svh">
                <AlertDialogHeader>
                    <AlertDialogTitle>Update Fees Receipt</AlertDialogTitle>
                </AlertDialogHeader>
                <div className="overflow-auto p-1">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 select-none">
                            <div className="grid gap-3">
                                <PDFUpload
                                    form={form}
                                    name="feesReceipt"
                                    label="Fees Receipt"
                                    description="Choose your pdf wisely."
                                    preview={logo}
                                    setPreview={setLogo}
                                />
                            </div>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting? "Submitting...":"Continue"}
                                </Button>
                            </AlertDialogFooter>
                        </form>
                    </Form>
                </div>
            </AlertDialogContent>
        </AlertDialog >
    );
}
