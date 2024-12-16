import React, {useEffect, useState} from 'react'
import Navbar from './navbar'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dynamic_Products = () => {
	const params = useParams()

	const [productPage, setProductPage] = useState([])
	const [matchedProduct, setMatchedProduct] = useState({
		product_info: '',
		product_name: '',
		product_specification: '',
		product_summary: '',
		product_imageURL: '',
	})

	useEffect(() => {
		axios
			.get('http://localhost:8080/product-info')
			.then((response) => {
				setProductPage(response.data)
				const prod = response.data.find((product) => {
					return product.product_name === params.id
				})
				// console.log()
				setMatchedProduct(prod)
			})
			.catch((err) => console.log(err))
	}, [])

	console.log(params.id)

	// console.log(matchedProduct.product_imageURL)

	return (
		// <h1>asd</h1>
		<>
			<div className='flex mt-20 justify-center'>
				<div
					data-aos-offset='300'
					data-aos='fade-right'>
					<img
						className='w-[560px]'
						src={matchedProduct.product_imageURL}
						alt='bulb'
					/>
				</div>
				<div
					data-aos='fade-left'
					data-aos-offset='400'
					className='ml-14'>
					<h1 className='josefin text-4xl'>{matchedProduct.product_name}</h1>
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
			<div
				data-aos='zoom-in-down'
				data-aos-once='true'
				data-aos-offset='100'
				className='mx-72'>
				<h1 className='text-4xl mt-20 josefin'>Summary</h1>
				<p className='text-lg mt-5 jost'>{matchedProduct.product_summary}</p>
			</div>
			<div
				data-aos='fade-right'
				data-aos-once='true'
				data-aos-offset='300'
				className='mx-72 mb-10'>
				<h1 className='text-4xl mt-20 josefin'>Product Specifications</h1>
				<div className='flex mt-3 items-center gap-4'>
					<p className='h-2 aspect-square rounded-full bg-[#0088FF]'></p>
					<p className='text-lg jost'>{matchedProduct.product_specification}</p>
				</div>
			</div>
		</>
	)
}

export default Dynamic_Products
