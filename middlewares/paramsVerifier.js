const db = require('../models');
const Product = db.product;

const productInParams = async (req,res,next)=>{

    try{

        const product = await Product.findByPk(req.params.id);

        if(!product){
            return res.status(400).send({
                message : "Product Id passed dosen't exist"
            })
        }
        req.productInParams = product;
        next();
        
    }catch(err){
        console.log("#### Error while reading the product info #### ", err.message);
        return res.status(500).send({
            message : "Internal server error while reading the product data"
        })
    }
}

const validateIdInParams = {
    productInParams
}

module.exports = validateIdInParams