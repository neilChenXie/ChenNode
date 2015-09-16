var express = require('express');
var router = express.Router();//new router object

/*router configuration*/
router.get('/', function(req,res){
	res.send("hello world");
	//console.log(req.cookies);
});

module.exports = router;
