import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-36 pb-12 items-center lg:items-start">
        {/* Images Section */}
        <div className="flex gap-5 justify-center lg:ml-52">
          <img data-aos="fade-down"
            className="h-[300px] w-[150px] lg:h-[500px] lg:w-[250px] rounded-[50px] lg:rounded-[70px]"
            src="./lg1.png"
            alt=""
          />
          <img data-aos="fade-up" data-aos-delay="150"
            className="h-[300px] w-[150px] lg:h-[500px] lg:w-[250px] rounded-[50px] lg:rounded-[70px]"
            src="./lg2.png"
            alt=""
          />
        </div>

        {/* Text Content Section */}
        <div  data-aos="fade-right" data-aos-delay="100" className="text-center lg:text-left px-6 lg:px-0">
          <h4 className="font-jost font-semibold text-2xl lg:text-4xl">
            Check Our Projects
          </h4>
          <h5 className="font-jost font-light italic mb-6">
            See what can amaze you
          </h5>
          <p className="font-jost text-sm lg:text-lg w-full lg:w-96 mx-auto lg:mx-0">
            Centuries ago, the sun and fire were the only sources of
            illumination, but in today's technology-driven world, artificial
            lighting and cutting-edge optical technologies have found ways to
            mimic the qualities of natural light, making it possible to have a
            naturally-lit-looking space within four walls.
          </p>
          <Link to={"/projects"}>
          <button
             type="submit"
             className="mt-6 font-jost flex justify-center gap-2 items-center mx-auto lg:mx-0 shadow-xl hover:bg-neutral-900 text-sm lg:text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-blue-gray-900 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
             >
            Explore More
            <svg
              className="w-6 h-6 lg:w-8 lg:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 lg:p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
            </svg>
          </button>
                </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
