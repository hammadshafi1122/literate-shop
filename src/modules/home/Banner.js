import React from "react";
import { HomeBanner } from "assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Button } from "components";

const bannerSlides = [
  {
    id: 1,
    image: HomeBanner,
    preText: "T-Shirt / Tops",
    title: "Summer Value Pack",
    postText: "cool / colorful / comfy",
    url: "/",
  },
  {
    id: 2,
    image: HomeBanner,
    preText: "Pents / Jeean",
    title: "Winter Value Pack",
    postText: "warn / colorful / light",
    url: "/",
  },
];

const Banner = () => {
  return (
    <div className="h-[350px] md:h-[716px] w-full flex justify-center items-center relative">
      <div className="swiper-button image-swiper-button-next">
        <BsChevronRight fontSize="2rem" className="text-white" />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <BsChevronLeft fontSize="2rem" className="text-white" />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        centeredSlidesBounds
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        className="mySwiper !pb-8 w-full"
      >
        {bannerSlides.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="px-8 py-16 space-y-8 w-full h-[350px] md:h-[716px] text-white"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full md:w-1/2 h-full flex items-center px-2 md:px-28">
                <div className="flex flex-col space-y-4 md:space-y-8">
                  <h6 className="font-light text-lg md:text-4xl">{item.preText}</h6>
                  <h3 className="font-bold text-xl md:text-7xl">{item.title}</h3>
                  <h6 className="font-light text-lg md:text-4xl">{item.postText}</h6>
                  <Button title={"Shop Now"} className={"py-2 md:py-4 px-4 md:px-0 w-28 md:w-56"} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Banner };
