const jsonwebtoken = require('jsonwebtoken');
const { SECRET } = require('../constants/constants');
const { promisify } = require('util');

const jwt = {
    sign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify)
}


module.exports = jwt;