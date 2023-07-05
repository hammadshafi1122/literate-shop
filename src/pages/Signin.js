import React, { useState } from "react";
import { Button, Header, Input } from "components";
import { SigninBanner } from "assets/images";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (!email || !password) {
      toast.error("Fill the fields");
      return;
    }
    if (email === "hammad@gmail.com" && password === "12345") {
      toast.success("Login Successfully");
      localStorage.setItem("userLoggedIn", true);
      navigate("/");
    } else {
      toast.error("Invalid Credientials");
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-full flex">
        <div className="hidden md:block w-1/2 h-full">
          <img alt="sign in banner" src={SigninBanner} className="w-full min-h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 h-full p-6 md:p-14 space-y-10 md:space-y-14">
          <h1 className="font-bold text-4xl">Sign in page</h1>
          <div className="space-y-4">
            <Button
              type={"secondary"}
              icon={() => <FcGoogle fontSize={"1.4rem"} />}
              title={"Continue with Facebook"}
              className={"w-full py-4"}
            />
            <Button
              type={"secondary"}
              icon={() => <BsTwitter fontSize={"1.4rem"} className="text-[#00acee]" />}
              title={"Continue with Twitter"}
              className={"w-full py-4"}
            />
          </div>
          <div className="flex justify-between items-center space-x-3">
            <div className="w-full border-b-2 border-gray" />
            <p className="text-black">OR</p>
            <div className="w-full border-b-2 border-gray" />
          </div>
          <div className="space-y-4">
            <Input
              label={"Email address"}
              placeholder={""}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
            />
            <Input
              label={"Password"}
              placeholder={""}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
            />
          </div>
          <div className="space-y-2">
            <Button title="Signin" className={"py-4 px-16"} onClick={onSubmit} />
            <p className="font-light">
              Does not have a account?{" "}
              <span>
                <a href="/signup" className="underline">
                  Signup
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signin };
