import React from "react";
import img1 from "../images/insta.png";
import img2 from "../images/twitter.png";
import img3 from "../images/facebook.png";
import img4 from "../images/linkedin.png";

const Footer = () => {
  return (
    <>
      {/* Footer Top Section */}
      <div className="text-white bg-[#1f1f1f] grid gap-10 py-14 px-6 md:grid-cols-3 md:gap-16">
        {/* Logo & Social Links */}
        <div className="text-center md:text-left">
          <h1 className="josefin text-2xl">NMOLD</h1>
          <p className="pt-2 jost text-sm md:text-base">
            NMOLD Bring Ideas To Reality. A common goal: "Better Future".
          </p>
          <div className="pt-3 flex justify-center md:justify-start items-center gap-4">
            <img
              alt="Instagram"
              className="aspect-square cursor-pointer w-7"
              src={img1}
            />
            <img
              alt="Twitter"
              className="aspect-square cursor-pointer w-7"
              src={img2}
            />
            <img
              alt="Facebook"
              className="aspect-square cursor-pointer w-7"
              src={img3}
            />
            <img
              alt="LinkedIn"
              className="aspect-square cursor-pointer w-7"
              src={img4}
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h1 className="josefin text-2xl">Contact Us</h1>
          <p className="pt-2 jost text-sm md:text-base">
            Brahman Majra, Panipat (132103), Haryana, India.
          </p>
          <p className="pt-2 jost text-sm md:text-base">Phone: 9050485040</p>
          <p className="pt-2 jost text-sm md:text-base">
            Copyrights: NMOLD OPTICS
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="text-center md:text-right">
          <h1 className="josefin text-2xl">
            Subscribe our{" "}
            <span className="text-[#0088fe] font-semibold">Newsletter</span>
          </h1>
          <div className="jost flex flex-col md:flex-row md:justify-end items-center md:items-start mt-6">
            <input
              className="bg-white text-black px-4 py-2 w-full md:w-auto flex-1 outline-none rounded-l-md mb-3 md:mb-0 md:mr-2"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-[#0088fe] text-white px-4 py-2 w-full md:w-auto rounded-md hover:font-semibold transition-all ease-linear">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-white bg-[#0088fe] flex flex-col md:flex-row justify-center items-center text-center gap-2 md:gap-1 py-5 px-4">
        <p className="text-sm">2023 NMOLD PVT LTD.</p>
        <div className="flex gap-2 text-sm">
          <p className="cursor-pointer hover:font-semibold transition-all ease-linear">
            Terms & Conditions
          </p>
          <span>|</span>
          <p className="cursor-pointer hover:font-semibold transition-all ease-linear">
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
