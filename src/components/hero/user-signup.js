import { useRef, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { Input } from '../ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Combobox } from '../ui/combobox';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import OtpForm from './otp-form';
import { Icons } from '../icons';
import Link from 'next/link';

const FormSchema = z.object({
    erpID: z.string().min(1, "ERP ID is required"),
    erpPassword: z.string().min(8, "Password must be at least 8 characters long"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    aadharNo: z.string().length(12, "Aadhar number must be 12 digits").regex(/^\d+$/, "Aadhar number must be numeric"),
    address: z.string().min(20, "Address must be atleast 20 characters long"),
    gender: z.enum(['Male', 'Female', 'Other'], { required_error: "Gender is required" }),
    contactNo: z.string().length(10, "Contact number must be 10 digits").regex(/^\d+$/, "Contact number must be numeric"),
    dept: z.string().min(1, "Department is required"),
    batch: z.string().min(1, "Batch is required"),
    dob: z.string().refine((date) => {
        const parsedDate = new Date(date);
        return !isNaN(parsedDate.getTime()); // Check if it's a valid date
    }, "Invalid date of birth"),
});

function ReusableField({
    form,
    name,
    label,
    placeholder,
    type,
    component: Component,
}) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Component placeholder={placeholder} {...field} type={type} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

function DropDownField({
    form,
    name,
    label,
    options,
    placeholder
}) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Combobox
                            frameworks={options}
                            value={field.value}
                            onChange={(selectedValue) => {
                                field.onChange(selectedValue);
                            }}
                            placeholder={placeholder}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}



export default function UserSignup() {
    const [isLoading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState()
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            erpID: '',
            erpPassword: '',
            firstName: '',
            lastName: '',
            email: '',
            aadharNo: '',
            address: '',
            gender: '',
            contactNo: '',
            dept: '',
            batch: '',
            dob: ''
        },
    });

    async function onSubmit(data) {
        setLoading(true);
        try {
            if (isLoading) {
                const response = await axios.post("/api/auth/otp", data);
                console.log(response);
                if (response.data.success) {
                    form.reset();
                    setData(data);
                    setLoading(false);
                    toast.success("Otp has been sent to your gmail !");
                    setIsOpen(true)
                } else {
                    setLoading(false);
                    toast.error("Failed to sent otp. Please try again.");
                }
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
            toast.error(error.response.data.message)
        }
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <ReusableField
                        form={form}
                        name="erpID"
                        label="ERP ID*"
                        placeholder="Erp ID"
                        component={Input}
                    />
                    <ReusableField
                        form={form}
                        name="erpPassword"
                        label="Password*"
                        placeholder="password"
                        component={Input}
                        type="password"
                    />
                    <div className='grid grid-cols-2 gap-2'>
                        <ReusableField
                            form={form}
                            name="firstName"
                            label="First Name*"
                            placeholder="First Name"
                            component={Input}
                        />
                        <ReusableField
                            form={form}
                            name="lastName"
                            label="Last Name*"
                            placeholder="Last Name"
                            component={Input}
                        />
                    </div>
                    <ReusableField
                        form={form}
                        name="email"
                        label="Email*"
                        placeholder="Email Address"
                        component={Input}
                    />
                    <ReusableField
                        form={form}
                        name="address"
                        label="Address*"
                        placeholder="Address"
                        component={Textarea}
                    />
                    <div className='grid grid-cols-2 gap-2'>
                        <ReusableField
                            form={form}
                            name="aadharNo"
                            label="Aadhar Number*"
                            placeholder="Aadhar Number"
                            component={Input}
                        />
                        <ReusableField
                            form={form}
                            name="contactNo"
                            label="Contact Number*"
                            placeholder="Contact Number"
                            component={Input}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
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
                        <ReusableField
                            form={form}
                            name="dob"
                            label="Date Of Birth*"
                            placeholder="Department"
                            component={Input}
                            type='date'
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <ReusableField
                            form={form}
                            name="dept"
                            label="Department*"
                            placeholder="Department"
                            component={Input}
                        />
                        <ReusableField
                            form={form}
                            name="batch"
                            label="Batch Year*"
                            placeholder="Batch"
                            component={Input}
                        />
                    </div>
                    <div className='flex w-full justify-center gap-6'>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Continue
                        </Button>

                        <Button variant="outline" type="button" disabled={isLoading}>

                            <Link href='/login'>
                                Sign In
                            </Link>
                        </Button>
                        <OtpForm isOpen={isOpen} setIsOpen={setIsOpen} formData={data} />
                    </div>
                </form>
            </Form >
        </div>
    )
}