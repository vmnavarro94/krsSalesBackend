const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = mongoose.model('Product', new Schema({
	name: String,
	desc: String,
	buyPrice: Number,
	sellPrice: Number,
	image: String,
}))

module.exports = Products

