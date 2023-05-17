const express = require('express');
const Router = express.Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const typeRouter = require('./typeRouter');
const colorRouter = require('./colorRouter');
const productInfoRouter = require('./productInfoRouter');
const chatRouter = require('./chatRouter');
const newArrivalsRouter = require('./newArrivalsRouter');
const sizeRouter = require('./sizeRouter');

Router.use('/user', userRouter);
Router.use('/product', productRouter);
Router.use('/product-info', productInfoRouter);
Router.use('/type', typeRouter);
Router.use('/newArrivals', newArrivalsRouter);

Router.use('/color', colorRouter);
Router.use('/size', sizeRouter);

Router.use('/chat', chatRouter);

module.exports = Router;