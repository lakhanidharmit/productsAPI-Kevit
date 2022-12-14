const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');
const serverConfig = require('./configs/server.config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

db.sequelize.sync().then(()=>{
    console.log("#### models/tables are dropped and recreated #####");
})

require('./routes/products')(app);

module.exports = app.listen(serverConfig.PORT,()=>{
    console.log(`#### connected to server at port no.: ${serverConfig.PORT} ####`);
})