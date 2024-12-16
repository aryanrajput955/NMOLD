import React from 'react'
import bulb2 from '../images/bulb2.png'
import arrow from '../images/dropdown_arrow.jpg'

const Related_products = () => {
	return (
		<div>
			<div className='h-80 bg-black rounded-3xl custom_shadow'>
				<img
					className='h-80 aspect-square rounded-2xl'
					src={bulb2}
				/>
			</div>
			<h1 className=' cursor-pointer mt-10 jost font-semibold text-lg'>
				LXGHR23 LIGHT
			</h1>
			<div className='flex items-center cursor-pointer gap-1'>
				<p className='custom_blue jost italic hover:underline'>See more</p>
				<img
					className='-rotate-90 w-3 aspect-square'
					src={arrow}
				/>
			</div>
		</div>
	)
}

export default Related_products
