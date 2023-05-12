const Router = require('express');
const router = new Router();
const lightController = require('../controllers/lightController');

router.post('/', lightController.create);
router.get('/', lightController.getAll);
router.get('/:id');

module.exports = router;