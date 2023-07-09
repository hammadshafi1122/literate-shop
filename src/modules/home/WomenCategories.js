import { Men1 } from "assets/images";
import { ProductCard } from "components";
import React from "react";

const womensCollection = [
  {
    id: 1,
    image: Men1,
    title: "Shirts",
  },
  {
    id: 2,
    image: Men1,
    title: "Printed",
  },
  {
    id: 3,
    image: Men1,
    title: "Active T-Shirts",
  },
  {
    id: 4,
    image: Men1,
    title: "Urban Shirts",
  },
];

const WomenCategories = () => {
  return (
    <div>
      <div className="flex items-center h-full space-x-3">
        <div className="h-6 w-1 bg-purple-600 rounded-full"></div>
        <h1 className="font-bold text-3xl">Women Categories</h1>
      </div>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {womensCollection.map((item) => (
          <ProductCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export { WomenCategories };
