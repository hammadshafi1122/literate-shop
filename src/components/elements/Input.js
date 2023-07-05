import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({ label, onChange, placeholder, type, className, value }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between">
        <label>{label}</label>
        {type === "password" && (
          <>
            {isPasswordVisible ? (
              <AiFillEye
                fontSize={"1.4rem"}
                className="cursor-pointer text-black"
                onClick={() => setPasswordVisible(!isPasswordVisible)}
              />
            ) : (
              <AiFillEyeInvisible
                fontSize={"1.4rem"}
                className="cursor-pointer text-black"
                onClick={() => setPasswordVisible(!isPasswordVisible)}
              />
            )}
          </>
        )}
      </div>

      <input
        value={value}
        onChange={onChange}
        type={isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        className={`border border-black outline-black outline-1 rounded-lg px-4 py-4 ${className}`}
      />
    </div>
  );
};

export { Input };
