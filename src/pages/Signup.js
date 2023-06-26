import React from "react";
import { Button, Header, Input, Checkbox } from "components";
import { SignupBanner } from "assets/images";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="w-full h-full flex">
        <div className="hidden md:block w-1/2 h-full">
          <img alt="sign in banner" src={SignupBanner} className="w-full min-h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 h-full p-6 md:p-14 space-y-10 md:space-y-14">
          <div className="space-y-2">
            <h1 className="font-bold text-4xl">Sign up page</h1>
            <p className="text-gray">Sign up for free to access the untimate of khan sab</p>
          </div>

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
              onChange={(e) => console.log(e.target.value)}
              type="email"
            />
            <div>
              <Input
                label={"Password"}
                placeholder={""}
                onChange={(e) => console.log(e.target.value)}
                type="password"
              />
              <p className="text-gray mt-2">Password should contain alpha numeric values</p>
            </div>
          </div>
          <div className="space-y-2">
            <Checkbox id="agreeTerms" name="agreeTerms" label={"Agree to terms and conditions"} />
            <Checkbox
              id="subscribe"
              name="subscriber"
              label={"Subscribe to our monthly subscription"}
            />
          </div>
          <div className="space-y-2">
            <Button title="Signin" className={"py-4 px-16"} />
            <p className="font-light">
              Already have an account?{" "}
              <span>
                <a href="/signin" className="underline">
                  Signin
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signup };
