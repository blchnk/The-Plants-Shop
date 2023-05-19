const Router = require('express');
const router = new Router();
const benefitController = require('../../controllers/propertiesControllers/benefitController');

router.post('/', benefitController.create);
router.get('/', benefitController.getAll);

module.exports = router;