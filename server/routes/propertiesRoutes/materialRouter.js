const Router = require('express');
const router = new Router();
const materialController = require('../../controllers/propertiesControllers/materialController');

router.post('/', materialController.create);
router.get('/', materialController.getAll);

module.exports = router;