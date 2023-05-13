const Router = require('express');
const router = new Router();
const newArrivalsController = require('../controllers/newArrivalsController');

router.get('/', newArrivalsController.getLastFourProducts);

module.exports = router;