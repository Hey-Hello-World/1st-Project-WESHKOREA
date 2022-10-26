const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const cartRouter = require('./cartRoute');
const orderRouter = require('./orderRouter');

router.use('/user', userRouter);
router.use('/cart', cartRouter.router);
router.use('/order', orderRouter);

module.exports = router;