import { ShopNowLeftSide, ShopNowRightSide } from "assets/images";
import { Button } from "components";
import React from "react";

const ShopNow = () => {
  return (
    <div className="flex w-full">
      <div
        className="w-full md:w-1/2 h-[300px] md:h-[639.72px] rounded-xl md:rounded-l-xl"
        style={{
          backgroundImage: `url(${ShopNowLeftSide})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full flex flex-col justify-center space-y-3 md:space-y-5 px-6 md:px-20">
          <h4 className="text-white font-bold text-sm md:text-4xl">
            We made your everday fashion better
          </h4>
          <p className="text-white font-light text-xs md:text-md w-auto md:w-[400px] flex">
            We made your everday fashion better. We made your everday fashion better. We made your
            everday fashion better
          </p>
          <div>
            <Button title={"Shop Now"} className={"text-xs md:text-md"} />
          </div>
        </div>
      </div>
      <div
        className="w-1/2 h-[300px] md:h-[639.72px] rounded-r-xl -ml-1 hidden md:block"
        style={{
          backgroundImage: `url(${ShopNowRightSide})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export { ShopNow };
