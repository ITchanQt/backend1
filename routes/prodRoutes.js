const express = require('express');
const productRouter = express.Router();
const productControllers = require('../controllers/prodControllers');

productRouter.post('/create-prod', productControllers.createProd);

module.exports = productRouter;