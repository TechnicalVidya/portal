import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Clubname must be at least 2 characters.",
  }),
  description: z.string().min(20, {
    message: "Clubname must be at least 20 characters.",
  }),
  instagramURI: z.string(),
  facebookURI: z.string(),
  twitterURI: z.string(),
});

export function AddClub() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      instagramURI: "",
      facebookURI: "",
      twitterURI: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    toast("Backend Integration remainng");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Club</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Club</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="overflow-auto p-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-3 gap-2">
                <ImageUpload
                  form={form}
                  name="circle_image"
                  label="Logo"
                  description="Choose your logo wisely."
                  defaultImage="/club/club-icon.png"
                />

                <div className="col-span-2 grid">
                  <ReusableField
                    form={form}
                    name="name"
                    label="Name*"
                    placeholder="Club Name"
                    component={Input}
                  />
                  <ReusableField
                    form={form}
                    name="description"
                    label="Description*"
                    placeholder="Description"
                    component={Textarea}
                  />
                </div>
              </div>

              <SocialMediaField
                form={form}
                name="instagramURI"
                label="Instagram"
                icon={FaInstagram}
                placeholder="Instagram"
              />

              <SocialMediaField
                form={form}
                name="facebookURI"
                label="Facebook"
                icon={FaFacebook}
                placeholder="Facebook"
              />

              <SocialMediaField
                form={form}
                name="twitterURI"
                label="Twitter"
                icon={FaTwitter}
                placeholder="Twitter"
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

function SocialMediaField({ form, name, label, icon: Icon, placeholder }) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            <FormLabel>
              <Icon className="text-3xl" />
            </FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ReusableField({
  form,
  name,
  label,
  placeholder,
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
            <Component placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

const ImageUpload = ({ form, name, label, description, defaultImage }) => {
  const [preview, setPreview] = useState(defaultImage || "/club/club-icon.png");

  const getImageData = (event) => {
    try {
      const files = event.target.files;
      const displayUrl = URL.createObjectURL(files[0]);
      return { files, displayUrl };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { onChange, value, ...rest } }) => (
        <>
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="flex">
                <label
                  htmlFor={`${name}_input`}
                  className="aspect-square w-32 overflow-hidden rounded-lg rounded-full cursor-pointer">
                  <img
                    src={preview}
                    className="w-full h-full"
                    alt="Circle Preview"
                  />
                </label>
                <Input
                  id={`${name}_input`}
                  type="file"
                  {...rest}
                  onChange={(event, err) => {
                    console.log(err)
                    const { files, displayUrl } = getImageData(event);
                    setPreview(displayUrl);
                    onChange(files);
                  }}
                  className="hidden"
                />
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
};
