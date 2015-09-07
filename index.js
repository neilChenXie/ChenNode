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
//var sioDef = require('./handler/sio/siodef.js');
//var sioHandler = require('./handler/sio/siopage.js');
//var sioRoute = require('./routers/sio_route.js');
//sioRoute.config(sioHandler);
//server.sioConfig(sioRoute,sioDef);
////start socket server
//server.startSocket();

/*
 * start the server
 */
server.startServer();
