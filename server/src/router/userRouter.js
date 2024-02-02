const router = require('express').Router();
const { extractErrorMessage } = require('../utils/errorHandler');
const { createUser, userWithThisEmailOrUsernameExists } = require('../db/userServices');

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


module.exports = router;