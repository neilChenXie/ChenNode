var path = require('path');

var Profile = function () {
	/*constructor*/
};

Profile.prototype.overview = function (req,res) {
	//res.render('index');
	//console.log(req);
	//res.sendFile(path.join(__dirname,'../../public/index.html'));
};

module.exports = new Profile();
