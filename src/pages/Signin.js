import React from "react";
import { Header } from "components";

const Signin = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-80px)] flex">
        <div className="hidden md:block w-1/2 bg-red-400"></div>
        <div className="w-full md:w-1/2 bg-green-400"></div>
      </div>
    </>
  );
};

export { Signin };
