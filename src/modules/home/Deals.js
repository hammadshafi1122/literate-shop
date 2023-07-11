import { Brand1 } from "assets/images";
import React from "react";

const brands = [
  {
    id: 1,
    image: Brand1,
  },
  {
    id: 2,
    image: Brand1,
  },
  {
    id: 3,
    image: Brand1,
  },
  {
    id: 4,
    image: Brand1,
  },
  {
    id: 5,
    image: Brand1,
  },
];

const Deals = () => {
  return (
    <div className="bg-[#3C4242] rounded-xl text-white flex flex-col items-center py-12 space-y-5 md:space-y-8 px-6 md:px-0">
      <h4 className="font-bold text-2xl md:text-5xl">Top Brand Deals</h4>
      <p className="font-light text-lg">
        Up to <span className="font-bold text-xl text-yellow-500">60%</span> off on brands
      </p>
      <div className="pt-4 grid grid-cols-2 md:grid-cols-5 gap-6">
        {brands.map((item) => (
          <div key={item.id} className="p-4 bg-white rounded-2xl flex justify-center items-center">
            <img src={item.image} alt="brand" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Deals };
