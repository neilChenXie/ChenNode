var Profile = function () {
	/*constructor*/
};

Profile.prototype.overview = function (req,res) {
	res.render('index');
};

module.exports = new Profile();
