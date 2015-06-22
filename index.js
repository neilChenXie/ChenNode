/*
 * project based 
 * configuration
*/

//test
var testHandler = require('./handler/test/test.js');
var testRoute = require('./routers/test_route.js');
testRoute.config(testHandler);

//profile
var profHandler = require('./handler/profile/profile.js');
var profRoute = require('./routers/profile_route.js');
profRoute.config(profHandler);


/*
 * create server 
 * with choosable 
 * functions
*/

var Server = require('./server.js');
server = new Server(8000);

//add route when needed
server.profileConfig(profRoute);
server.testConfig(testRoute);
//start the server

server.start();
