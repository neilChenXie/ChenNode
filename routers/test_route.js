var express = require('express');
var router = express.Router();//new router object

/*router configuration*/
router.config = function (handler) {
	router.get('/',handler.helloWorld);
};

module.exports = router;
