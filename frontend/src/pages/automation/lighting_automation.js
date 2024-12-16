import React from 'react'
import { Link } from 'react-router-dom'
const Lighting_automation = () => {
  return (
<>
<section className="relative">
  <div className="absolute top-0 left-0 w-full h-[50vh] bg-black opacity-40"></div>
  <video
    className="w-full h-[50vh] object-cover block"
    preload="auto"
    loop
    autoPlay
    muted
    src="./lighting_video.mp4"
  ></video>
  <div className=" absolute inset-0 flex flex-col items-center justify-center text-center text-white font-josefin">
    <h1 className="text-2xl md:text-4xl lg:text-5xl">
      Make Your House Look Perfect
    </h1>
    <p className="mt-2 text-sm md:text-lg lg:text-xl italic">
      With NMOLD Lighting Automation Services
    </p>
  </div>
</section>
{/* ******************************************************* */}
<div className="bg-[#F5F5F5] flex flex-col md:flex-row gap-10 md:gap-40 h-auto w-full p-5 md:h-[32rem]">
  <div className="md:ml-28 pt-10 md:pt-36">
    <h3 className="font-josefin text-xl md:text-3xl text-[#1F1F1F]">
      What is Lighting Automation?
    </h3>
    <p className="w-full md:w-[500px] pt-3 md:pt-5 font-jost text-sm md:text-base">
      NMOLD Lighting Automation module includes a combination of different types of loads as per Indian houses. NMOLD’s Lighting Automation Module allows you to convert your ordinary switches into Smart Switches. Secure your family and home, automate your appliances, control and monitor your devices, and set lighting moods.
    </p>
  </div>

  <div className="w-full flex justify-center pt-10 md:pt-20">
    <iframe 
      className="rounded-xl w-full md:w-[560px] h-[200px] md:h-[315px]" 
      src="https://www.youtube.com/embed/IQ3tjqZHQF4?si=5L0lSROJUow4PI9R" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>
  </div>
</div>

    {/* ********************************* */}

<div>

    <section class="relative z-10 overflow-hidden bg-[#1F1F1F] py-16 px-8 ">
    <div class="container">
        <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
                <div class="text-center lg:text-left ">
                    <div class="mb-10 lg:mb-0 ">
                        <h1
                            class="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                            Start building automated serverless forms</h1>
                        <p
                            class="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 lg:w-1/2">
                <div class="text-center lg:text-right">
                    <Link to={"/contact"}>
                    <button
                        class="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                        >Get in Touch Today</button>
                        </Link>
                </div>
            </div>
        </div>
    </div>
    <span class="absolute top-0 right-0 -z-10">
        <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
        </svg>
    </span>
</section>

<section class="bg-white pb-6">

    <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div class="container mx-auto px-6 p-6 bg-white">



            <div class="mb-16 text-center">
                <h4 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h4>
                <p class=" font-josefin mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">How we change the game

                </p>
            </div>


            <div class="flex flex-wrap my-12">


                <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div class="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                            fill="currentColor" class="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div class="ml-4 font-jost text-xl">Take Individual Control </div>
                    </div>
                    <p class="leading-loose font-jost text-gray-500">Transform your living space with an individual light control home automation system, allowing you to manage and customize the lighting in every room effortlessly through smart technology.
                    </p>
                </div>



                <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                    <div class="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                            fill="currentColor" class="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div class="ml-4 font-jost text-xl">Fully Automatic</div>
                    </div>
                    <p class="leading-loose text-gray-500 font-jost">Experience the future of living with a fully automatic home lighting system that intelligently adapts to your lifestyle, optimizing comfort, energy efficiency, and convenience with seamless automation
                    </p>
                </div>



                <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                    <div class="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                            fill="currentColor" class="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div class="ml-4 font-jost text-xl">One Switch For All</div>
                    </div>
                    <p class="leading-loose text-gray-500 font-jost ">Enhance your convenience with a single bedside switch that turns off all the lights in your home, offering a simple yet effective way to end your day effortlessly.
                    </p>
                </div>



                <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                    <div class="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                            fill="currentColor" class="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div class="ml-4 font-jost text-xl">Automatic Dimming</div>
                    </div>
                    <p class="leading-loose font-jost text-gray-500">Create the perfect ambiance with an automatic dimming system that adjusts light intensity based on the time of day, activity, or room occupancy
                    </p>
                </div>



                <div class="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                    <div class="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                            fill="currentColor" class="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div class="ml-4 font-jost text-xl">Daytime Autocontrol</div>
                    </div>
                    <p class="leading-loose font-jost text-gray-500">Optimize energy efficiency and comfort with a daytime auto-control lighting system that automatically adjusts brightness or turns off lights based on natural sunlight levels.
                    </p>
                </div>



                <div class="w-full md:w-1/2 lg:w-1/3 p-8">
                    <div class="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                            fill="currentColor" class="h-6 w-6 text-indigo-500">
                            <path
                                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                            </path>
                        </svg>
                        <div class="ml-4 font-jost text-xl">Automatic Colour Changing</div>
                    </div>
                    <p class="leading-loose font-jost text-gray-500">Set the mood effortlessly with an automatic color-changing lighting system that adjusts hues and tones based on the time of day, activity, or your personal preferences.
                    </p>
                </div>


            
            </div>
        </div>
    </div>
</section>
</div>

</>
  )
}

export default Lighting_automation
