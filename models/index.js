const Sequelize = require('sequelize');
const dbConfig = require('../configs/db.config');
const dbSetting = dbConfig[process.env.ENV];
const sequelize = new Sequelize(
    dbSetting.database,
    dbSetting.username,
    dbSetting.password,
    dbSetting.dialectInformation
);

const db = {sequelize, Sequelize};

db.product = require('./products')(sequelize,Sequelize);

module.exports = db;