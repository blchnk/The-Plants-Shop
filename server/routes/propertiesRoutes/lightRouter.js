const Router = require('express');
const router = new Router();
const lightController = require('../../controllers/propertiesControllers/lightController');

router.post('/', lightController.create);
router.get('/', lightController.getAll);

module.exports = router;