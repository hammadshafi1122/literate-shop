import React, { useRef, useState } from "react";
import { Logo } from "assets/images";
import { Button } from "components";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useOutsideClick } from "hooks";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();
  useOutsideClick(sidebarRef, () => setSidebarOpen(false));

  return (
    <header className="relative h-20 w-full px-6 md:px-20 py-8 bg-white shadow-md flex items-center justify-between">
      <img alt="my_image" src={Logo} className="h-10" />
      <div className="hidden md:block space-x-4">
        <Button title={"Login"} type={"primary"} onClick={() => navigate("/signin")} />
        <Button title={"Signup"} type={"secondary"} onClick={() => navigate("/signup")} />
      </div>
      <AiOutlineMenu className="block md:hidden text-primary cursor-pointer" fontSize={"1.7rem"} onClick={() => setSidebarOpen(true)} />
      {isSidebarOpen && (
        <div className={`block md:hidden absolute w-72 h-screen bg-white shadow-lg z-10 top-0 left-0 py-6 px-4`} ref={sidebarRef}>
          <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-center ">
              <img alt="my_image" src={Logo} className="h-10" />
              <RxCross2 className="text-primary cursor-pointer" fontSize={"1.7rem"} onClick={() => setSidebarOpen(false)} />
            </div>
            <div className="flex flex-col space-y-3 mt-10">
              <Button title={"Login"} type={"primary"} onClick={() => navigate("/signin")} />
              <Button title={"Signup"} type={"secondary"} onClick={() => navigate("/signup")} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export { Header };
