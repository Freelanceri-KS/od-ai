const express = require('express');
const router = express.Router();
const {getProduct,getProducts,createProduct,deleteProduct} = require("../controller/productController");

router.get("/",getProducts);
router.get("/:id",getProduct);
router.post("/",createProduct);
router.delete("/:id",deleteProduct);


module.exports=router