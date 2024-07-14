const mongoose = require('mongoose')

const todo = new mongoose.Schema({},{timestamps:true})

export const todo = mongoose.model("todo",todo)