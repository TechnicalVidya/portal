// components/ui/select.js
import React from "react";

export const Select = ({ label, placeholder, options, required, ...props }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        required={required}
        {...props}
        className="block w-full border border-gray-300 rounded-md p-2"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
