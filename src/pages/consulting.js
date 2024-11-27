import React from 'react'
import { Link } from 'react-router-dom'
const Consulting = () => {
  return (
<>
<div className=' flex gap-20'>
<Link to={"/energy-consulting"}>
<div data-aos="fade-right" className=" relative w-[570px] py-20  ">

    <h1 className=' font-josefin font-semibold w-full text-4xl absolute left-[120px] top-[300px] text-brown-50 z-50 '>Energy Consulting & Auditing</h1>
  {/* Image Container */}
  <img
    className="z-0 ml-[100px] h-[400px] w-[550px]  object-cover"
    src="./Solar.png"
    alt=""
  />
  
  {/* Overlay Div */}

  <div className="absolute top-20  ml-[100px]  inset-0 bg-black bg-opacity-40 h-[400px] w-[550px] z-10 border-black border-b-[15px] border-l-[15px]"></div>
</div>
</Link>
{/* ********************************** */}
<Link to={"/electrical-consulting"}>
<div  data-aos="fade-left" className="  relative w-[570px] py-36  ">
    <h1 className=' font-josefin font-semibold w-full text-4xl absolute left-[120px] top-[350px] text-brown-50 z-50 '>Electrical Consulting & Projects</h1>
  {/* Image Container */}
  <img
    className="z-0 ml-[100px] h-[400px] w-[550px] object-cover"
    src="./Solar.png"
    alt=""
  />
  
  {/* Overlay Div */}

  <div className=" absolute top-36  ml-[100px]  inset-0 bg-black bg-opacity-40 h-[400px] w-[550px] z-10 border-black border-r-[15px] border-b-[15px]"></div>
</div>
      </Link>
</div>
</>
  )
}

export default Consulting
