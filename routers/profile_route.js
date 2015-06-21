var express = require('express');
var router = express.Router();

router.config = function (handler) {
	router.get('/',handler.overview);
};

module.exports = router;
