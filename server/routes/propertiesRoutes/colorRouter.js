const Router = require('express');
const router = new Router();
const colorController = require('../../controllers/propertiesControllers/colorController');

router.post('/', colorController.create);
router.get('/', colorController.getAll);

module.exports = router;