const userModel = require('../db/User');


export const createUser = async (username, email, password) => {
    return await userModel.create({username, email, password});
}

export const userWithThisEmailOrUsernameExists = async (username, email) => {
    const emailExists = await userModel.find({email:email});
    const usernameExists = await userModel.find({username:username});
    if (emailExists || usernameExists) {
        return true;
    } else {
        return false;
    }
}