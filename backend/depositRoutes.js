const express = require('express');
const { createDeposit, getUserDeposits } = require('./controllers/depositController');
const { authMiddleware } = require('./middleware/auth');

const router = express.Router();

router.post('/create', authMiddleware, createDeposit);
router.get('/user', authMiddleware, getUserDeposits);

module.exports = router;
