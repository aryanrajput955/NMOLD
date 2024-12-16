import React from 'react'
import { Link } from 'react-router-dom'
const Lighting_products = ({img_url , text}) => {
	
	return (
		<div data-aos="fade-left"  className='cursor-pointer flex flex-col items-center'>
			<img
				className='h-60 aspect-square rounded-2xl hover:'
				alt='image'
				src={img_url}
				/>
			<h1 className='text-xl font-semibold'>{text}</h1>
		</div>
	)
}

export default Lighting_products
