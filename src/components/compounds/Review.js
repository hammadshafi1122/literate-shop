import React from "react";
import { StarRating } from "components/elements";

const Review = ({ image, name, stars, review }) => {
  return (
    <div className="space-y-4 p-6 border-2 border-gray rounded-xl h-[292px]">
      <div className="flex justify-between">
        <div className="flex flex-col space-y-2">
          <img src={image} alt="profile" className="h-16 w-16 bg-cover" />
          <h6 className="font-bold text-xl">{name}</h6>
        </div>
        <div className="flex justify-start items-start">
          <StarRating value={stars} />
        </div>
      </div>
      <p className="font-normal text-gray line-clamp-4">{review}</p>
    </div>
  );
};

export { Review };
