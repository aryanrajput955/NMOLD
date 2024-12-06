import React, { useState } from "react";

const Industrial_automation = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="relative pt-4"
        >
          <h1 className="font-josefin font-semibold text-4xl absolute left-[500px] top-32 text-brown-50 z-50">
            INDUSTRIAL AUTOMATION
          </h1>
          {/* Image Container */}
          <img
            className="z-0 ml-[300px] h-[300px] w-[900px] object-cover"
            src="./ia2.png"
            alt=""
          />

          {/* Overlay Div */}
          <div className="absolute ml-[300px] mt-4 inset-0 bg-black bg-opacity-40 h-[300px] w-[900px] z-10"></div>
        </div>
        <h2 className="text-center font-josefin text-5xl font-semibold mt-20 mb-9">
          What We Offer
        </h2>
        <div className="ml-28 w-[1300px] h-auto rounded-full bg-[#F5F5F5] py-10 px-10">
          <div className="pt-10 pl-10 gap-36 flex">
            <p className="  font-jost text-xl w-[600px]">
              offers automation products and solutions with high performance and
              reliability, including drives, motion control systems, industrial
              control and communication, power quality improvement, human
              machine interfaces, sensors, meters, and robot solutions. We also
              provide information monitoring and management systems such as
              SCADA and Industrial EMS for complete, smart manufacturing
              solutions.
            </p>
            <img
              className="object-cover h-56 rounded-lg"
              src="./ia.png"
              alt=""
            />
          </div>

          {/* Conditionally Rendered Paragraph */}
          <div
            className={`font-jost text-xl mt-1 w-[600px] ml-10 overflow-hidden transition-all duration-500 ease-in-out ${
              showMore ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            Our advanced industrial automation solutions are tailored to meet
            the demands of modern manufacturing processes, enhancing efficiency
            and productivity while maintaining top-notch safety standards.
            Partner with us for innovative, reliable, and scalable automation
            systems.
          </div>

          {/* Button to Toggle More Content */}
          <button
            className="ml-24 mt-5 bg-black text-white h-10 w-32 rounded-3xl hover:bg-neutral-800 hover:scale-105 transition-transform duration-300"
            onClick={handleShowMore}
            >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        <h2 className=" font-josefin text-center py-10 text-4xl font-semibold">
          Explore The Leading Tecnologies
        </h2>
      <div className=" ml-44 py-10 gap-20 flex">
      <div class="relative group grid h-[26rem] w-[20rem] flex-col items-end justify-center overflow-hidden rounded-3xl bg-white">

  <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://plus.unsplash.com/premium_photo-1661964131234-fda88ca041c5?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>

  <div class="relative flex flex-col items-center justify-center text-center p-6 px-6 py-14 md:px-12 transition-all duration-300">
    <h2
      class="mb-6 text-3xl font-medium text-white transform transition-all duration-300 group-hover:-translate-y-20"
    >
      STP Plants
    </h2>

    <button
      class="bg-white text-black rounded-full h-14 w-32 font-jost text-lg font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      Learn More
    </button>
  </div>
</div>

          {/* ****************************************************************** */}
          <div class="relative group grid h-[26rem] w-[20rem] flex-col items-end justify-center overflow-hidden rounded-3xl bg-white">

<div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://plus.unsplash.com/premium_photo-1661962600569-5d072e30a951?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
</div>

<div class="relative flex flex-col items-center justify-center text-center p-6 px-6 py-14 md:px-12 transition-all duration-300">
  <h2
    class="mb-6 text-3xl font-medium text-white transform transition-all duration-300 group-hover:-translate-y-20"
  >
    Food Plants
  </h2>

  <button
    class="bg-white text-black rounded-full h-14 w-32 font-jost text-lg font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
  >
    Learn More
  </button>
</div>
</div>
          {/* *********************************************************************** */}
          <div class="relative group grid h-[26rem] w-[20rem] flex-col items-end justify-center overflow-hidden rounded-3xl bg-white">

<div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1723625449830-ed7f88977635?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
</div>

<div class="relative flex flex-col items-center justify-center text-center p-6 px-6 py-14 md:px-12 transition-all duration-300">
  <h2
    class="mb-6 text-3xl font-medium text-white transform transition-all duration-300 group-hover:-translate-y-20"
  >
    LiveStock Farms
  </h2>

  <button
    class="bg-white text-black rounded-full h-14 w-32 font-jost text-lg font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
  >
    Learn More
  </button>
</div>
</div>
        </div>
        {/* ********************************************* */}


        <div className=" ml-44 pb-12 gap-20 flex">
      <div class="relative group grid h-[26rem] w-[20rem] flex-col items-end justify-center overflow-hidden rounded-3xl bg-white">

  <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://plus.unsplash.com/premium_photo-1667520084376-472f06c21406?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>

  <div class="relative flex flex-col items-center justify-center text-center p-6 px-6 py-14 md:px-12 transition-all duration-300">
    <h2
      class="mb-6 text-3xl font-medium text-white transform transition-all duration-300 group-hover:-translate-y-20"
    >
      Modern Farming
    </h2>

    <button
      class="bg-white text-black rounded-full h-14 w-32 font-jost text-lg font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
    >
      Learn More
    </button>
  </div>
</div>

          {/* ****************************************************************** */}
          <div class="relative group grid h-[26rem] w-[20rem] flex-col items-end justify-center overflow-hidden rounded-3xl bg-white">

<div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://plus.unsplash.com/premium_vector-1697729672482-eed3222b7fbf?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
</div>

<div class="relative flex flex-col items-center justify-center text-center p-6 px-6 py-14 md:px-12 transition-all duration-300">
  <h2
    class="mb-6 text-3xl font-medium text-white transform transition-all duration-300 group-hover:-translate-y-20"
  >
  Buildings
  </h2>

  <button
    class="bg-white text-black rounded-full h-14 w-32 font-jost text-lg font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
  >
    Learn More
  </button>
</div>
</div>
          {/* *********************************************************************** */}
          <div class="relative group grid h-[26rem] w-[20rem] flex-col items-end justify-center overflow-hidden rounded-3xl bg-white">

<div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1509391111737-9b07f052f6b6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
</div>

<div class="relative flex flex-col items-center justify-center text-center p-6 px-6 py-14 md:px-12 transition-all duration-300">
  <h2
    class="mb-6 text-3xl font-medium text-white transform transition-all duration-300 group-hover:-translate-y-20"
  >
    Substations
  </h2>

  <button
    class="bg-white text-black rounded-full h-14 w-32 font-jost text-lg font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
  >
    Learn More
  </button>
</div>
</div>
        </div>
      </div>
    </>
  );
};

export default Industrial_automation;
