import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProductCard = ({ image, title }) => {
  return (
    <div className="space-y-6">
      <img src={image} alt="new arrival" className="w-full" />
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h6 className="font-bold text-lg">{title}</h6>
          <h1>Explore items</h1>
        </div>
        <AiOutlineArrowRight fontSize={"1.6rem"} />
      </div>
    </div>
  );
};

export { ProductCard };
