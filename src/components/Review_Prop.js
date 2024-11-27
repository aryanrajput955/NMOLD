import React from 'react';
import img1 from '../images/colon.png';
import img2 from '../images/image.png';
import review_star from '../images/rating1.png';
import star from '../images/rating.png';

const Review_Prop = ({ desc }) => {
  return (
    <div className="bg-[#1f1f1f] rounded-3xl flex flex-col px-6 sm:px-10 py-7">
      {/* Top Image */}
      <img
        alt="Colon Icon"
      src={img1}
        className="aspect-square w-14 sm:w-20 mx-auto sm:mx-0"
      />

      {/* Description Section */}
      <div className="pl-0 sm:pl-9 mt-4">
        <p className="text-[#e5e5e5] h-28 font-jost font-medium text-sm sm:text-base text-center sm:text-left w-full sm:w-[390px]">
          {desc}
        </p>

        {/* Reviewer Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-10">
          <div className="flex items-center gap-4 text-white">
            {/* Profile Image */}
            <img
              alt="Reviewer"
              className="aspect-square w-12 sm:w-14 rounded-full"
              src={img2}
            />
            {/* Reviewer Info */}
            <div>
              <h1 className="text-sm sm:text-base">John Doee</h1>
              <h1 className="font-thin text-xs sm:text-sm">
                CEO of Strategies and Solutions
              </h1>
            </div>
          </div>

          {/* Star Ratings */}
          <div className="flex justify-center items-center gap-1 mt-4 sm:mt-0">
            <img
              alt="Star"
              className="aspect-square w-5 sm:w-7"
              src={star}
            />
            <img
              alt="Star"
              className="aspect-square w-5 sm:w-7"
              src={star}
            />
            <img
              alt="Star"
              className="aspect-square w-5 sm:w-7"
              src={star}
            />
            <img
              alt="Star"
              className="aspect-square w-5 sm:w-7"
              src={star}
            />
            <img
              alt="Half Star"
              className="aspect-square w-5 sm:w-7"
              src={review_star}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review_Prop;
