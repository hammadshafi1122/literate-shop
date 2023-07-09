import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSolidHeartCircle } from "react-icons/bi";

const ProductCard = ({ image, title, price, isHeart }) => {
  return (
    <div className="space-y-6 relative">
      <img src={image} alt="new arrival" className="w-full" />
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h6 className="font-bold text-lg">{title}</h6>
          <h1>Explore items</h1>
        </div>
        {price ? (
          <label className="px-6 py-2 text-black bg-slate-100 rounded-xl font-bold ">{price}</label>
        ) : (
          <AiOutlineArrowRight fontSize={"1.6rem"} />
        )}
      </div>
      {isHeart && (
        <BiSolidHeartCircle
          className="absolute top-0 right-5 text-white cursor-pointer"
          fontSize={"2.4rem"}
        />
      )}
    </div>
  );
};

export { ProductCard };
