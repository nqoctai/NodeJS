const express = require('express')
const path = require('path')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;
const webRoutes = require('./routes/web')

app.use('/', webRoutes);
// config template engine
configViewEngine(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});