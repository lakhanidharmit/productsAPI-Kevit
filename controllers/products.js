const db = require('../models');
const Product = db.product;

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
        const products = await Product.findAll();
    
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

        const product = {
            name: req.body.name,
            price: req.body.price,
            mrp: req.body.mrp,
            stock: req.body.stock,
            isPublished : req.body.isPublished
        }

        await Product.update(product,{where: {id:req.params.id}});

        console.log(`#### Product data updated ####`);
        res.status(204).send();

    }catch(err){
        console.log("#### Error while updating product data #### ", err.message);
        res.status(500).send({
            message : "Internal server error while updating product data"
        });
    }
}