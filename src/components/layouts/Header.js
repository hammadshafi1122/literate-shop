import React, { useRef, useState } from "react";
import { Logo } from "assets/images";
import { Button } from "components";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useOutsideClick } from "hooks";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ userLoggedIn }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();
  useOutsideClick(sidebarRef, () => setSidebarOpen(false));

  return (
    <header className="p-4 bg-gray-200">
      <div>
        {userLoggedIn ? (
          <div className="">
            <div className="flex justify-between">
              <img alt="my_image" src={Logo} className="h-10 md:hidden" />

              <AiOutlineMenu
                className="block md:hidden text-primary cursor-pointer"
                fontSize={"1.7rem"}
                onClick={() => setSidebarOpen(true)}
              />
            </div>

            {isSidebarOpen && (
              <div
                className={`block md:hidden absolute w-72 h-screen bg-white shadow-lg z-10 top-0 left-0 py-6 px-4`}
                ref={sidebarRef}
              >
                <div className="h-full flex flex-col space-y-6">
                  <div className="flex justify-between items-center ">
                    <img alt="my_image" src={Logo} className="h-10" />
                    <RxCross2
                      className="text-primary cursor-pointer"
                      fontSize={"1.7rem"}
                      onClick={() => setSidebarOpen(false)}
                    />
                  </div>
                  <div className="space-y-13">
                    <div className="">
                      <div className="">
                        <ul className="text-lg space-y-5">
                          <li className=" border-black cursor-pointer ">Home</li>
                          <li className=" border-black cursor-pointer ">Men</li>
                          <li className=" border-black cursor-pointer ">Women</li>
                          <li className=" border-black cursor-pointer ">Joggers</li>
                          <li className=" border-black cursor-pointer ">Feedback</li>
                        </ul>
                      </div>
                      <div className="w-full bg-primary h-1 my-7"></div>
                    </div>
                    <div className="space-y-10">
                      <div className="space-y-3 ">
                        <AiOutlineHeart
                          fontSize={"1.9rem"}
                          className="bg-slate-200 p-2 rounded-lg"
                        />{" "}
                        <IoMdContact fontSize={"1.9rem"} className="bg-slate-200 p-2 rounded-lg" />
                        <BsCart2
                          fontSize={"1.9rem"}
                          className="bg-slate-200 p-2 rounded-lgnpm start"
                        />
                      </div>
                      <div className="w-full bg-primary h-1 my-7"></div>

                      <div className=" bg-slate-200 flex rounded-lg p-1 md:space-x-2 block ">
                        <AiOutlineSearch className="text-white" />
                        <input
                          className="bg-slate-200 text-slate-800 focus:outline-none"
                          type="Search"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <div className=" md:justify-around items-center hidden md:flex">
                <div>
                  <img alt="my_image" src={Logo} className="h-10" />
                </div>
                <div className="">
                  <ul className="md:flex space-x-8 text-lg">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Men</li>
                    <li className="cursor-pointer">Women</li>
                    <li className="cursor-pointer">Joggers</li>
                    <li className="cursor-pointer">Feedback</li>
                  </ul>
                </div>

                <div className="flex bg-slate-200 rounded-lg px-1 py-1 space-x-2 ">
                  <AiOutlineSearch className="text-slate-500 text-2xl" />
                  <input
                    className="bg-slate-200 text-slate-800 focus:outline-none"
                    type="Search"
                    placeholder="Search"
                  />
                </div>

                <div className="flex space-x-4">
                  <AiOutlineHeart fontSize={"1.9rem"} className="bg-slate-200 p-2 rounded-lg" />{" "}
                  <IoMdContact fontSize={"1.9rem"} className="bg-slate-200 p-2 rounded-lg" />
                  <BsCart2 fontSize={"1.9rem"} className="bg-slate-200 p-2 rounded-lgnpm start" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <header className="relative h-20 w-full px-6 md:px-20 py-8 bg-white shadow-md flex items-center justify-between">
            <img alt="my_image" src={Logo} className="h-10" />

            <div className="hidden md:block space-x-4">
              <Button title={"Login"} onClick={() => navigate("/signin")} />
              <Button title={"Signup"} type={"secondary"} onClick={() => navigate("/signup")} />
            </div>

            <AiOutlineMenu
              className="block md:hidden text-primary cursor-pointer"
              fontSize={"1.7rem"}
              onClick={() => setSidebarOpen(true)}
            />

            {isSidebarOpen && (
              <div
                className={`block md:hidden absolute w-72 h-screen bg-white shadow-lg z-10 top-0 left-0 py-6 px-4`}
                ref={sidebarRef}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="flex justify-between items-center ">
                    <img alt="my_image" src={Logo} className="h-10" />
                    <RxCross2
                      className="text-primary cursor-pointer"
                      fontSize={"1.7rem"}
                      onClick={() => setSidebarOpen(false)}
                    />
                  </div>

                  <div className="flex flex-col space-y-3 mt-10">
                    <Button title={"Login"} onClick={() => navigate("/signin")} />
                    <Button
                      title={"Signup"}
                      type={"secondary"}
                      onClick={() => navigate("/signup")}
                    />
                  </div>
                </div>
              </div>
            )}
          </header>
        )}
      </div>
    </header>
  );
};

export { Header };
