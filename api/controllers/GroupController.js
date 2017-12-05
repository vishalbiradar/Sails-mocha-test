module.exports = {
	test (req, res) {
		console.log(req.decodeAuth);
        let group = Group.testInstance();
		return res.status(200).jsonx([group]);
	}
}
