/*
 * create server 
 * with choosable 
 * functions
*/
var Server = require('./server.js');
server = new Server(8000);

/*
 * project based 
 * configuration
*/

//sio
var sioDef = require('./handler/sio/siodef.js');
var sioHandler = require('./handler/sio/siopage.js');
var sioRoute = require('./routers/sio_route.js');
sioRoute.config(sioHandler);
server.sioConfig(sioRoute,sioDef);
server.startSocket(); //start socket server

//test
var testHandler = require('./handler/test/test.js');
var testRoute = require('./routers/test_route.js');
testRoute.config(testHandler);
server.testConfig(testRoute);

//profile
var profHandler = require('./handler/profile/profile.js');
var profRoute = require('./routers/profile_route.js');
profRoute.config(profHandler);
server.profileConfig(profRoute);

/*
 * start the server
 */
server.startServer();
