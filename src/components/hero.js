import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-screen">
        {/* Left side */}
        <div
          className="lg:w-1/2 w-full bg-gray-900 relative flex flex-col items-start p-6 sm:p-8 lg:p-10"
        >
          {/* Circle 1 positioned at the right edge */}
          <div className="hidden lg:block absolute top-10 right-0 w-10 h-20 md:w-14 md:h-28 lg:w-16 lg:h-32 rounded-tl-full rounded-bl-full bg-neutral-600 z-0"></div>

          <div className="flex items-start w-full">
            <h1 className="text-white font-light  text-4xl sm:text-5xl md:text-7xl lg:text-9xl mb-5">
              NMOLD
            </h1>
          </div>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-jost">
            Bringing Ideas To Life
          </h2>
          <p className="text-white font-jost font-light text-xs sm:text-sm md:text-base lg:text-lg mt-4 w-full md:w-[90%] lg:w-[500px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            commodi ad porro quo. Dolorem illum, modi, maiores aperiam tenetur
            odio voluptatum fugiat magni impedit, error voluptas recusandae.
            Provident, nisi quas.
          </p>
          <div className="mt-6">
            <button className="font-josefin w-32 sm:w-36 md:w-40 h-10 sm:h-12 md:h-14 bg-white cursor-pointer rounded-lg border-2 border-gray-500 shadow-[inset_0px_-2px_0px_1px_#1F1F1F]  hover:bg-neutral-200 transition duration-300 ease-in-out">
              <span className="font-medium text-[#333] group-hover:text-black  ">
                Know More..
              </span>
            </button>
          </div>

          {/* Circle 2 positioned at the left edge */}
          <div className="hidden lg:block absolute bottom-3 left-0 w-10 h-20 md:w-14 md:h-28 lg:w-16 lg:h-32 rounded-tr-full rounded-br-full bg-gray-600"></div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="h-[200px] sm:h-[300px] md:h-[500px] lg:h-[750px] w-full object-cover"
                src="./image2.png"
                alt="Slide 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[200px] sm:h-[300px] md:h-[500px] lg:h-[750px] w-full object-cover"
                src="./image1.png"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[200px] sm:h-[300px] md:h-[500px] lg:h-[750px] w-full object-cover"
                src="./image3.png"
                alt="Slide 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
