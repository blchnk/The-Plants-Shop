const Router = require('express');
const router = new Router();
const VarietyController = require('../../controllers/propertiesControllers/varietyController');

router.post('/', VarietyController.create);
router.get('/', VarietyController.getAll);

module.exports = router;