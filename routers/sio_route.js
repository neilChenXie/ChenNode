var express = require('express');
var router = express.Router();

router.config = function (handler) {
	router.get('/test',handler.test);
};

module.exports = router;
