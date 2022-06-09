const express = require('express')
const app = express()
const mongoConn = require('./config/mongodb')
mongoConn()



app.use('/api/v1', require('./routes/Products.routes'))
module.exports = app