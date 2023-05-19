const express = require('express');
const Router = express.Router();
const userRouter = require('./userRouter');
const productRouter = require('./productsRoutes/productRouter');
const typeRouter = require('./typeRouter');
const colorRouter = require('./propertiesRoutes/colorRouter');
const productInfoRouter = require('./productsRoutes/productInfoRouter');
const chatRouter = require('./chatRouter');
const newArrivalsRouter = require('./productsRoutes/newArrivalsRouter');
const sizeRouter = require('./propertiesRoutes/sizeRouter');
const varietyRouter = require('./propertiesRoutes/varietyRoute');
const lightRouter = require('./propertiesRoutes/lightRouter');
const materialRouter = require('./propertiesRoutes/materialRouter');
const benefitRouter = require('./propertiesRoutes/benefitRouter');

Router.use('/user', userRouter);

Router.use('/product', productRouter);
Router.use('/product-info', productInfoRouter);
Router.use('/newArrivals', newArrivalsRouter);

Router.use('/type', typeRouter);

Router.use('/color', colorRouter);
Router.use('/size', sizeRouter);
Router.use('/variety', varietyRouter);
Router.use('/light', lightRouter);
Router.use('/material', materialRouter);
Router.use('/benefit', benefitRouter);

Router.use('/chat', chatRouter);

module.exports = Router;