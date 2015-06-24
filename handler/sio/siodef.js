function sioDef (mySio) {
	mySio.of('bird').on("connection",conSuc);
}

function conSuc(socket) {
	console.log('a user connected');
}
module.exports = sioDef;
