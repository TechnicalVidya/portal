import { DateInput } from "@/components/ui/dateInput";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDropzone } from 'react-dropzone';


const {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} = require("@/components/ui/form");


export function ReusableField({
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

export function DateField({
  form,
  label,
  name
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <DateInput
              name={name}
              value={field.value}
              onChange={(date) => field.onChange(date)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export const ImageUpload = ({
  form,
  name,
  label,
  description,
  preview,
  setPreview,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const displayUrl = URL.createObjectURL(acceptedFiles[0]);
      setPreview(displayUrl);
      form.setValue(name, acceptedFiles[0]);
    }
    setIsDragActive(false); // Reset drag active state after drop
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDropAccepted: () => setIsDragActive(false),
    onDropRejected: () => setIsDragActive(false),
  });

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
              <div
                {...getRootProps()}
                style={{
                  border: isDragActive ? '2px solid blue' : '2px dashed gray',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <Input
                  {...getInputProps()}
                  id={`${name}_input`}
                  type="file"
                  {...rest}
                  onChange={(event) => {
                    const { files, displayUrl } = getImageData(event);
                    setPreview(displayUrl);
                    onChange(files);
                  }}
                  className="hidden"
                  accept='image/*'
                />
                {preview === null ? (
                  <div className="h-full w-full grid p-2 place-items-center">
                    Add Logo
                  </div>
                ) : (
                  <img
                    src={preview}
                    className="w-full h-full rounded-lg"
                    alt="Circle Preview"
                  />
                )}
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