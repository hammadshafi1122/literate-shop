import React from "react";
import { Women1, Women2, Women3, Women4 } from "assets/images";
import { ProductCard } from "components";
const WomenCollection = [
  {
    id: 1,
    image: Women1,
    title: "Hoodies and Sweet Hearts",
  },
  {
    id: 2,
    image: Women2,
    title: "Coats and Parks",
  },
  {
    id: 1,
    image: Women3,
    title: "Tees & T-Shirts",
  },
  {
    id: 2,
    image: Women4,
    title: "Boxers",
  },
];

const WomenCategories = () => {
  return (
    <div>
      <div className="flex items-center h-full space-x-3">
        <div className="h-6 w-1 bg-purple-600 rounded-full"></div>
        <h1 className="font-bold text-3xl">Womens Categories</h1>
      </div>
      <div className="pt-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {WomenCollection.map((item) => (
          <ProductCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export { WomenCategories };
