import React from "react";

export const Input = (props) => {
  return (
    <div className="space-y-1">
      <label
        className="block text-xs capitalize opacity-70"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        className="w-full px-4 py-2 text-sm bg-white"
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={`Enter ${props.placeholder}`}
      />
    </div>
  );
};
