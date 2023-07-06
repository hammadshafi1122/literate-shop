import { NewArrival1, NewArrival2, NewArrival3, NewArrival4 } from "assets/images";
import React from "react";

const newArrivals = [
  {
    id: 1,
    image: NewArrival1,
    title: "Knitted Joggers",
  },
  {
    id: 2,
    image: NewArrival2,
    title: "Full Sleeves",
  },
  {
    id: 3,
    image: NewArrival3,
    title: "Active T-Shirts",
  },
  {
    id: 4,
    image: NewArrival4,
    title: "Urban Shirts",
  },
];

const NewArrival = () => {
  return (
    <div>
      <div className="flex items-center h-full space-x-3">
        <div className="h-6 w-1 bg-purple-600 rounded-full"></div>
        <h1 className="font-bold text-3xl">New Arrival</h1>
      </div>
      <div className="pt-20 px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {newArrivals.map((item) => (
          <div className="space-y-6" key={item.id}>
            <img src={item.image} alt="new arrival" className="w-full" />
            <h6 className="font-bold text-lg">{item.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NewArrival };
