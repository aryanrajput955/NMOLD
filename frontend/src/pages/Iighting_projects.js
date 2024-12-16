import React from 'react'

const LightingProjects = () => {
  return (
   <>
   <div>
   <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className=" relative pb-10 ">
    <h1 className=' font-josefin font-semibold text-4xl absolute left-[600px] top-32 text-brown-50 z-50 '>OUR PROJECTS</h1>
  {/* Image Container */}
  <img
    className="z-0 ml-[300px] h-[300px] w-[900px] object-cover"
    src="./project_img.png"
    alt=""
  />
  
  {/* Overlay Div */}
  <div className="absolute ml-[300px]  inset-0 bg-black bg-opacity-40 h-[300px] w-[900px] z-10"></div>
</div>
<h2 data-aos="fade-right" className=' text-center font-josefin text-4xl py-16'>
  Lighting Projects
</h2>


   <div data-aos="fade-up" data-aos-delay="500" class=" pt-4 pb-2    grid grid-cols-2 gap-4 md:grid-cols-4 bg-neutral-800">
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg9.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="./lg8.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg7.png"
        alt="gallery-photo"
        />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg10.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg11.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="./lg0.png"
        alt="gallery-photo"
        />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg3.png "
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="./lg1.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg6.png"
        alt="gallery-photo"
        />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg0.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg2.png"
        alt="gallery-photo"
        />
    </div>
  </div>
</div>
        </div>
   </>
  )
}

export default LightingProjects
