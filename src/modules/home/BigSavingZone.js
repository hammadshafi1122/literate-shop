import { bigSave1, bigSave2, bigSave3, bigSave4, bigSave5 } from "assets/images";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Button } from "components";

const savingZone = [
  {
    id: 1,
    preText: "Dress up in summer vibe",
    title: "Hawalian shirts",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
    backgroundImage: bigSave1,
  },
  {
    id: 2,
    preText: "New Designs Every Week",
    title: "Printed T-Shirts",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
    backgroundImage: bigSave2,
  },
  {
    id: 3,
    preText: "Move with style & comfort",
    title: "Cargo Joggers",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
    backgroundImage: bigSave3,
  },
];
const savingZone2 = [
  {
    id: 4,
    preText: "Live in comfort",
    title: "Urban Shirts",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
    backgroundImage: bigSave4,
  },
  {
    id: 5,
    preText: "Street Style Icon",
    title: "Oversized T-Shirts",
    discountText: "Upto 50% off",
    linkText: "Explore Items",
    url: "/",
    backgroundImage: bigSave5,
  },
];

const BigSavingZone = () => {
  return (
    <>
      <div className="flex items-center h-full space-x-3">
        <div className="h-6 w-1 bg-purple-600 rounded-full"></div>
        <h1 className="font-bold text-3xl">Big Saving Zone</h1>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-8 md:space-y-0">
          {savingZone.map((item) => (
            <div
              className="relative px-6 md:px-8 py-6 md:py-16 space-y-3 md:space-y-8 w-full h-[280px] md:h-[356.2px] rounded-xl text-black"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div
                className={`space-y-3 ${
                  item.id === 1
                    ? "absolute left-5 text-white"
                    : item.id === 2
                    ? " text-white absolute right-5"
                    : "absolute right-5"
                }`}
              >
                <div className="space-y-6">
                  <h6 className="font-bold text-2xl md:text-4xl w-[180px] md:w-[170px]">
                    {item.title}
                  </h6>
                  <h6 className="font-bold text-sm md:text-sm">{item.preText}</h6>
                  <h6 className="font-bold text-md md:text-xl">{item.discountText}</h6>
                </div>
                <div>
                  <AiOutlineArrowDown fontSize={"1.6rem"} />
                </div>
                <div>
                  <Button title={"Shop Now"} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-8 md:space-y-0">
          {savingZone2.map((item) => (
            <div
              className="relative bg-down px-6 md:px-8 py-6 md:py-16 space-y-3 md:space-y-8 w-full h-[285px] md:h-[356.2px] rounded-xl text-black"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div className="absolute top-5  right-10 space-y-2 ">
                <div className="space-y-3">
                  <h6 className="font-bold text-2xl md:text-4xl w-[180px] md:w-[200px]">
                    {item.title}
                  </h6>
                  <h6 className="font-bold text-md md:text-lg">{item.preText}</h6>

                  <h6 className="font-light text-md md:text-xl">{item.discountText}</h6>
                </div>
                <h6 className="font-bold underline cursor-pointer text-sm md:text-lg">
                  {item.linkText}
                </h6>
                <div>
                  <AiOutlineArrowDown fontSize={"1.6rem"} />
                </div>
                <div>
                  <Button title={"Shop Now"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { BigSavingZone };
