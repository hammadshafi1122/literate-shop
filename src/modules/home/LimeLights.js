import { Men1 } from "assets/images";
import { ProductCard } from "components";
import React from "react";

const limeLightCollection = [
  {
    id: 1,
    image: Men1,
    title: "Shirts",
    price: "$123.00",
  },
  {
    id: 2,
    image: Men1,
    title: "Printed",
    price: "$34.00",
  },
  {
    id: 3,
    image: Men1,
    title: "Active T-Shirts",
    price: "$64.00",
  },
  {
    id: 4,
    image: Men1,
    title: "Urban Shirts",
    price: "$32.00",
  },
];

const LimeLights = () => {
  return (
    <div>
      <div className="flex items-center h-full space-x-3">
        <div className="h-6 w-1 bg-purple-600 rounded-full"></div>
        <h1 className="font-bold text-3xl">LimeLights</h1>
      </div>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {limeLightCollection.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            isHeart
          />
        ))}
      </div>
    </div>
  );
};

export { LimeLights };
