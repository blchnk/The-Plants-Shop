const Router = require('express');
const router = new Router();
const productInfoController = require('../controllers/productInfoController');

router.get('/:id', productInfoController.getAll);

module.exports = router;