const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
require('dotenv').config()
require('./connect')

const PORT = process.env.PORT
const productModel = require('./products_model')
app.get('/', (req, res) => {
	res.send('PONG')
})

app.get('/product-info', async (req, res) => {
	try {
		const items = await productModel.find()
		res.json(items)
	} catch (error) {
		res.status(500).json({error: 'Failed to fetch items'})
	}
})

app.listen(PORT, () => {
	console.log(`Connected to the ${PORT}`)
})
