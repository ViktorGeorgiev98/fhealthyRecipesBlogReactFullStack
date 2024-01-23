const mongoose = require('mongoose');
const { MONGODB } = require('../../src/constants/constants')


const dbConfig = async () => {
    try {
        await mongoose.connect(MONGODB);
        console.log('Connected to MongoDB');
    } catch(e) {
        console.log(e.message);
    }
}

module.exports = dbConfig;