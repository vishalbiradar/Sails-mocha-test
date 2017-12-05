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
        }
    }
};