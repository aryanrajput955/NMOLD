const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
	product_name: {type: String, required: true},
	product_summary: {type: String, required: true},
	product_specification: {type: String, required: true},
	product_info: {type: String, required: true},
	product_imageURL: {type: String, required: true},
})

const productModel = new mongoose.model('nmold_product_page', productSchema)

module.exports = productModel
