import React from 'react';

const Prototypes = () => {
  return (
    <div className="h-auto bg-[#1F1F1F] py-8 px-4">
      {/* Heading */}
      <h4 className="font-josefin text-center text-white text-lg sm:text-xl lg:text-2xl pt-4 font-semibold mb-12">
        From a few quick-turn prototypes quoted and ordered online, to a few thousand
        <br className="hidden sm:block" />
        production boards without need for a long-term commitment
      </h4>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-32 justify-center items-center">
        {/* Assembly Specialists Card */}
        <div data-aos-delay="50"  data-aos="fade-right" className="w-60 text-center">
          <img className="mx-auto h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 mb-4" src="./cert.png" alt="Assembly Specialists" />
          <h5 className="font-jost text-white mb-2 text-base sm:text-lg font-semibold"> 
            Assembly Specialists
          </h5>
          <p className="font-jost text-white text-sm sm:text-base">
            From one-off prototypes, to small production runs, to full orders.
          </p>
        </div>

        {/* Quick-Turn Prototypes Card */}
        <div data-aos-delay="150" data-aos="fade-right" className="w-60 text-center">
          <img className="mx-auto h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 mb-4" src="./quick.png" alt="Quick-Turn Prototypes" />
          <h5 className="font-jost text-white mb-2 text-base sm:text-lg font-semibold"> 
            Quick-Turn Prototypes
          </h5>
          <p className="font-jost text-white text-sm sm:text-base">
            Our Full-Proto service when you need to see if your design is ready and you need it fast.
          </p>
        </div>

        {/* On-Demand Manufacturing Card */}
        <div data-aos-delay="250" data-aos="fade-right" className="w-60 text-center">
          <img className="mx-auto h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 mb-4" src="./box.png" alt="On-Demand Manufacturing" />
          <h5 className="font-jost text-white mb-2 text-base sm:text-lg font-semibold"> 
            On-Demand Manufacturing
          </h5>
          <p className="font-jost text-white text-sm sm:text-base">
            Choice-Production for maximum production flexibility without need for a long-term commitment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prototypes;
