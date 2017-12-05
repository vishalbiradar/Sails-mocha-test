/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var bcrypt = require('bcrypt');

module.exports = {
    attributes: {
        userName: {
            type: 'text',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true,
        },

        isPasswordValid: function (password, cb) {
            bcrypt.compare(password, this.password, cb);
        }
    }
};