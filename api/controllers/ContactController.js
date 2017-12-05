module.exports = {
    test (req, res) {
        let group = Group.testInstance();
        console.log("contact");
        return res.status(200).jsonx([group]);
    }
}
