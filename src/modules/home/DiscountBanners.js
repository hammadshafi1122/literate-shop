import { Discount2 } from "assets/images";
import React from "react";

const discounts = [
  {
    id: 1,
    preText: "Low Price",
    title: "High Coziness",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
    backgroundImage: Discount2,
  },
  {
    id: 2,
    preText: "Beyoung Presents",
    title: "Breezy Summer Style",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
    backgroundImage: Discount2,
  },
];

const DiscountBanners = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0">
      {discounts.map((item) => (
        <div
          className="px-6 md:px-8 py-6 md:py-16 space-y-3 md:space-y-8 w-full h-[200px] md:h-[356.2px] rounded-xl text-white"
          style={{
            backgroundImage: `url(${item.backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h6 className="font-bold text-md md:text-lg">{item.preText}</h6>
          <div className="space-y-2">
            <h6 className="font-bold text-2xl md:text-4xl w-[180px] md:w-[300px]">{item.title}</h6>
            <h6 className="font-light text-md md:text-xl">{item.discountText}</h6>
          </div>
          <h6 className="font-bold underline cursor-pointer text-sm md:text-lg">{item.linkText}</h6>
        </div>
      ))}
    </div>
  );
};

export { DiscountBanners };
