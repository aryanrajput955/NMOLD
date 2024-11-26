import React, {useState} from 'react'
import search_img from '../images/search.png'
import Wall_Washer_Series from './Wall_Washer_Series'
import Flood_Light_Series from './Flood_Light_Series'

const Lighting = () => {
	return (
		<>
			<div data-aos="fade-down"  className='bg_ligting flex justify-center items-center'>
				<h1 className='text-3xl josefin font-semibold '>
					NMOLD LIGHTING SERVICES
				</h1>
			</div>
			<div className='mt-20 mx-44'>
				<h1  data-aos-delay="300" data-aos="zoom-in-down" className='text-center font-bold josefin text-4xl'>
					The lighting Products We Offer
				</h1>
				<h1 data-aos="fade-right" data-aos-delay="400" className='custom_blue josefin text-[25px] mt-14'>
					Find the Products You Need
				</h1>
				<div className='flex mt-8 '>
					<div className='w-[310px]'>
						<div data-aos="fade-right" data-aos-delay="200" className='w-72 rounded-2xl h-12 flex items-center outline outline-gray-600 bg-transparent'>
							<input
								placeholder='Search'
								className='outline-none w-[240px] bg-transparent px-4 '
							/>
							<img
								className='h-6'
								src={search_img}
							/>
						</div>
						<div data-aos="fade-right"  data-aos-once="true" data-aos-delay="400" className='mt-5'>
							<h1 className='text-xl font-medium josefin'>
								Product Categories
							</h1>
							<p className='pt-1 jost hover:text-[#0088ff] font-medium transition-all ease-linear cursor-pointer'>
								o Wall Washer Series
							</p>
							<p className='pt-1 jost hover:text-[#0088ff] font-medium transition-all ease-linear cursor-pointer'>
								o Flood Light Series
							</p>
							<p className='pt-1 jost hover:text-[#0088ff] font-medium transition-all ease-linear cursor-pointer'>
								o Underwater Light Series
							</p>
							<p className='pt-1 jost hover:text-[#0088ff] font-medium transition-all ease-linear cursor-pointer'>
								o Underground Light
							</p>
							<p className='pt-1 jost hover:text-[#0088ff] font-medium transition-all ease-linear cursor-pointer'>
								o Series Tree Light Series
							</p>
						</div>
					</div>
					<div>
						<Wall_Washer_Series />
						<Flood_Light_Series />
						<Flood_Light_Series />
					</div>
				</div>
			</div>
		</>
	)
}

export default Lighting
