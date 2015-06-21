var Test = function () {
	/*constructor*/
};

Test.prototype.helloWorld = function (req,res) {
	res.status(200).send('Hello World');
};

module.exports = new Test();
