const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const typeRouter = require('./typeRouter');
const colorRouter = require('./colorRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/type', typeRouter);
router.use('/color', colorRouter);

module.exports = router;