import React, { useState } from 'react';
import arrow from '../images/arrow.png';
import Review_Prop from './Review_Prop';
import 'swiper/css';
import 'swiper/css/navigation';

const Reviews = () => {
  const [review, setReview] = useState({
    one: true,
    two: false,
    three: false,
  });

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center py-14 lg:py-28">
      {/* Left Section */}
      <div  data-aos="fade-down-right" className="flex lg:pr-36 pb-12 lg:pb-60 flex-col items-center lg:items-start">
        <h1 className="josefin font-semibold text-2xl lg:text-4xl text-center lg:text-left w-80">
          Our Customers Love What We Do
        </h1>
        <p className="jost w-72 lg:w-96 pt-4 text-center lg:text-left text-sm lg:text-base">
          Our customers love our products! Read their reviews to discover why
          they're raving about our quality, service, and overall experience. Join
          the satisfied ranks today!
        </p>
      </div>

      {/* Right Section */}
      <div data-aos="fade-up-left" className="w-full lg:w-auto">
        {/* Arrow Buttons */}
        <div className="flex justify-center lg:justify-end items-center lg:pr-20 gap-4 mb-6">
          <img
            alt="Previous Review"
            className=" rounded-t-full hover:scale-110 w-12 lg:w-14 cursor-pointer -rotate-90 transition-all duration-300 ease-in-out"
            src="./Comment_arrow.png"
            onClick={() => {
              if (review.one) {
                setReview({ one: false, two: false, three: true });
              } else if (review.two) {
                setReview({ one: true, two: false, three: false });
              } else if (review.three) {
                setReview({ one: false, two: true, three: false });
              }
            }}
          />
          <img
            alt="Next Review"
            className=" rounded-t-full hover:scale-110 w-12 lg:w-14 cursor-pointer rotate-90 transition-all duration-300 ease-in-out"
            src="./Comment_arrow.png"
            onClick={() => {
              if (review.one) {
                setReview({ one: false, two: true, three: false });
              } else if (review.two) {
                setReview({ one: false, two: false, three: true });
              } else if (review.three) {
                setReview({ one: true, two: false, three: false });
              }
            }}
          />
        </div>

        {/* Reviews */}
        <div data-aos="fade-up-left" className="flex overflow-hidden justify-center h-auto lg:h-[375px] w-full lg:w-[580px]">
          <div className={`${review.one ? 'block' : 'hidden'}`}>
            <Review_Prop
              desc="Bit Pl has revolutionized the way I manage projects. Its comprehensive suite of tools, user-friendly interface, and robust performance have significantly enhanced our productivity and collaboration. A must-have for any team!"
            />
          </div>
          <div className={`${review.two ? 'block' : 'hidden'}`}>
            <Review_Prop desc="The software has exceeded our expectations. It’s efficient, intuitive, and the support team is outstanding!" />
          </div>
          <div className={`${review.three ? 'block' : 'hidden'}`}>
            <Review_Prop desc="I can’t imagine running my business without this tool. It has streamlined processes and saved us countless hours." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
