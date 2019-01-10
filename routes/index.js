var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* 
    It redirect to the hello function inside userController  
*/
router.get('/',userController.hello);

/* 
    It redirect to the helloWithName function inside userController  
*/
router.get('/:username',userController.helloWithName);

/* 
    It redirect to the postResponse function inside userController
 */
router.post('/',userController.postResponse);

module.exports = router;
