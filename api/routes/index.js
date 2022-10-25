const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const cartRouter = require('./cartRoute');
const productRouter = require('./productRouter');

router.use('/user', userRouter);
router.use('/cart', cartgitRouter.router);
router.use('/product', productRouter);

module.exports = router;