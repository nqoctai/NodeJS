const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;
const webRoutes = require('./routes/web')
const connection = require('./config/database')


app.use('/', webRoutes);
// config template engine
configViewEngine(app);



 // simle query
 connection.query(
  'SELECT * FROM Users u;',
  function(err, results, fields) {
    console.log(">>>results = ",results); // results contains rows returned by server
  })
 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});