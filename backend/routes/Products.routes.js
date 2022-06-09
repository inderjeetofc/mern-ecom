const express = require('express')
const ProductsController = require('../controller/Products.controller')
const Product = new ProductsController()
const route = express.Router()

route.get('/products', Product.getAllProducts)

module.exports = route