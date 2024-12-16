import React, {useState} from 'react'
import Lighting_products from './Lighting_products'
import bulb1 from '../images/bulb.png'
import bulb2 from '../images/bulb2.png'
import down_arrow from '../images/down_arrow.png'
import {Link} from 'react-router-dom'

const Flood_Light_Series = () => {
	const [isFlood, setIsFlood] = useState(false)

	return (
		<>
			<div className='ml-6 mb-20 w-[800px]'>
				<h1 className='mt-5 josefin text-2xl font-semibold'>
					Flood Light Series
				</h1>
				<div className='flex flex-wrap mt-4 gap-10'>
					<Link to='/lighting/Flood Light 1'>
						<Lighting_products
							img_url='/product_images/flood_light_1.png'
							text='Flood Light 1'
						/>
					</Link>
					<Link to='/lighting/Flood Light 2'>
						<Lighting_products
							img_url='/product_images/flood_light_2.png'
							text='Flood Light 2'
						/>
					</Link>
					<Link to='/lighting/Flood Light 3'>
						<Lighting_products
							img_url='/product_images/flood_light_3.png'
							text='Flood Light 3'
						/>
					</Link>
					<div
						className={`transition-all ease-linear duration-300 flex gap-10 overflow-hidden flex-wrap mt-2 ${
							isFlood ? 'h-[36rem]' : 'h-0'
						}`}>
						<Lighting_products
							img_url={bulb1}
							text='Wireless DMX Track'
						/>
						<Lighting_products
							img_url={bulb2}
							text='Wireless DMX Track'
						/>
						<Lighting_products
							img_url={bulb1}
							text='Wireless DMX Track'
						/>
						<Lighting_products
							img_url={bulb1}
							text='Wireless DMX Track'
						/>
						<Lighting_products
							img_url={bulb2}
							text='Wireless DMX Track'
						/>
						<Lighting_products
							img_url={bulb1}
							text='Wireless DMX Track'
						/>
					</div>
				</div>
				<div
					onClick={() => {
						setIsFlood(!isFlood)
					}}
					className='flex justify-center items-center mt-5'>
					<button className='bg-black justify-center mt-4 items-center gap-2 flex px-5 py-3 rounded-xl jost text-lg text-white'>
						{isFlood ? 'See Less' : 'See More'}
						<img
							className={`h-5 invert transition-transform duration-300 ${
								isFlood ? 'rotate-180' : ''
							}`}
							src={down_arrow}
							alt='Toggle Icon'
						/>
					</button>
				</div>
			</div>
		</>
	)
}

export default Flood_Light_Series
