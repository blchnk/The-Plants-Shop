const Router = require('express');
const router = new Router();
const chatController = require('../controllers/chatController');

router.post('/', chatController.askToChatGpt);

module.exports = router;