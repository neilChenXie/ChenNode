var Sio = function () {
	/*constructor*/
};

Sio.prototype.test = function (req, res) {
	res.render('sio');
};

module.exports = new Sio();
