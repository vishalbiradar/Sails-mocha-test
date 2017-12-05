"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("util");
function index(req, res, next) {
    console.log('index() from TsController.ts');
    res.status(200).send('Hello from Typescript!');
}
exports.index = index;
function config(req, res, next) {
    console.log('config() from TsController.ts');
    res.status(200)
        .send('<h1>sails.config :</h1><pre>' + util.inspect(sails.config) + '<pre>');
}
exports.config = config;
