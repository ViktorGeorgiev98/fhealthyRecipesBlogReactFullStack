const router = require('express').Router();
const { extractErrorMessage } = require('../utils/errorHandler');
const { createUser, userWithThisEmailOrUsernameExists, findUserByEmail } = require('../db/userServices');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../constants/constants');

router.get('/register', (req, res) => {
    res.send('Register')
})

router.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    console.log({username, email, password})
    try {
        const userExists = await userWithThisEmailOrUsernameExists(username, email);
        if (userExists) {
            res.status(400);
            throw new Error("User exists!");
        }
        const newUser = await createUser(username, email, password);
        if (newUser) {
            res.status(200).send(newUser);
        } else {
            throw new Error(res.text);
        }
    } catch(e) {
        const errorMessage = extractErrorMessage(e);
        console.log(errorMessage);
     //    res.text = errorMessage;
         res.status(400).json({ errorMessage });
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await findUserByEmail(email);
        if (!user) {
            throw new Error("User not found!");
        }

        const passwordIsValid = await bcrypt.compare(user.password, password);
        if (!passwordIsValid) {
            throw new Error("Invalid password!");
        }
        const payload = {
            _id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(payload, SECRET, {expiresIn: '1d'});
        const userAndToken = {user, token};
        res.status(200).send(userAndToken);
    } catch(e) {
        const errorMessage = extractErrorMessage(e);
        console.log(errorMessage);
        res.status(400),json({ errorMessage });
    }
})


module.exports = router;