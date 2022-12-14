const Product = require("../models/products.model");

exports.newProduct = async (req,res)=>{
    try{
        const data = {
            name : req.body.name,
            price : req.body.price,
            mrp : req.body.mrp,
            stock : req.body.stock
        }
    
        const product = await Product.create(data);

        console.log(`#### New product '${product.name}' created ####`);
        res.status(201).send(product);


    }catch(err){
        console.log("#### Error while creating new product #### ", err);
        res.status(500).send({
            message : "Internal server error while creating new product"
        });
    }
}

exports.getAllProducts = async (req,res)=>{
    try{
        const products = await Product.find();
    
        res.status(200).send(products);
    
    }catch(err){
        console.log("#### Error while getting all products ####", err.message);
        res.status(500).send({
            message : "Internal server error while getting all products"
        })
    }
}

exports.getSingleProduct = async (req,res)=>{

    const product = req.productInParams; //from middleware
    
    res.status(200).send(product);

}

exports.updateProduct = async (req,res)=>{
    try{
        const product = req.productInParams; //from middleware

        product.name = req.body.name ? req.body.name : product.name,
        product.price = req.body.price ? req.body.price : product.price,
        product.mrp = req.body.mrp ? req.body.mrp : product.mrp,
        product.stock = req.body.stock ? req.body.stock : product.stock,
        product.isPublished = req.body.isPublished ? req.body.isPublished : product.isPublished

        const updatedProduct = await product.save();

        console.log(`#### Product '${updatedProduct.name}' data updated ####`);
        res.status(200).send(updatedProduct);

    }catch(err){
        console.log("#### Error while updating product data #### ", err.message);
        res.status(500).send({
            message : "Internal server error while updating product data"
        });
    }
}