const jsonwebtoken = require('jsonwebtoken');
const { SECRET } = require('../constants/constants');

const jwt = {
    sign: async (payload) => {
        return await jsonwebtoken.sign(payload, process.env.SECRET, { expiresIn: '1d' });
    },
    verify: async (token) => {
        return await jsonwebtoken.verify(token, process.env.SECRET);
    }
}