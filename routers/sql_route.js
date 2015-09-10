var express = require('express');
var router = express.Router();

//database module
var getInfo = require('../models/sql/getinfo');
var mysql = require('mysql');
var configDB = require('../config/database');
//connect to database
var DBobj = mysql.createConnection(configDB.mysql.connect);

router.get('/', function(req, res){
	
	//get data from database
	getInfo.getUserbyID(DBobj, 1)
	.then(function(row){
		res.send(row);
	})
	.catch(function(err){
		res.send("something bad happened");
	});
});


module.exports = router;
