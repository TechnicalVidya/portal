import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useDropzone } from 'react-dropzone';

const {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} = require("@/components/ui/form");

export const PDFUpload = ({
  form,
  name,
  label,
  description,
  preview,
  setPreview,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onDrop = (acceptedFiles, rejectedFiles) => {

    if (acceptedFiles.length > 0) {
      if (acceptedFiles[0].type !== 'application/pdf') {
        setErrorMessage('Please upload a valid PDF file.');
      }
      else {
        console.log(acceptedFiles[0])
        const displayUrl = URL.createObjectURL(acceptedFiles[0]);
        setPreview(displayUrl);
        form.setValue(name, acceptedFiles[0]);
        setErrorMessage('');
      }
    }

    if (rejectedFiles.length > 0) {
      setErrorMessage('Please upload a valid PDF file.');
    }

    setIsDragActive(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'application/pdf',
    multiple: false,
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDropAccepted: () => setIsDragActive(false),
    onDropRejected: () => setIsDragActive(false),
  });

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
                  accept="application/pdf"
                  className="hidden"
                />
                {preview ? (
                  <div className="flex flex-col items-center justify-center">
                    <iframe
                      src={`${preview}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="mt-2"
                      style={{
                        width: '100%',
                        height: '400px',
                        border: 'none',
                      }}
                      title="PDF Preview"
                    />
                  </div>
                ) : (
                  <div className="h-full w-full grid p-2 place-items-center">
                    Add PDF Document
                  </div>
                )}
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
          </FormItem>
        </>
      )}
    />
  );
};
