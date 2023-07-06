import React from "react";
import { HomeBanner } from "assets/images";

const Banner = () => {
  return (
    <div className="h-[716px] w-full flex justify-center items-center">
      <img src={HomeBanner} alt="banner" className="w-full" />
    </div>
  );
};

export { Banner };
