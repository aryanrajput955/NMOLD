import React, {useState} from 'react'
import Lighting_products from './Lighting_products'
import bulb1 from '../images/bulb.png'
import bulb2 from '../images/bulb2.png'
import down_arrow from '../images/down_arrow.png'
import {Link} from 'react-router-dom'

const Underground_Series = () => {
	const [isWall, setIsWall] = useState(false)

	return (
		<>
			<div className='ml-6 mb-20 w-[800px]'>
				<h1 className='josefin text-2xl font-semibold'>Underground Series</h1>
				<div className='flex flex-wrap mt-4 gap-10'>
					<Link to='/lighting/Underground Light 1'>
						<Lighting_products
							img_url='/product_images/under_ground_1.png'
							text='Underground Light 1'
						/>
					</Link>
					<Link to='/lighting/Underground Light 2'>
						<Lighting_products
							img_url='/product_images/under_ground_2.png'
							text='Underground Light 2'
						/>
					</Link>
					<Link to='/lighting/Underground Light 3'>
						<Lighting_products
							img_url='/product_images/under_ground_3.png'
							text='Underground Light 3'
						/>
					</Link>

					<div
						className={`transition-all ease-linear duration-300 flex gap-10 overflow-hidden flex-wrap mt-2 ${
							isWall ? 'h-[36rem]' : 'h-0'
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
						setIsWall(!isWall)
					}}
					className='flex justify-center items-center'>
					<button className='bg-black justify-center mt-4 items-center gap-2 flex px-5 py-3 rounded-xl jost text-lg text-white'>
						{isWall ? 'See Less' : 'See More'}
						<img
							className={`h-5 invert transition-transform duration-300 ${
								isWall ? 'rotate-180' : ''
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

export default Underground_Series
