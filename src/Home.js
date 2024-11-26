import React from 'react'
import Hero from "./components/hero";
import Services from "./components/services";
import Grow from "./components/grow";
import Projects from "./components/projects";
import Prototypes from "./components/prototypes";
import Review from "./components/review";

const Home = () => {
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