var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

router.get('/',userController.hello);

router.get('/:username',userController.helloWithName);

router.post('/',userController.postResponse);

module.exports = router;
