const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URL

mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log('Connected to the db...')
	})
	.catch((err) => {
		console.log(err)
	})
