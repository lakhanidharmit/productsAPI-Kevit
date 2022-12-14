const productController = require('../controllers/products.controller')
// const {authJwt, validateIdInParams, validateTheatreRequestBodies} = require('../middlewares')
 
module.exports = (app)=>{

    app.post("/products", productController.newProduct);

    app.get("/products", productController.getAllProducts);

    app.get("/products/:id", productController.getSingleProduct);

    app.patch("/products/:id", productController.updateProduct);
    
    app.all("/products/:id", (req, res) => {res.status(405).send()});

}