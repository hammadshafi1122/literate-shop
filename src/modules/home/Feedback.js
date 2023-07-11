import { Men1 } from "assets/images";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Review } from "components";

const reviews = [
  {
    id: 1,
    profileImage: Men1,
    name: "Floyd Miles",
    review:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    stars: 4,
  },
  {
    id: 2,
    profileImage: Men1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae neque eu sem dapibus placerat. Fusce sit amet urna pulvinar, fermentum libero id, dapibus mauris.",
    stars: 5,
  },
  {
    id: 3,
    profileImage: Men1,
    name: "Jane Smith",
    review:
      "Ut ac velit nec dui dictum consequat. Sed efficitur semper lectus, id tincidunt felis ultricies eu. Phasellus non finibus tortor.",
    stars: 3,
  },
  {
    id: 4,
    profileImage: Men1,
    name: "David Johnson",
    review:
      "Praesent vel magna suscipit, semper odio vitae, iaculis dolor. Sed eget neque eu elit tincidunt rhoncus nec in arcu.",
    stars: 2,
  },
  {
    id: 5,
    profileImage: Men1,
    name: "Sarah Williams",
    review:
      "Aenean et mauris fringilla, rutrum mauris sed, consectetur metus. Mauris nec augue sit amet metus efficitur aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    stars: 4,
  },
  {
    id: 6,
    profileImage: Men1,
    name: "Michael Brown",
    review:
      "In quis massa fringilla, convallis mauris et, suscipit elit. Proin tempor tincidunt enim at semper. Duis efficitur tincidunt lorem.",
    stars: 4,
  },
  {
    id: 7,
    profileImage: Men1,
    name: "Emily Davis",
    review:
      "Suspendisse vitae risus pretium, vulputate ligula eu, rhoncus elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur gravida quam a ex congue, vel vestibulum elit ultrices.",
    stars: 5,
  },
];

const Feedback = () => {
  return (
    <div>
      <div className="flex items-center h-full space-x-3">
        <div className="h-6 w-1 bg-purple-600 rounded-full"></div>
        <h1 className="font-bold text-3xl">Feedback</h1>
      </div>
      <Swiper
        spaceBetween={20}
        centeredSlides
        centeredSlidesBounds
        modules={[Pagination]}
        className="mySwiper !pb-8 w-full mt-10"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <Review
              image={item.profileImage}
              name={item.name}
              review={item.review}
              stars={item.stars}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Feedback };
