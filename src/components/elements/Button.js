import React from "react";

const Button = ({ onClick, title, className, type }) => {
  let buttonClassName = "";

  if (type === "primary") {
    buttonClassName = "text-white bg-primary";
  } else if (type === "secondary") {
    buttonClassName = "text-primary border border-black";
  }

  return (
    <button onClick={onClick} className={`rounded-lg py-2 px-10 shadow-sm ${buttonClassName} ${className}`}>
      {title}
    </button>
  );
};

export { Button };
