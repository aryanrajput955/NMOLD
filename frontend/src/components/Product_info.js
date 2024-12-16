import React from 'react'
import bulb from '../images/bulb.png'
import Related_products from './Related_products'

const Product_info = () => {
	return (
		<>
			<div className='flex mt-20 justify-center'>
				<div data-aos-offset="300"  data-aos="fade-right">
					<img
						className='w-[560px]'
						src={bulb}
						alt='bulb'
					/>
					<h1 className='josefin text-4xl'>Wireless DMX Track</h1>
					<div className='mt-4'>
						<h1 className='josefin text-xl custom_blue'>COLORS</h1>
						<div className='flex items-center gap-4 mt-2'>
							<p className='h-12 aspect-square rounded-full outline-black outline cursor-pointer bg-[#FFB567]'></p>
							<p className='h-12 aspect-square rounded-full outline-black outline cursor-pointer bg-[#F9F598]'></p>
							<p className='h-12 aspect-square rounded-full outline-black outline cursor-pointer bg-white'></p>
						</div>
					</div>
					<div className='flex items-center justify-between mt-4'>
						<div>
							<h1 className='josefin text-xl custom_blue'>LIFETIME</h1>
							<p className='jost text-lg'>50,000 HOURS</p>
						</div>
						<div>
							<h1 className='josefin text-xl custom_blue'>WATTAGE</h1>
							<p className='jost text-lg'>21-56 Watts</p>
						</div>
					</div>
					<p className='jost text-lg mt-2'>Effective Throw</p>
					<p className='jost text-lg'>
						Medium (15-30 Ft.) and Long (30-60 Ft.) throws
					</p>
					<div className='mt-4'>
						<h1 className='josefin text-xl custom_blue'>SIZE AND WEIGHT </h1>
						<p className='jost text-lg'>5.75 (146mm) x 12.38 (314mm) </p>
						<p className='jost text-lg'>8 lb. (3.6 kg)</p>
					</div>
				</div>
			</div>
			<div data-aos="zoom-in-down" data-aos-once="true" data-aos-offset="100" className='mx-72'>
				<h1 className='text-4xl mt-20 josefin'>Summary</h1>
				<p className='text-lg mt-5 jost'>
					Wireless DMX Track Feeds are used to add Wireless DMX control into any
					CONTROLTrack installation. Our patented Wireless DMX Track Feed
					receives data wirelessly from a Multiverse@ Transmitter or Node and
					outputs a DMX signal to the CONTROLTrack and DMX fixtures. Each
					Wireless DMX Feed can control up to 32 fixtures and can transmit DMX
					across 300' of track.
				</p>
			</div>
			<div data-aos="fade-right" data-aos-once="true" data-aos-offset="300" className='mx-72'>
				<h1 className='text-4xl mt-20 josefin'>Product Specifications</h1>
				<div className='flex mt-3 items-center gap-4'>
					<p className='h-2 aspect-square rounded-full bg-[#0088FF]'></p>
					<p className='text-lg mt-5 jost'>
						The LumeLEX 2084 Series uses high performance LED source technology
						with versatile optical performance for the most demanding
						applications of museum and retail accent lighting.
					</p>
				</div>
				<div className='flex items-center gap-4'>
					<p className='h-2 aspect-square rounded-full bg-[#0088FF]'></p>
					<p className='text-lg jost'>
						The LumeLEX 2084 Series is a clean, elegant stem mounted fixture
						designed with a variety of source options
					</p>
				</div>
			</div>
			<div data-aos="zoom-in-down" data-aos-offset="200"   data-aos-once="true"  data-aos-delay="100"  className='flex flex-col items-center mt-20 '>
				<h1 className='jost text-[40px] font-semibold'>Related Products</h1>
				<div className='mb-32 flex gap-20 mt-10'>
					<Related_products />
					<Related_products />
					<Related_products />
				</div>
			</div>
		</>
	)
}

export default Product_info
