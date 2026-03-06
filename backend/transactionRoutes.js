const express = require('express');
const { getUserTransactions } = require('./controllers/transactionController');
const { authMiddleware } = require('./middleware/auth');

const router = express.Router();

router.get('/user', authMiddleware, getUserTransactions);

module.exports = router;
