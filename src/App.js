import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./Home";
import Contact from "./pages/contact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LightingProjects from "./pages/Iighting_projects";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Consulting from "./pages/consulting";
import Energy_consulting from "./pages/Energy_consulting";
import Product_info from "./components/Product_info";
import Lighting from "./components/Lighting";
import Lighting_products from "./components/Lighting_products";

AOS.init();




const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element:  <><Navbar/> <Home /></>
    },
    {
      path:'/contact',
      element:<><Navbar/> <Contact /></>
    },
    {
      path:'/projects',
      element:<><Navbar/><LightingProjects/></>
    },
    {
      path:'/consulting',
      element:<><Navbar/><Consulting/></>
    },
    {
      path:'/energy-consulting',
      element:<><Navbar/><Energy_consulting/></>
    },
    {
      path:"/lighting",
      element:<><Navbar/><Lighting/></>
    },
    {
      path:"/lighting-products",
      element:<><Navbar/><Product_info/></>
    }
  ])

  return (
    <>
    
   

      <RouterProvider router={router} />
      <Footer/> 
    </>
  );
};

export default App;
