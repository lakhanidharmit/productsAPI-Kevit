const productController = require('../controllers/products')
const {validateIdInParams, validateProductRequestBodies} = require('../middlewares')
 
module.exports = (app)=>{

    app.post("/products", [validateProductRequestBodies.newProductBody], productController.newProduct);

    app.get("/products", productController.getAllProducts);

    app.get("/products/:id", [validateIdInParams.productInParams], productController.getSingleProduct);

    app.patch("/products/:id", [validateIdInParams.productInParams, validateProductRequestBodies.updateProductBody], productController.updateProduct);
    
    app.all("/products/:id", (req, res) => {res.status(405).send()});

}