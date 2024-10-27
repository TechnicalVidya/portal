// RichTextEditor.js
import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextEditor = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2">Content</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="bg-white rounded-lg shadow-sm"
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            [{ color: [] }, { background: [] }],
            ["link", "image", "video"],
            ["clean"],
          ],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
