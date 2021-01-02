const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const products = require('./routes/products')

const app = express()
app.use(bodyParser.json({
	extended: true,
	limit: '5mb',
}))
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/products', products)

module.exports = app

