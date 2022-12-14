module.exports = (sequelize,Sequelize) => {
    const Product = sequelize.define("product",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type:Sequelize.STRING,
            allownull: false
        },
        price:{
            type: Sequelize.DECIMAL(10,2),
            min: 0,
            allownull: false
        },
        mrp:{
            type:Sequelize.DECIMAL(10,2),
            min: 0,
            allownull: false
        },
        stock:{
            type:Sequelize.INTEGER,
            min: 0,
            allownull: false
        },
        isPublished:{
            type:Sequelize.BOOLEAN,
            defaultValue: false
        }
    },
    {
        tableName:'products'
    });

    return Product;
}