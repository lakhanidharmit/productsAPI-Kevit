# productsAPI
This project is node.js back-end API to insert products in DB. This application was created as a part of an interview process at Kevit Technologies. It runs on Express.js framework and uses MySQL database.

<br/>


## installing
Simply clone the repository and install the dependencies.

```bash
git clone https://github.com/lakhanidharmit/productsAPI-Kevit.git
cd kevitTechProject
```

```bash
npm install
```

To start the express server, run the following

```bash
npm start
```

The application will run on port 8080

<br/>

## REST API paths

`POST /products`<br/>
Create a new product with name, price, mrp and stock.<br/>

`GET /products`<br/>
Get a list of all products.<br/>

`GET /products/:id`<br/>
Get a single products by it's id.<br/>

`PATCH /products/:id`<br/>
update a single products by it's id.<br/>




<br/>

## Dependencies

|npm modules|
|-|
|express|
|sequelize|
|mysql2|
|dotenv|
|body-parser|

|dev dependencies|
|-|
|jasmine|
|chai|
|chai-http|
|bluebird|

