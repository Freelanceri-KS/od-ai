const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const products = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})


const Products = mongoose.model("products",products)

module.exports = Products;