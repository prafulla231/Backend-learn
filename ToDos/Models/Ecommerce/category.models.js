const mongoose = require('mongoose')

const itemlistSchema = mongoose.Schema({
    productQuantity:{
        type:number,
        required:true,
    },
    productPrice:{
        type:number,
        required:true
    }
})

const categorySchema = mongoose.Schema({
    itemList :[itemlistSchema],
    product:[
        {
            type:mongoose.Schema.Type.ObjectId,
            ref:'product'
        }
    ]
    
})

export const category = mongoose.model("category",categorySchema)