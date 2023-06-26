import React from "react";

const Checkbox = ({ label, id, name, value }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className="form-checkbox accent-primary h-4 w-4"
      />
      <label for={id}> {label}</label>
      <br></br>
    </div>
  );
};

export { Checkbox };
