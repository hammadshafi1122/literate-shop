import React from "react";
import { Header } from "components";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-80px)] flex">
        <div className="w-1/2 bg-purple-400"></div>
        <div className="w-1/2 bg-yellow-400"></div>
      </div>
    </>
  );
};

export { Signup };
