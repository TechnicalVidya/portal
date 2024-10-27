import React, { useState } from "react";

export const TagInput = ({ label, placeholder, value, onChange }) => {
  const [tag, setTag] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && tag) {
      event.preventDefault();
      onChange([...value, tag]);
      setTag("");
    } else if (event.key === "Backspace" && !tag && value.length) {
      event.preventDefault();
      onChange(value.slice(0, -1));
    }
  };

  const handleDelete = (tagToDelete) => {
    onChange(value.filter((t) => t !== tagToDelete));
  };

  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex flex-wrap gap-2 mt-1">
        {value.map((tag) => (
          <div
            key={tag}
            className="flex items-center bg-blue-200 text-blue-800 px-2 py-1 rounded"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleDelete(tag)}
              className="ml-2 text-blue-500 hover:text-blue-700"
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 border rounded px-2 py-1"
        />
      </div>
    </div>
  );
};
