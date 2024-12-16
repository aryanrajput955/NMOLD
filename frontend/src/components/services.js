import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="text-center">
        <h1 data-aos-once="true" data-aos="zoom-in" className="pt-14 font-semibold font-josefin text-2xl md:text-4xl">
          What Brings You Here
        </h1>
        <h2 data-aos-once="true"  data-aos="zoom-in"  data-aos-delay="50" className="font-jost text-lg md:text-2xl mb-10 pt-4 px-4 md:px-0">
          We are a group of like-minded people working towards a common goal
          "Better Future".
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-12 pb-28">
        {/* Automation Service */}
        <div data-aos="fade-right" className="flex flex-col bg-[#1F1F1F] shadow-sm border border-slate-200 rounded-3xl w-full md:w-[550px]">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-xl">
            <img
              src="./auto.png"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h6 className="text-center mb-2 text-white text-lg md:text-xl font-semibold">
              Automation
            </h6>
            <p className="text-white leading-normal font-light text-sm md:text-base">
              Each industry is complex and constantly changing. With our
              industry solutions, you can meet unique business needs and
              achieve a competitive edge.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <Link to={"/automation"}>
            <button
              className="rounded-md border border-transparent py-2 px-4 flex items-center justify-center text-sm transition-all text-blue-500 hover:bg-slate-100 focus:bg-slate-100 hover:text-blue-800 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 ml-1.5"
                >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  />
              </svg>
            </button>
                  </Link>
          </div>
        </div>

        {/* Consultation Service */}
        <div data-aos="fade-left"  className="flex flex-col bg-[#1F1F1F] shadow-sm border border-slate-200 rounded-3xl w-full md:w-[550px]">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-xl">
            <img
              src="./consultation.png"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h6 className="text-center mb-2 text-white text-lg md:text-xl font-semibold">
              Consultation
            </h6>
            <p className="text-white leading-normal font-light text-sm md:text-base">
              Each industry is complex and constantly changing. With our
              industry solutions, you can meet unique business needs and
              achieve a competitive edge.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <Link to={"/consulting"}>
            <button
              className="rounded-md border border-transparent py-2 px-4 flex items-center justify-center text-sm transition-all text-blue-500 hover:bg-slate-100 focus:bg-slate-100 hover:text-blue-800 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 ml-1.5"
                >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  />
              </svg>
            </button>
                  </Link>
          </div>
        </div>


        <div data-aos="fade-right"  className="flex flex-col bg-[#1F1F1F] shadow-sm border border-slate-200 rounded-3xl w-full md:w-[550px]">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-xl">
            <img
              src="./eng.png"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h6 className="text-center mb-2 text-white text-lg md:text-xl font-semibold">
              Engineering
            </h6>
            <p className="text-white leading-normal font-light text-sm md:text-base">
              Each industry is complex and constantly changing. With our
              industry solutions, you can meet unique business needs and
              achieve a competitive edge.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <button
              className="rounded-md border border-transparent py-2 px-4 flex items-center justify-center text-sm transition-all text-blue-500 hover:bg-slate-100 focus:bg-slate-100 hover:text-blue-800 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 ml-1.5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div> 

        <div data-aos="fade-left"  className="flex flex-col bg-[#1F1F1F] shadow-sm border border-slate-200 rounded-3xl w-full md:w-[550px]">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-xl">
            <img
              src="./light.png"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h6 className="text-center mb-2 text-white text-lg md:text-xl font-semibold">
              Lighting
            </h6>
            <p className="text-white leading-normal font-light text-sm md:text-base">
              Each industry is complex and constantly changing. With our
              industry solutions, you can meet unique business needs and
              achieve a competitive edge.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <Link to={"/lighting"}>
            <button
              className="rounded-md border border-transparent py-2 px-4 flex items-center justify-center text-sm transition-all text-blue-500 hover:bg-slate-100 focus:bg-slate-100 hover:text-blue-800 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 ml-1.5"
                >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                  />
              </svg>
            </button>
                  </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
