import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

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
  const fileInputRef = useRef(null);

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type !== 'application/pdf') {
        setErrorMessage('Please upload a valid PDF file.');
        return;
      }
      
      const displayUrl = URL.createObjectURL(file);
      setPreview(displayUrl);
      form.setValue(name, file);
      setErrorMessage('');
    }

    if (rejectedFiles.length > 0) {
      setErrorMessage('Please upload a valid PDF file.');
    }

    setIsDragActive(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDropAccepted: () => setIsDragActive(false),
    onDropRejected: () => setIsDragActive(false),
    accept: {
      'application/pdf': ['.pdf']
    },
    noClick: false
  });

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { onChange, value, ...rest } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className={`relative border-2 ${
                isDragActive ? 'border-blue-500 border-solid' : 'border-gray-300 border-dashed'
              } rounded-lg p-4 transition-colors`}
            >
              <Input
                {...getInputProps()}
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
              />
              
              {preview ? (
                <div className="space-y-4">
                  <iframe
                    src={`${preview}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-96 border-none"
                    title="PDF Preview"
                  />
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleButtonClick}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Change PDF
                  </Button>
                </div>
              ) : (
                <div className="space-y-4 text-center">
                  <div className="grid place-items-center p-4">
                    <Upload className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600">
                      Drag and drop your PDF here, or
                    </p>
                    <Button 
                      type="button"
                      variant="outline"
                      className="mt-2"
                      onClick={handleButtonClick}
                    >
                      Choose File
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
        </FormItem>
      )}
    />
  );
};

export default PDFUpload;

// import { Input } from "@/components/ui/input";
// import { useRef, useState, useEffect } from "react";
// import { useDropzone } from 'react-dropzone';

// const {
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
//   FormDescription,
// } = require("@/components/ui/form");

// export const PDFUpload = ({
//   form,
//   name,
//   label,
//   description,
//   preview,
//   setPreview,
// }) => {
//   const [isDragActive, setIsDragActive] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isMobile, setIsMobile] = useState(false);
//   const fileInputRef = useRef(null); 

 
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.type !== 'application/pdf') {
//         setErrorMessage('Please upload a valid PDF file.');
//         return;
//       }
      
//       const displayUrl = URL.createObjectURL(file);
//       setPreview(displayUrl);
//       form.setValue(name, file);
//       setErrorMessage('');
//     }
//   };

//   const onDrop = (acceptedFiles, rejectedFiles) => {
//     if (acceptedFiles.length > 0) {
//       if (acceptedFiles[0].type !== 'application/pdf') {
//         setErrorMessage('Please upload a valid PDF file.');
//       }
//       else {
//         const displayUrl = URL.createObjectURL(acceptedFiles[0]);
//         setPreview(displayUrl);
//         form.setValue(name, acceptedFiles[0]);
//         setErrorMessage('');
//       }
//     }

//     if (rejectedFiles.length > 0) {
//       setErrorMessage('Please upload a valid PDF file.');
//     }

//     setIsDragActive(false);
//   };

//   const { getRootProps, getInputProps, open } = useDropzone({
//     multiple: false,
//     onDrop,
//     onDragEnter: () => setIsDragActive(true),
//     onDragLeave: () => setIsDragActive(false),
//     onDropAccepted: () => setIsDragActive(false),
//     onDropRejected: () => setIsDragActive(false),
//     noClick: true
//   });


//   if (isMobile) {
//     return (
//       <FormField
//         control={form.control}
//         name={name}
//         render={({ field: { onChange, value, ...rest } }) => (
//           <FormItem>
//             <FormLabel>{label}</FormLabel>
//             <FormControl>
//               <div>
//                 <Input
//                   type="file"
//                   accept="application/pdf"
//                   onChange={handleFileChange}
//                   className="w-full"
//                 />
//                 {preview && (
//                   <iframe
//                     src={`${preview}#toolbar=0&navpanes=0&scrollbar=0`}
//                     className="mt-2"
//                     style={{
//                       width: '100%',
//                       height: '400px',
//                       border: 'none',
//                     }}
//                     title="PDF Preview"
//                   />
//                 )}
//               </div>
//             </FormControl>
//             {description && <FormDescription>{description}</FormDescription>}
//             {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
//           </FormItem>
//         )}
//       />
//     );
//   }

 
//   return (
//     <FormField
//       control={form.control}
//       name={name}
//       render={({ field: { onChange, value, ...rest } }) => (
//         <>
//           <FormItem>
//             <FormLabel>{label}</FormLabel>
//             <FormControl>
//               <div
//                 {...getRootProps()}
//                 style={{
//                   border: isDragActive ? '2px solid blue' : '2px dashed gray',
//                   padding: '20px',
//                   borderRadius: '8px',
//                   textAlign: 'center',
//                   cursor: 'pointer',
//                   transition: 'border-color 0.2s ease',
//                 }}
//                 onClick={open}
//               >
//                 <Input
//                   {...getInputProps()}
//                   ref={fileInputRef} 
//                   id={`${name}_input`}
//                   type="file"
//                   accept="application/pdf"
//                   className="absolute opacity-0 w-full h-full cursor-pointer"
//                 />
//                 {preview ? (
//                   <div className="flex flex-col items-center justify-center">
//                     <iframe
//                       src={`${preview}#toolbar=0&navpanes=0&scrollbar=0`}
//                       className="mt-2"
//                       style={{
//                         width: '100%',
//                         height: '400px',
//                         border: 'none',
//                       }}
//                       title="PDF Preview"
//                     />
//                   </div>
//                 ) : (
//                   <div className="h-full w-full grid p-2 place-items-center">
//                     Add PDF Document
//                   </div>
//                 )}
//               </div>
//             </FormControl>
//             {description && <FormDescription>{description}</FormDescription>}
//             {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
//           </FormItem>
//         </>
//       )}
//     />
//   );
// };