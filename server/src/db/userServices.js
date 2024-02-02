const userModel = require('../db/User');


const createUser = async (username, email, password) => {
    return await userModel.create({username, email, password});
}

const userWithThisEmailOrUsernameExists = async (username, email) => {
    const emailExists = await userModel.findOne({email:email});
    const usernameExists = await userModel.findOne({username:username});
    if (emailExists || usernameExists) {
        return true;
    } else {
        return false;
    }
}



module.exports = {
    createUser,
    userWithThisEmailOrUsernameExists,
};