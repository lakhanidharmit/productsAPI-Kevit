require('dotenv').config();

const development = {
    database: process.env.DB_DEV,
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASS,
    dialectInformation:{
        host:process.env.DB_DEV_HOST,
        dialect:process.env.DB_DEV_DIALECT,
        define: {
            timestamps: false
        }
    }
}

module.exports = {development}