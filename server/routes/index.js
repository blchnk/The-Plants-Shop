const express = require('express');
const Router = express.Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const typeRouter = require('./typeRouter');
const colorRouter = require('./colorRouter');
const productInfoRouter = require('./productInfoRouter');

Router.use('/user', userRouter);
Router.use('/product', productRouter);
Router.use('/product-info', productInfoRouter);
Router.use('/type', typeRouter);
Router.use('/color', colorRouter);

module.exports = Router;