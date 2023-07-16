import React from "react";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Vector } from "assets/images";
import { Vector1 } from "assets/images";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3C4242] px-6 py-10 md:px-10 lg:px-36  text-white">
      <div className="space-y-8">
        <div className="md:flex justify-between">
          <ul className="space-y-6">
            <li className="text-bold text-2xl">Need Help</li>
            <div className="space-y-3">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Returns & Back</li>
              <li>FAQ's</li>
              <li>Career</li>
            </div>
          </ul>
          <ul className="space-y-6">
            <li className="text-bold text-2xl">Company</li>
            <div className="space-y-3">
              <li>About Us</li>
              <li>Euphoria Blog</li>
              <li>Euphoristan</li>
              <li>Collaboration</li>
              <li>Media</li>
            </div>
          </ul>
          <ul className="space-y-6">
            <li className="text-bold text-2xl">More Info</li>
            <div className="space-y-3">
              <li>Term and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Sitemap</li>
            </div>
          </ul>
          <ul className="space-y-6 w-[10rem]">
            <li className="text-bold text-2xl">Location</li>
            <div className="space-y-3">
              <li>support@gmail.com</li>
              <li>Eklingpura Churaba, Ahmedabad Main street road lahore</li>
              <li>INH 8- Near Mohallah Hostel Udaipur, India</li>
            </div>
          </ul>
        </div>
        <div className="md:flex justify-between">
          <div className="flex space-x-2 my-10">
            <LiaFacebookF fontSize={"1.9rem"} className="bg-slate-200 p-2 rounded-lg text-black" />
            <FaInstagram fontSize={"1.9rem"} className="bg-slate-200 p-2 rounded-lg text-black" />
            <AiOutlineTwitter
              fontSize={"1.9rem"}
              className="bg-slate-200 p-2 rounded-lg text-black"
            />
            <RiLinkedinFill
              fontSize={"1.9rem"}
              className="bg-slate-200 p-2 rounded-lg text-black"
            />
          </div>
          <div className="space-y-5">
            <h1 className="text-bold text-3xl">Download The App </h1>
            <div className="flex space-x-5">
              <div className="flex space-x-2">
                <div>
                  <img src={Vector} alt="" />
                </div>
                <div className="space-y-3">
                  <h5>The google backup</h5>
                  <h3>Google Play</h3>
                </div>
              </div>
              <div className="flex space-x-2">
                <div>
                  <img src={Vector1} alt="" />
                </div>
                <div className="space-y-3">
                  <h5>Flex cross</h5>
                  <h3>App Store</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <hr />
          <h1 className="text-bold text-2xl">Popular Catogories</h1>
          <hr />
          <p className="flex justify-center">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
