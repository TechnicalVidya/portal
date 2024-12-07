import React, { useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import "quill-emoji/dist/quill-emoji.css"; // Import emoji CSS

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [{ font: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["blockquote", "code-block"],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
      ["superscript", "subscript"],
      ["undo", "redo"],
      ["emoji"],
    ],
  };

  return (
    <div className="w-full">
      <style global jsx>{`
        .ql-container {
          box-sizing: border-box;
          width: 100%;
          max-width: 470px;
          border: 1px solid #ccc;
          border-radius: 6px;
          overflow: hidden;
        }

        .ql-editor {
          min-height: 150px;
          max-height: 350px;
          padding: 10px;
          font-size: 16px;
          line-height: 1.5;
          white-space: pre-wrap;
          word-wrap: break-word;
          overflow-wrap: break-word;
          overflow-y: auto;
        }

        .ql-toolbar {
          border-radius: 6px 6px 0 0;
        }
            @media (max-width: 500px) {
                 .ql-container {
                  max-width: 400px; 
            }
            @media (max-width: 450px) {
                 .ql-container {
                  max-width: 380px; 
            }
            @media (max-width: 400px) {
                 .ql-container {
                  max-width: 350px; 
            }
           @media (max-width: 360px) {
                 .ql-container {
                  max-width: 300px; 
            }

      `}</style>

      <label className="block text-sm font-medium mb-2">Content</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
      />
    </div>
  );
};

export default RichTextEditor;
