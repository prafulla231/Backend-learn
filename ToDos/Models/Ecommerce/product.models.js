const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({},{timestamps : true})

export const product = mongoose.model("product",productSchema)