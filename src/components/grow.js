import React from 'react';

const Grow = () => {
  return (
    <>
      <div className="h-auto bg-[#1F1F1F] mb-20 py-16">
        <h3 className="text-white text-center text-4xl md:text-5xl lg:text-6xl pb-14">
          Grow With Us
        </h3>
        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 px-6">
          {/* Revenue */}
          <div className="flex flex-col items-center lg:flex-row gap-6">
            <div className="text-center">
              <h4 className="pb-3 font-jost font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                $400k+
              </h4>
              <h6 className="font-jost font-light text-lg md:text-xl lg:text-2xl text-white">
                Revenue
              </h6>
            </div>
            <div className="hidden lg:block h-32 w-1 bg-gradient-to-t from-slate-50 to-gray-600 rounded-3xl"></div>
          </div>

          {/* Clients */}
          <div className="flex flex-col items-center lg:flex-row gap-6">
            <div className="text-center">
              <h4 className="pb-3 font-jost font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                500+
              </h4>
              <h6 className="font-jost font-light text-lg md:text-xl lg:text-2xl text-white">
                Clients
              </h6>
            </div>
            <div className="hidden lg:block h-32 w-1 bg-gradient-to-t from-slate-50 to-gray-600 rounded-3xl"></div>
          </div>

          {/* Employees */}
          <div className="flex flex-col items-center lg:flex-row gap-6">
            <div className="text-center">
              <h4 className="pb-3 font-jost font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                80,000+
              </h4>
              <h6 className="font-jost font-light text-lg md:text-xl lg:text-2xl text-white">
                Employees
              </h6>
            </div>
            <div className="hidden lg:block h-32 w-1 bg-gradient-to-t from-slate-50 to-gray-600 rounded-3xl"></div>
          </div>

          {/* Countries */}
          <div className="flex flex-col items-center lg:flex-row gap-6">
            <div className="text-center">
              <h4 className="pb-3 font-jost font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                10+
              </h4>
              <h6 className="font-jost font-light text-lg md:text-xl lg:text-2xl text-white">
                Countries
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grow;
