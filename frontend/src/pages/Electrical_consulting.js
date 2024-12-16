import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Electrical_consulting = () => {

    const [tooltipVisible, setTooltipVisible] = useState(false);

  // Function to copy the number
  const copyToClipboard = () => {
    navigator.clipboard.writeText("9050485040"); // Copy the phone number
    setTooltipVisible(true); // Show the tooltip
    setTimeout(() => setTooltipVisible(false), 1500); // Hide tooltip after 1.5 seconds
  };

  return (
<>
<div> 

     <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="  relative pt-4 ">
    <h1 className=' font-josefin font-semibold text-4xl absolute left-[500px] top-32 text-brown-50 z-50 '> Electrical Consulting & Projects</h1>
  {/* Image Container */}
  <img
    className="z-0 ml-[300px] h-[300px] w-[900px] object-cover"
    src="./Solar.png"
    alt=""
  />
  
  {/* Overlay Div */}
  <div className="absolute ml-[300px] mt-4 inset-0 border-blue-800 border-l-[20px] border-b-[20px] bg-black bg-opacity-40 h-[300px] w-[900px] z-10"></div>
  </div>

  <h2  data-aos="fade-right" data-aos-delay="50"   data-aos-easing="ease-in-out" className='font-josefin mt-20 text-center text-4xl font-semibold text-blue-500  '>Welcome To Electrical Consulting </h2>
  <div className=' pl-20'>
  <div data-aos="fade-right" data-aos-delay="50"   data-aos-easing="ease-in-out"  className="relative -mt-8 ml-10">
  {/* Image */}
  <img
    className="h-[650px] w-[1000px] object-cover"
    src="./yellowbg.png"
    alt="Background"
    />

  {/* Paragraph on the image */}
  <p className="absolute top-1/2 left-96  transform -translate-x-1/2 -translate-y-1/2 w-[550px] font-jost font-medium text-2xl ">
    Nmold Consultants is an Electrical Engineering Consultancy & Solutions
    providing Consultancy Services in the field of Electrical Systems. SN
    Consultants was established in the year 1991 by after gaining professional
    experience of more than seventeen years (with leading consultancy
    organisations) in the field of engineering design and project management.
    Best Electrical Engineering Solutions : The main objective of the
    organisation is to provide its services in electrical systems based upon
    project requirements, incorporating cost/energy efficiency and safety
    systems.
  </p>
</div>
    </div>
  <img  data-aos="fade-left"  className='absolute h-[400px] w-[400px] rounded-3xl right-64 top-[600px] ' src="./solar_energy.png" alt="" />
<h2    data-aos-once="false" data-aos="fade-left"    className='font-josefin mt-20 ml-28 text-4xl font-semibold text-blue-500  '>WHY CONSULTANCY </h2>
<div   data-aos-once="false" data-aos="fade-left"  className=' bg-[#F5F5F5]  shadow-neutral-300 drop-shadow-lg  shadow-lg  ml-20 my-5 border-gray-500 border-2  box-border gap-7 flex flex-col rounded-2xl   h-[630px] w-[1200px]'>
    <div className=' mt-5 flex'>
        <img  className=" mt-1 mx-4 h-7" src="./check_box.png" alt="" />
        <p className=' font-medium font-jost w-[900px] text-2xl '>Procurement of right equipment in terms of costs / sizing / quantities / technical requirements / completeness & their integration.</p>
    </div>
    {/* ******************************** */}
    <div className=' mt-5 flex'>
        <img  className=" mt-1 mx-4 h-7" src="./check_box.png" alt="" />
        <p className=' font-medium font-jost w-[900px] text-2xl '>PGives you the choice of multiple alternatives at concept stage with costs to suit your requirements.</p>
    </div>
    {/* ******************************** */}
    <div className=' mt-5 flex'>
        <img  className=" mt-1 mx-4 h-7" src="./check_box.png" alt="" />
        <p className=' font-medium font-jost w-[900px] text-2xl '>Maintenance costs are minimized due to highly specialized engineering design.</p>
    </div>
    {/* ********************************** */}
    <div className=' mt-5 flex'>
        <img  className=" mt-1 mx-4 h-7" src="./check_box.png" alt="" />
        <p className=' font-medium font-jost w-[900px] text-2xl '>Provision of expansion due to modular system design – No shut down / minimized shut down.</p>
    </div>
    {/* ******************************* */}
    <div className=' mt-5 flex'>
        <img  className=" mt-1 mx-4 h-7" src="./check_box.png" alt="" />
        <p className=' font-medium font-jost w-[900px] text-2xl '>Compliance of various codes/ Standards including for safety.</p>
    </div>
    {/* ********************** */}
    <div className=' mt-5 flex'>
        <img  className=" mt-1 mx-4 h-7" src="./check_box.png" alt="" />
        <p className=' font-medium font-jost w-[900px] text-2xl '>Minimum power loss in power distribution resulting in substantialsaving in energy cost.</p>
    </div>
</div>
    <img   data-aos-once="false" data-aos="fade-right"  data-aos-delay="50"  className=' absolute h-[450px] rounded-3xl left-[1100px] top-[1360px]' src="./engineering.png" alt="" />
<div className='flex mt-10 pl-32 bg-[#0088ff77] h-[300px]'>
<div  data-aos-delay="50"  data-aos="fade-left"   className=' ml-36  pt-10 flex flex-col gap-3' >
<h4 className=' text-[#1F1F1F] font-josefin font-semibold text-4xl'>Would you like to find <br/>out more?</h4>
<p className=' w-[450px] font-jost text-lg font-medium '>We would like to get to know you! Say or write hello to us!Ask us anything! We would be happy to give you more information about our services!</p>


</div>
<div>
<div   data-aos-once="false" data-aos-delay="50"  data-aos="fade-right"  className=' flex flex-col ml-32 pt-16'>
<div className="relative">
      {/* Tooltip */}
      {tooltipVisible && (
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded-md shadow-md">
          Number Copied!
        </span>
      )}
 
    </div>

      <button
        className="font-jost flex items-center rounded-xl bg-[#1F1F1F] py-3 px-12 border border-transparent text-center text-lg text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={copyToClipboard}
      >
        <img className="h-8 px-2" src="./phone_white.png" alt="Phone Icon" />
        9050485040
      </button>
      <Link to={"/contact"}>
      <button
        className=" mt-5 font-jost flex items-center rounded-xl bg-[#1F1F1F]  py-3 px-16 border border-transparent text-center text-lg text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        
        >
        <img className="h-8 px-2" src="./mail2.png" alt="Phone Icon" />
        Contact US
      </button>
          </Link>

      </div>
</div>
</div>
  </div>
</>
  )
}

export default Electrical_consulting
