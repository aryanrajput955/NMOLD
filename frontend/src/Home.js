import React from 'react'
import Hero from "./components/hero";
import Services from "./components/services";
import Grow from "./components/grow";
import Projects from "./components/projects";
import Prototypes from "./components/prototypes";
import Review from "./components/review";
import { useLayoutEffect } from 'react';
const Home = () => {
  useLayoutEffect(() => {
    // Check if the page has been loaded before (from sessionStorage)
    if (!sessionStorage.getItem('scrollRestored')) {
      window.scrollTo(0, 0); // Force scroll to top
      sessionStorage.setItem('scrollRestored', 'true'); // Mark the page as loaded
    }

    return () => {
      // Reset scroll marker when the component unmounts or when a route change happens
      sessionStorage.removeItem('scrollRestored');
    };
  }, []);
  return (
    <div>
       <Hero/>
      <Services/>
      <Grow/>
      <Projects/>
      <Prototypes/>
      <Review/>
    </div>
  )
}

export default Home