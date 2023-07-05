import React from "react";

const discounts = [
  {
    id: 1,
    preText: "Low Price",
    title: "High Coziness",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
  },
  {
    id: 2,
    preText: "Beyoung Presents",
    title: "Breezy Summer Style",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
  },
];

const DiscountBanners = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-6">
      {discounts.map((item) => (
        <div className="bg-green-200 px-8 py-14 w-full space-y-4">
          <h6 className="font-bold">{item.preText}</h6>
          <div className="space-y-2">
            <h6 className="font-bold text-2xl">{item.title}</h6>
            <h6 className="font-light text-lg">{item.discountText}</h6>
          </div>
          <h6 className="font-bold underline">{item.linkText}</h6>
        </div>
      ))}
    </div>
  );
};

export { DiscountBanners };
