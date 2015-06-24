function sioDef (mySio) {
	mySio.on("connection",conSuc);
}

function conSuc(socket) {
	console.log('a user connected');
}
module.exports = sioDef;
