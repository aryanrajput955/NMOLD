import React from 'react'

const Energy_consulting = () => {
  return (
    <>
    <div>
    <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="  relative pt-4 ">
    <h1 className=' font-josefin font-semibold text-4xl absolute left-[500px] top-32 text-brown-50 z-50 '>Energy Consulting &Auditing </h1>
  {/* Image Container */}
  <img
    className="z-0 ml-[300px] h-[300px] w-[900px] object-cover"
    src="./Solar.png"
    alt=""
  />
  
  {/* Overlay Div */}
  <div className="absolute ml-[300px] mt-4 inset-0 border-[#2D6A4F] border-l-[20px] border-b-[20px] bg-black bg-opacity-40 h-[300px] w-[900px] z-10"></div>
 
</div>
 {/* ********************************************* */}
<h2 data-aos="fade-down" data-aos-delay="100"  data-aos-once="true" className=' font-josefin pt-20 pb-20 text-4xl text-blue-500 font-semibold text-center'>Energy Audits</h2>
<div className=' pb-10 flex w-full'>
  <div data-aos="fade-right" data-aos-delay="100"  data-aos-once="true" className=' w-1/2'>
    <img className=' ml-32 object-cover h-80 rounded-3xl' src="./energy.png" alt="" />
  </div>
  <div data-aos="fade-left" data-aos-delay="100"  data-aos-once="true" className=' w-1/2'>
    <p className=' text-2xl w-[400px] font-jost font-medium'>As an energy audit, on-site energy advice is carried out by a professionally trained expert appointed by BAFA. We offer you energy advice and energy audits individually tailored to your company so that you can reduce your energy costs, and we strictly follow the relevant regulations.</p>
  </div>
</div>
{/* ***************************************************** */}

    <div>
      <div >
        <h3 className='z-10 text-4xl absolute top-[1040px] left-24 font-josefin text-[#F5F5F5]'>Services energy audits</h3>
      <img   data-aos="fade-right" data-aos-delay="100"  data-aos-once="false"className='relative z-0 h-[700px] w-[1200px]' src="./black_bg.png" alt="" />
      <div>
        <img className=' left-20 h-8 absolute top-[1100px] z-10'  src="./tick.png" alt="" />
        <p className='absolute top-[1100px] left-32 font-jost text-white text-lg
          '>PRELIMINARY MEETING – Getting to know the company, reviewing existing documents</p>
      </div>
      {/* ************************* */}
      <div>
        <img className=' left-20 h-8 absolute top-[1155px] z-10'  src="./tick.png" alt="" />
        <p className='absolute top-[1150px] left-32 font-jost text-white text-lg
          '>INSPECTION – inspection of production facilities, buildings, facilities. Inspection of all<br/> consumption points. Taking measurements.</p>
      </div>
      {/* ************************************ */}
      <div>
        <img className=' left-20 h-8 absolute top-[1235px] z-10'  src="./tick.png" alt="" />
        <p className='absolute top-[1230px] left-32 font-jost text-white text-lg
          '>ANALYSIS - Analysis of the existing data, determination of key figures and optimization<br/> potential with regard to energy efficiency.</p>
      </div>
      {/* ***************************** */}
      <div>
        <img className=' left-20 h-8 absolute top-[1320px] z-10'  src="./tick.png" alt="" />
        <p className='absolute top-[1315px] left-32 font-jost text-white text-lg
          '>REPORT - The audited company receives a comprehensive report with recommendations for<br/> energy saving, action plans & funding opportunities.</p>
      </div>
      {/* *********************** */}
      <div>
        <img className=' left-20 h-8 absolute top-[1420px] z-10'  src="./tick.png" alt="" />
        <p className='absolute top-[1415px] left-32 font-jost text-white text-lg
          '>Non-SMEs are obliged to carry out an energy audit every four years. SMEs benefit <br/> from tax breaks through an energy audit.</p>
      </div>
      </div>
      <img className='right-36 top-[1000px] absolute h-[600px]' src="./energypic.png" alt="" />
    </div>
    {/* ****************************************************************************** */}
    <div >
      <div >
        <img  data-aos="fade-left" data-aos-delay="100"  data-aos-once="false" className=' ml-28 z-0 relative h-[700px] w-[1200px]' src="./green_bg.png" alt="" />
        <h3 className='z-10 left-44 top-[1760px] absolute font-josefin text-4xl text-[#FCBF49]'>Carry out energy audits for companies of all sizes <br/>and industries</h3>
        <p className=' w-[700px] text-white text-lg font-jost absolute top-[1900px] left-96'>We have established a consistent process to conduct energy audits for companies of all sizes and industries. In a preliminary meeting, we get to know your company and review all existing documents. During the inspection (step 2) we carry out the necessary measurements of production facilities, buildings and plants as well as all points of consumption in order to determine their energy consumption exactly. From the analysis of the existing data (step 3) we determine the relevant key figures and open up optimization potential with regard to energy efficiency. Finally, in the last step, we create a comprehensive report with recommendations for energy saving, action plans and funding opportunities.</p>
      </div>
      <img  data-aos="fade-right" data-aos-delay="100"  data-aos-once="flase" className=' h-64 rounded-xl left-8 absolute top-[1900px]' src="./steps2.png" alt="" />
    </div>

    </div>
    </>

     

   
  )
}

export default Energy_consulting
