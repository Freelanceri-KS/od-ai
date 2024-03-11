const Products = require("../model/productModel");


const getProduct = async (req,res)=>{
    try {
        const {id}=req.params;
        const product = await Products.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getProducts = async(req,res)=>{
    try {
        const product = await Products.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createProduct = async(req,res)=>{
    try {
        const product = await Products.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Products.findByIdAndDelete(id)
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}


module.exports = {getProduct,getProducts,createProduct,deleteProduct}