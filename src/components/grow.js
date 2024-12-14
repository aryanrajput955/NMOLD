import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Counter = ({ from, to, startAnimation, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (startAnimation) {
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
        const progress = Math.min(elapsed / duration, 1); // Cap at 1
        const value = Math.floor(progress * (to - from) + from); // Interpolate value
        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(animate); // Continue animating
        }
      };

      requestAnimationFrame(animate);
    }
  }, [startAnimation, from, to, duration]);

  return <motion.span>{count}</motion.span>;
};

const Grow = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="h-auto bg-[#1F1F1F] mb-20 py-16">
      <h3 data-aos="fade-down"  data-aos-once="true"  data-aos-easing="ease-in" className="text-white text-center text-4xl md:text-5xl lg:text-6xl pb-14">
        Grow With Us
      </h3>
      {/* Stats Section */}
      <div data-aos="zoom-in"  data-aos-once="true"  className="flex flex-wrap justify-center gap-12 lg:gap-24 px-6">
        {/* Revenue */}
        <div className="flex flex-col items-center lg:flex-row gap-6">
          <div className="text-center">
            <h4 className="pb-3 font-jost font-bold text-2xl md:text-3xl lg:text-4xl text-white">
              $<Counter from={0} to={400} startAnimation={inView} />k+
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
              <Counter from={0} to={500} startAnimation={inView} />+
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
              <Counter from={0} to={80000} startAnimation={inView} />
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
              <Counter from={0} to={10} startAnimation={inView} />+
            </h4>
            <h6 className="font-jost font-light text-lg md:text-xl lg:text-2xl text-white">
              Countries
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grow;
