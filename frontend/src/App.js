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
import Electrical_consulting from "./pages/Electrical_consulting";
import Industrial_automation from "./pages/industrial_automation";
import Automation from "./pages/Automation";
import Home_automation from "./pages/home_automation";
import Lighting_automation from "./pages/automation/lighting_automation";
import Dynamic_Products from "./components/Dynamic_Products";
import { useEffect } from "react";
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
      path:"/lighting/:id",
      element:<><Navbar/><Dynamic_Products/></>
    },
    {
      path:"/lighting-products",
      element:<><Navbar/><Product_info/></>
    },
    {
      path:"/electrical-consulting",
      element:<><Navbar/><Electrical_consulting/></>
    },
    {
      path:"/industrial-automation",
      element:<><Navbar/><Industrial_automation/></>
    },
    {
      path:"/automation",
      element:<><Navbar/><Automation/></>
    },
    {
      path:"/home-automation",
      element:<><Navbar/><Home_automation/></>
    },
    {
      path:"/lighting-automation",
      element:<><Navbar/><Lighting_automation/></>
    }
  ]);
  
  useEffect(() => {
    const unsubscribe = router.subscribe(({ location }) => {
      window.scrollTo(0, 0);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
