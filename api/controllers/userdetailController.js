"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbUtilies = require("../services/dbUtils");
// Get Users
function get_users(req, res, next) {
    var name = req.query['name'];
    var id = req.query['id'];
    if (name) {
        var reqObj = { username: name };
        dbUtilies.getOne('User', reqObj).subscribe(function (data) {
            res.status(200).send(data);
        }, function (err) {
            res.status(404).send(err);
        });
    }
    else if (id) {
        var reqObj = { id: id };
        dbUtilies.getOne('User', reqObj).subscribe(function (data) {
            res.status(200).send(data);
        }, function (err) {
            res.notFound(err);
            // res.status(404).send(err);
        });
    }
    else {
        console.log('The Next Is::', next);
        User.find().exec(function (err, result) {
            console.log(err);
            console.log(result);
            return res.json(result);
        });
        // dbUtilies.getAll('users')
        //     .subscribe(
        //         data => {
        //             res.status(200).send(data);
        //         },
        //         err => {
        //             res.status(500).send(err);
        //         }
        //     );
    }
}
exports.get_users = get_users;
// Create New User
function create_user(req, res, next) {
    var reqBody = req.body;
    dbUtilies.create('User', reqBody).subscribe(function (data) {
        res.status(200).send(data);
    }, function (err) {
        res.status(400).send(err);
    });
}
exports.create_user = create_user;
// Update The User
function update_user(req, res, next) {
    var id = req.query['id'];
    var reqObj = { id: id };
    var reqBody = req.body;
    dbUtilies.update('User', reqObj, reqBody).subscribe(function (data) {
        res.status(200).send(data);
    }, function (err) {
        res.status(404).send(err);
    });
}
exports.update_user = update_user;
//Delete The User
function delete_user(req, res, next) {
    var id = req.query['id'];
    var reqObj = { id: id };
    dbUtilies.destroy('User', reqObj).subscribe(function (data) {
        res.status(200).send(data);
    }, function (err) {
        res.status(404).send(err);
    });
}
exports.delete_user = delete_user;
