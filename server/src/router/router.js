const router = require('express').Router();
const userRouter = require('./userRouter');

router.get('/', (req, res) => {
    res.send('Hello world!');
})
router.use('/user', userRouter);


router.get('*', (req, res) => {
    res.status(404).send('Not Found');
})


module.exports = router;