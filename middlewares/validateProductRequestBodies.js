const newProductBody = (req,res,next)=>{
    try{
        if (!req.body.name) {
            return res.status(400).send({
                message: "Failed ! Product name is not provided"
            });
        }else if (typeof req.body.name !== "string"){
            return res.status(400).send({
                message: "Failed ! Product name is not in correct format (String)"
            });
        }
    
        if (!req.body.price) {
            return res.status(400).send({
                message: "Failed ! Product price is not provided"
            });
        }else if (typeof req.body.price !== "number"){
            return res.status(400).send({
                message: "Failed ! Product price is not in correct format (Number)"
            });
        }else if (req.body.price < 0){
            return res.status(400).send({
                message: "Failed ! Product price cannot be less then 0"
            });
        }

        if (!req.body.mrp) {
            return res.status(400).send({
                message: "Failed ! Product MRP is not provided"
            });
        }else if (typeof req.body.mrp !== "number"){
            return res.status(400).send({
                message: "Failed ! Product MRP is not in correct format (Number)"
            });
        }else if (req.body.mrp < 0){
            return res.status(400).send({
                message: "Failed ! Product MRP cannot be less then 0"
            });
        }

        if (!req.body.stock) {
            return res.status(400).send({
                message: "Failed ! Product stock is not provided"
            });
        }else if (typeof req.body.stock !== "number"){
            return res.status(400).send({
                message: "Failed ! Product stock is not in correct format (Number)"
            });
        }else if (req.body.stock < 0){
            return res.status(400).send({
                message: "Failed ! Product stock cannot be less then 0"
            });
        }
    
        next();
    }catch{
        console.log("#### Error while velidating new product request body ##### ", err.message);
        res.status(500).send({
            message : "Internal server error while new product body validation"
        });
    }
}

const updateProductBody = async (req,res,next)=>{

    let isError = false, errMsg = [];

    try{
        if (req.body.name && typeof req.body.name !== "string"){
            return res.status(400).send({
                message: "Failed ! Product name is not in correct format (String)"
            });
        }

        if (req.body.price){
            if (typeof req.body.price !== "number"){
                return res.status(400).send({
                    message: "Failed ! Product price is not in correct format (Number)"
                });
            }
            if (req.body.price < 0){
                return res.status(400).send({
                    message: "Failed ! Product price cannot be less then 0"
                });
            }
        }


        if (req.body.mpr){
            if (typeof req.body.mrp !== "number"){
                return res.status(400).send({
                    message: "Failed ! Product MRP is not in correct format (Number)"
                });
            }
            if (req.body.mrp < 0){
                return res.status(400).send({
                    message: "Failed ! Product MRP cannot be less then 0"
                });
            }
        }

        if (req.body.stock){
            if (typeof req.body.stock !== "number"){
                return res.status(400).send({
                    message: "Failed ! Product stock is not in correct format (Number)"
                });
            }
            if (req.body.stock < 0){
                return res.status(400).send({
                    message: "Failed ! Product stock cannot be less then 0"
                });
            }
        }

        if (req.body.isPublished && typeof req.body.isPublished != "boolean"){
            return res.status(400).send({
                message: "Failed ! Product stock is not in correct format (Number)"
            });
        }

        if (req.body.isPublished && req.body.isPublished==true){

            let price = req.body.price ? req.body.price : req.productInParams.price; //from middleware
            let mrp = req.body.mrp ? req.body.mrp : req.productInParams.mrp;
            let stock = req.body.stock ? req.body.stock : req.productInParams.stock;

            if (price > mrp){

                isError = true;
                errMsg.push("MRP should be less than equal to the Price")

            }
            if (stock==0){

                isError = true;
                errMsg.push("Stock count is 0")
            }

        }

        if (isError){
            return res.status(422).send(errMsg)
        }
    
        next();
    }catch{
        console.log("#### Error while velidating update product request body ##### ", err.message);
        res.status(500).send({
            message : "Internal server error while update product body validation"
        });
    }
}

const validateProductRequestBodies = {
    newProductBody,
    updateProductBody
}

module.exports = validateProductRequestBodies