import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" flex py-16 gap-20" >
        <div className=" ">
          <h1 className=" ml-20 mt-24 font-josefin text-5xl text-[#1F1F1F]">
            Contact us
          </h1>
          <p className=" ml-20 py-5 font-medium font-jost text-lg">
            Email, call, or complete the form to learn how
            <br /> Nmold can solve your messaging problem.
          </p>
          <p className="ml-20 pb-3 font-medium font-jost text-lg">Nmold@gmail.com</p>
          <span className="ml-20 font-jost font-medium">9050485040</span>
        {/* *************************************** */}

        <div className=" ml-10 flex my-8  gap-6">
          <div className="w-60 text-center">
            <img
              className=" h-20 aspect-square ml-20 "
              src="./clock_24.png"
              alt="Assembly Specialists"
            />
            <h5 className="font-jost text-[#1F1F1F] mb-2 text-base sm:text-lg font-semibold">
            24x7 Customer Support
            </h5>
            <p className="font-jost text-[#1F1F1F] text-sm sm:text-base">
            we provide the best customer services for you 
            </p>
          </div>
          {/* -******************************* */}
          <div className="w-60 text-center">
            <img
              className=" h-20 aspect-square ml-20 "
              src="./customer_support.png"
              alt="Assembly Specialists"
            />
            <h5 className="font-jost text-[#1F1F1F] mb-2 text-base sm:text-lg font-semibold">
            Best Support Teams
            </h5>
            <p className="font-jost text-[#1F1F1F] text-sm sm:text-base">
            Get support from the professionals and get your doubts clear!
            </p>
          </div>
          {/* ********************************************* */}

          <div className="w-60 text-center">
            <img
              className=" h-20 aspect-square ml-16 "
              src="./phone.png"
              alt="Assembly Specialists"
            />
            <h5 className="font-jost text-[#1F1F1F] mb-2 text-base sm:text-lg font-semibold">
            Get In Contact
            </h5>
            <p className="font-jost text-[#1F1F1F] text-sm sm:text-base">
            Get support from the professionals and get your doubts clear!
            </p>
          </div>
        </div>
      

        </div>
        {/* right side */}
       <div>
       <form className="px-4 py-4 bg-[#1F1F1F] rounded-xl">
  <div className="py-5 px-5 ">
    <h4 className="font-josefin text-3xl font-medium text-white">Get In Touch</h4>
    <h6 className="font-jost text-lg text-white">You can reach us anytime</h6>
  </div>
  <div className="my-6 flex flex-row gap-2">
    <input
      className="shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] bg-white text-gray-900 placeholder-gray-400 focus:outline-none ml-4 w-60 h-10 rounded-full px-4"
      type="text"
      name="firstName"
      id="firstName"
      placeholder="First Name"
    />
    <input
      className=" shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] bg-white text-gray-900 placeholder-gray-400 focus:outline-none ml-4 w-60 h-10 rounded-full px-4"
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Last Name"
    />
  </div>
  <div className="relative flex flex-col gap-4">
    {/* Email Field */}
    <div className="relative">
      <img
        className="absolute h-7 ml-7 mt-[6px]"
        src="./mail.png"
        alt=""
      />
      <input
        className=" shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] bg-white text-gray-900 placeholder-gray-400 focus:outline-none ml-4 w-[500px] h-10 rounded-full pl-12"
        type="email"
        name="email"
        placeholder="Enter Your e-mail"
        id="email"
      />
    </div>

    {/* Mobile Number Field */}
    <div className="relative">
      <input
        className=" shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] bg-white text-gray-900 placeholder-gray-400 focus:outline-none ml-4 w-[500px] h-10 rounded-full pl-20"
        type="tel"
        name="mobileNumber"
        id="mobileNumber"
        placeholder="Enter Your Mobile Number"
      />
      <select
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-[#2C2C2C] text-white rounded-l-full pl-2 pr-4 outline-none"
        name="countryCode"
        id="countryCode"
      >
        <option value="+1">+1</option>
        <option value="+91">+91</option>
        <option value="+44">+44</option>
        <option value="+61">+61</option>
        <option value="+81">+81</option>
      </select>
    </div>
    <input className="shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] bg-white text-gray-900 placeholder-gray-400 focus:outline-none ml-4 w-[500px] rounded-xl h-40 pb-24 pl-2" type="text" placeholder=" How can we help you?" />
    <input className=" ml-4 rounded-3xl text-xl font-bold h-10 text-white bg-blue-600 w-[500px] hover:bg-blue-900 hover:text-black ease-in" type="submit" value="Submit" />
  </div>

</form>
       </div>
      </div>
    </>
  );
};

export default Contact;
