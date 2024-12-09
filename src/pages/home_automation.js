import React from 'react'
import { useState } from 'react'

const Home_automation = () => {

  const [showMore, setShowMore] = useState(false);

  const handleExploreMore = () => {
    setShowMore(!showMore);
  };

  return (
<>
<div>
    <div  data-aos="fade-up" data-aos-delay="150" className=' flex'>
      <div className=' ml-20 mt-40'>
        <h1 className=' font-semibold bg-gradient-to-tr  text from-yellow-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text font-josefin text-8xl'>
          Revolutionize<br/> &ensp;Your Home
        </h1>
        <p className=' text-gray-800 text-lg w-[550px] ml-10  mt-5  font-medium font-jost'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem libero enim voluptas, reiciendis provident molestias, numquam quis explicabo veritatis a reprehenderit accusantium culpa neque beatae dicta ducimus. Maxime impedit consequatur sunt asperiores minima possimus esse nisi eum! Illum, tempora hic?
        </p>
      </div>
      <div>
      <img className=' ml-40 object-cover h-[600px]' src='./hm.png' alt=''></img>
      </div> 
    </div>
    {/* ****************************** */}
    <div data-aos="fade-up" data-aos-delay="150" className=' text-center pt-32'>
        <p className=' font-josefin text-2xl  text-gray-700'>Unlock the Power of Smart Home Devices: Seamless<br/> Integration, Effortless Control, and Enhanced<br/> Convenience for a Streamlined Lifestyle</p>
      </div> 
      <div className=' justify-center gap-28 flex py-11'>
     <div data-aos="fade-right" data-aos-delay="50" className='h-40 w-40 bg-blue-100 rounded-full'>
      <img src="./prototype.png" alt="" />
      <h4 className=' text-center font-semibold text-gray-800 py-3 font-josefin text-xl'>Transform</h4>
     </div>
     {/* ********************* */}
     <div  data-aos="fade-right" data-aos-delay="100" className='h-40 w-40 bg-blue-100 rounded-full'>
      <img src="./increase.png" alt="" />
      <h4 className=' text-center font-semibold text-gray-800 py-3 font-josefin text-xl'>Elevate</h4>
     </div>
     {/* ************************* */}
     <div  data-aos="fade-right" data-aos-delay="150" className='h-40 w-40 bg-blue-100 rounded-full'>
      <img className=' h-30' src="./3d-lamp.png" alt="" />
      <h4 className=' text-center font-semibold text-gray-800 py-3 font-josefin text-xl'>Intelligent</h4>
     </div> 
     {/* ************************* */}
     <div data-aos="fade-right" data-aos-delay="200" className='h-40 w-40 bg-blue-100 rounded-full'>
      <img className=' ml-8 my-8 ' src="./simplify.png" alt="" />
      <h4 className=' text-center font-semibold text-gray-800 py-3 font-josefin text-xl'>Simplify</h4>
     </div>
     {/* **************** */}
     <div data-aos="fade-right" data-aos-delay="250" className='h-40 w-40 bg-blue-100 rounded-full'>
      <img className=' ml-8 my-8' src="./unlock.png" alt="" />
      <h4 className=' text-center font-semibold text-gray-800 py-3 font-josefin text-xl'>Unlock</h4>
     </div>
      </div>

       <div>
          <h1   className=' font-josefin text-center font-semibold mt-24 text-4xl'>Empower Your Home With Smart Gadgets</h1>
          <p className=' font-jost font-medium text-xl text-center py-2'><i>Enhance Your Living Environment with Innovative Home Technologies </i>
          </p>
          <div className='flex justify-center my-10  gap-20'>
            <div>
            <img className=' rounded-[35px] h-[500px]' src="./hm1.png" alt="" />
            <h5 className=' font-medium font-josefin mt-3 text-center text-3xl'>
              Gadget - 1
            </h5>
            <p className=' text-center font-jost text-xl font-medium text-gray-600'>Revolutionize Your Home</p>
            </div>


            <div>
            <img className=' rounded-[35px] h-[500px]' src="./hm2.png" alt="" />
            <h5 className=' font-medium font-josefin mt-3 text-center text-3xl'>
              Gadget - 2
            </h5>
            <p className=' text-center font-jost text-xl font-medium text-gray-600'>Revolutionize Your Home</p>
            </div>


            <div>
            <img className=' rounded-[35px] h-[500px]' src="./hm3.png" alt="" />
            <h5 className=' font-medium font-josefin mt-3 text-center text-3xl'>
              Gadget - 3
            </h5>
            <p className=' text-center font-jost text-xl font-medium text-gray-600'>Revolutionize Your Home</p>
            </div>
          </div>
       </div>
       <div  data-aos="fade-down" datad>
        <h1 className=' text-center font-josefin text-5xl pt-10'>
        Explore Our Automation Services
        </h1>
        <p className=' mb-10 mt-4 text-center font-jost  text-xl text-gray-600'>Make your house Smarter and Safer!</p>
       </div>
<section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto space-y-12">
        {/* Initial Section */}
        <div  data-aos="fade-down-left" data-aos-delay="50"  className=" flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
          <img
            src="./light_smart.png"
            alt=""
            className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
            Give it a try now!
            </span>
            <h3 className="text-3xl font-bold">Lighting Automation</h3>
            <p className="my-6 dark:text-gray-600">
            Take control, individual control, scenes, fully automatic, or a simple switch beside
the bed to make sure all the lights are off. Light up your environment the way that works for
you, from changing colors ,color temperature to dimming and daytime autocontrol.
            </p>
            <button
              type="button"
              className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              Action
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div   data-aos="fade-down-right" data-aos-delay="100" className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row-reverse">
          <img
            src="https://www.loveblindsandawnings.com.au/wp-content/uploads/2019/09/Automation-Love-Blinds-Awnings.jpg"
            alt=""
            className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
            Give it a try now!
            </span>
            <h3 className="text-3xl font-bold">Blinds Automation</h3>
            <p className="my-6 dark:text-gray-600">
            Wake up to the blinds and shutters automatically letting in the sun. With automated
            blinds, you’re in control, included in scenes, automatic, or individually on a keypad or app.
            </p>
            <button
              type="button"
              className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              Action
            </button>
          </div>
        </div>

        {/* Third Section */}
        <div  data-aos="fade-down-left" data-aos-delay="150" className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://www.diamondairdesign.com/cms/thumbnails/00/540x303/images/imported/7uqim7cpl6s.2405060709550.jpg"
            alt=""
            className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <span className="text-xs uppercase dark:text-gray-600">
    give it a try now!
            </span>
            <h3 className="text-3xl font-bold">Heating,Ventilation and Air-Conditioning</h3>
            <p className="my-6 dark:text-gray-600">
            Set each room to a temperature that suits you.
With demand-based control use your heating, cooling and ventilation in a way that gives you
optimum comfort and efficiency. Set conditions or schedules for fully automated control of
your HVAC system while saving energy.
            </p>
            <button
              type="button"
              className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              Action
            </button>
          </div>
        </div>

        {/* Additional Section (Hidden by Default) */}
        {showMore && (
          <div data-aos="fade-down-left" data-aos-delay="150" className="space-y-12 transition-all duration-500 ease-in-out">
            {/* Additional Service 1 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
              <img
                src="https://static.mansionglobal.com/production/media/article-images/81cca3540e80fd668835e0d04e12f69e/large_SmartHomesSecurity_Lead.jpg"
                alt=""
                className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">
                  Give it a try now!
                </span>
                <h3 className="text-3xl font-bold">Multimedia</h3>
                <p className="my-6 dark:text-gray-600">
                Multi-rooming in the entire house, TV and Music Systems and multimedia
                components and home theatre are integrated for maximum ease and enjoyment.
                </p>
                <button
                  type="button"
                  className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
                >
                  Action
                </button>
              </div>
            </div>

            {/* Additional Service 2 */}
            <div data-aos="fade-down-right" data-aos-delay="150" className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row-reverse">
              <img
                src="https://smarthomeenergy.co.uk/wp-content/uploads/2023/01/geo-smart-meter.jpg"
                alt=""
                className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">
                  Give it a try now!
                </span>
                <h3 className="text-3xl font-bold">Security</h3>
                <p className="my-6 dark:text-gray-600">
                Smart door locks that give easy access to friendly people while generate intrusion
notification for unfamiliar people and record their clip. Smart VDP systems and Smart video
surveillance and much more for a secure home and building.
                </p>
                <button
                  type="button"
                  className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
                >
                  Action
                </button>
              </div>
            </div>

            {/* Additional Service 3 */}
            <div data-aos="fade-down-left" data-aos-delay="150"  className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
              <img
                src="https://cielowigle.com/wp-content/uploads/2021/03/woman-controlling-smart-home-appliances.jpg"
                alt=""
                className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">
                  Give it a try now!
                </span>
                <h3 className="text-3xl font-bold">Monitors and Alarms:</h3>
                <p className="my-6 dark:text-gray-600">
                Monitor your home and environment, CO2 levels, energy usage and
                integrate your fire security system for complete peace of mind.
                </p>
                <button
                  type="button"
                  className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
                >
                  Action
                </button>
              </div>
            </div>

            {/* Additional Service 4 */}
            <div data-aos="fade-down-right" data-aos-delay="150" className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row-reverse">
              <img
                src="https://intercax.com/wp-content/uploads/2015/09/Smarthome_Illustration-1024x939.jpg"
                alt=""
                className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <span className="text-xs uppercase dark:text-gray-600">
                  Give it a try now!
                </span>
                <h3 className="text-3xl font-bold">Visualization and Remote</h3>
                <p className="my-6 dark:text-gray-600">
                Personalize your spaces for better visualization and immersive
                feel for easy remote operations.
                </p>
                <button
                  type="button"
                  className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
                >
                  Action
                </button>
              </div>
            </div>

            {/* Additional Section 5 */}
<div data-aos="fade-down-left" data-aos-delay="200" className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row">
  <img
    src="https://bas-ip.com/wp-content/uploads/2023/05/smart-home-interface-with-augmented-realty-iot-object-interior-design.jpg" 
    alt=""
    className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
  />
  <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
    <span className="text-xs uppercase dark:text-gray-600">
      Give it a try now!
    </span>
    <h3 className="text-3xl font-bold">Full Integration</h3>
    <p className="my-6 dark:text-gray-600">
    Bring your whole house into one easy-to-use system – lighting, HVAC,
blinds, energy use/monitoring, AV, security, door entry. All at the touch of a button on the
wall, your phone/tablet, or fully automated.
    </p>
    <button
      type="button"
      className="self-start px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
    >
      Action
    </button>
  </div>
</div>

          </div>
        )}


        {/* Explore More Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleExploreMore}
            className="px-6 py-3 font-semibold text-white bg-green-600 rounded-md shadow-lg hover:bg-green-700 hover:scale-105 focus:outline-none transition-transform duration-300"
          >
            {showMore ? "Show Less" : "Explore More"}
          </button>
        </div>
      </div>
    </section>
       
</div>
</>
  )
}

export default Home_automation