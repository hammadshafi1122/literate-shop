import React, { useEffect } from "react";
import { Footer, Header } from "components";
import { useNavigate } from "react-router-dom";
import {
  Banner,
  BigSavingZone,
  Deals,
  DiscountBanners,
  Feedback,
  LimeLights,
  MensCateogories,
  NewArrival,
  ShopNow,
  WomenCategories,
} from "modules/home";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (!userLoggedIn) {
      navigate("/signin");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className="space-y-10">
        <Banner />
        <div className="space-y-10 px-6 md:px-16">
          <DiscountBanners />
          <NewArrival />
          <BigSavingZone />
          <ShopNow />
          <MensCateogories />
          <WomenCategories />
          <Deals />
          <LimeLights />
          <Feedback />
        </div>
        <Footer />
      </div>
    </>
  );
};

export { Homepage };
