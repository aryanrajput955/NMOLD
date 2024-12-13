import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [service, setService] = useState(true);
  const [service2, setService2] = useState(true);
  const [automation, setAutomation] = useState(true);
  const [consulting, setConsulting] = useState(true);
  return (
    <div>
      <nav className=" flex justify-center items-center w-full gap-32 pt-3">
        {/* left side */}
<Link to={"/"}>
     <img src="./logo.png" className="h-16 w-auto max-w-full sm:h-10 md:h-12 lg:h-14 xl:h-16"></img>
</Link>


        {/* middle part */}
        <ul className=" text-lg flex ml-36 gap-20 font-jost ">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/projects"}>
            <li>Projects</li>
          </Link>
          <div
            className="flex justify-center items-center "
            onMouseEnter={() => setService(!service)}
            onMouseLeave={() => setService(false)}
          >
            <p className="cursor-pointer">Services</p>
            <img
              onMouseEnter={() => setService(!service)}
              onMouseLeave={() => setService(false)}
              className={`${
                service
                  ? "cursor-pointer aspect-square h-4 ml-3"
                  : "cursor-pointer aspect-square h-4 ml-3 -rotate-90 transition-all ease-linear ]"
              }`}
              src="./dropdown_arrow.png "
              alt="downarrow"
            />
          </div>
          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
        </ul>
        <div className=" ml-96">
          <div className=" relative flex items-center">
            {/* Search Bar */}
            {showSearch && (
              <input
                type="text"
                placeholder="Search here"
                className="absolute right-12 p-2 bottom-2  bg-white text-gray-900 rounded-xl border border-gray-900 focus:outline-none transition-all duration-500"
                style={{ width: "200px" }}
              />
            )}

            {/* Search Button */}
            <button
              className="focus:outline-none"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <img
                className="h-11 pb-4 "
                src="./SEARCH.png"
                alt=" searchicon"
              />
            </button>
          </div>
        </div>
      </nav>
      {/* Service dropdown */}
      <div
        className={`${
          service
            ? "transition-all ease-linear h-0 overflow-hidden"
            : `z-[10000] h-auto transition-all ease-linear bg-[#1f1f1f] text-white w-[15rem] flex flex-col justify-center absolute top-14 left-[37rem]`
        }`}
        onMouseEnter={() => {
          setService(false);
        }}
        onMouseLeave={() => {
          setService(true);
        }}
      >
        <Link to={"/automation"}>
        <p
          onMouseEnter={() => setAutomation(!automation)}
          onMouseLeave={() => setAutomation(true)}
          className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]"
          >
          Automation
        </p>
          </Link>
        <Link to={"/consulting"}>
        <p
          onMouseEnter={() => setConsulting(!consulting)}
          onMouseLeave={() => setConsulting(true)}
          className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]"
          >
          Consulting
        </p>
          </Link>
        <p
          onMouseEnter={() => setService2(!service2)}
          onMouseLeave={() => setService2(true)}
          className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]"
        >
          Engineering
        </p>
        <Link to={"/lighting"}>
        <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]"
        >
          Lighting
        </p>
          </Link>
      </div>
     
      {/* Engineering Dropdown */}
      <div
        onMouseEnter={() => {
          setService(false);
          setService2(false);
        }}
        onMouseLeave={() => {
          setService(true);
          setService2(true);
        }}
        className={`${
          service2
            ? "hidden"
            : `z-[10000] h-auto transition-all ease-linear bg-[#1f1f1f] text-white w-[15rem] flex flex-col justify-center absolute top-[150px] left-[52rem]`
        }`}
      >
        <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
          PCC Panels
        </p>
        <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
          MCC panels
        </p>
        <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
          MCC panels
        </p>
      </div>
      {/*Automation Dropdown */}
      <div
        onMouseEnter={() => {
          setService(false);
          setAutomation(false);
        }}
        onMouseLeave={() => {
          setService(true);
          setAutomation(true);
        }}
        className={`${
          automation
            ? "hidden"
            : `z-[10000] h-auto transition-all ease-linear bg-[#1f1f1f] text-white w-[15rem] flex flex-col justify-center absolute top-[56px] left-[52rem]`
        }`}
      >
        <Link to={"/industrial-automation"}>
        <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
          Industrial Automation
        </p>
        </Link>
        <Link to={"/home-automation"}>
        <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
          Home Automation
        </p>
        </Link>
      </div>
      {/* Consulting Dropdown */}
      <div
        onMouseEnter={() => {
          setService(false);
          setConsulting(false);
        }}
        onMouseLeave={() => {
          setService(true);
          setConsulting(true);
        }}
        className={`${
          consulting
            ? "hidden"
            : `z-[10000] h-auto transition-all ease-linear bg-[#1f1f1f] text-white w-[15rem] flex flex-col justify-center absolute top-[103px] left-[52rem]`
        }`}
      >
        <Link to={"/energy-consulting"}>
        <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
        Energy Consulting & Auditing
        </p>
        </Link>
        <Link to={"/electrical-consulting"}>
        <p className="cursor-pointer px-5 py-3 transition-all duration-300 ease-linear hover:bg-[#0088fe]">
        Electrical Consulting & Projects
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
