import React from "react";

const Button = ({ onClick, title, className, type, icon }) => {
  let buttonClassName = "";

  if (type === "primary") {
    buttonClassName = "text-white bg-primary";
  } else if (type === "secondary") {
    buttonClassName = "text-primary border border-black";
  } else {
    buttonClassName = "text-white bg-primary";
  }

  const Icon = icon;
  return (
    <button
      onClick={onClick}
      className={`rounded-lg py-2 px-10 shadow-sm ${
        icon && `flex justify-center items-center space-x-2`
      } ${buttonClassName} ${className}`}
    >
      {icon && <Icon />}
      <label>{title}</label>
    </button>
  );
};

export { Button };
