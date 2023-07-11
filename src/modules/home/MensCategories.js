import { Men1, Men2, Men3, Men4, Men5, Men6, Men8, Men7 } from "assets/images";
import { ProductCard } from "components";
import React from "react";

const mensCollection = [
  {
    id: 1,
    image: Men1,
    title: "Shirts",
  },
  {
    id: 2,
    image: Men2,
    title: "Printed",
  },
  {
    id: 3,
    image: Men3,
    title: "Active T-Shirts",
  },
  {
    id: 4,
    image: Men4,
    title: "Urban Shirts",
  },
  {
    id: 5,
    image: Men5,
    title: "Knitted Joggers",
  },
  {
    id: 6,
    image: Men6,
    title: "Full Sleeves",
  },
  {
    id: 7,
    image: Men7,
    title: "Active T-Shirts",
  },
  {
    id: 8,
    image: Men8,
    title: "Urban Shirts",
  },
];

const MensCateogories = () => {
  return (
    <div>
      <div className="flex items-center h-full space-x-3">
        <div className="h-6 w-1 bg-purple-600 rounded-full"></div>
        <h1 className="font-bold text-3xl">Mens Categories</h1>
      </div>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {mensCollection.map((item) => (
          <ProductCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export { MensCateogories };
