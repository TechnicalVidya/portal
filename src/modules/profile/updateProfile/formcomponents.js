import { PDFView } from "@/components/PDFView";
import { Input } from "@/components/ui/input";
import { useRef, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setErrorMessage('Please upload a valid PDF file.');
        return;
      }

      const displayUrl = URL.createObjectURL(file);
      setPreview(displayUrl);
      form.setValue(name, file);
      setErrorMessage('');
    }
  };

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      if (acceptedFiles[0].type !== 'application/pdf') {
        setErrorMessage('Please upload a valid PDF file.');
      }
      else {
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

  const { getRootProps, getInputProps, open } = useDropzone({
    multiple: false,
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDropAccepted: () => setIsDragActive(false),
    onDropRejected: () => setIsDragActive(false),
    noClick: true
  });


  if (isMobile) {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field: { onChange, value, ...rest } }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="w-full">
                <Input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="w-full"
                />
                {preview && (
                  <PDFView pdfUrl={preview} />
                )}
              </div>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
          </FormItem>
        )}
      />
    );
  }


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
                onClick={open}
              >
                <Input
                  {...getInputProps()}
                  ref={fileInputRef}
                  id={`${name}_input`}
                  type="file"
                  accept="application/pdf"
                  className="absolute opacity-0 w-full h-full cursor-pointer"
                />
                {preview ? (
                  <div className="flex flex-col items-center justify-center">
                    <embed
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