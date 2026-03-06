const express = require('express');
const { createWithdrawal, getUserWithdrawals } = require('./controllers/withdrawalController');
const { authMiddleware } = require('./middleware/auth');

const router = express.Router();

router.post('/create', authMiddleware, createWithdrawal);
router.get('/user', authMiddleware, getUserWithdrawals);

module.exports = router;
