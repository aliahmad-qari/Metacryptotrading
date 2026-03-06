const express = require('express');
const { getDashboardStats, getAllUsers, updateUserBalance, toggleUserStatus, getAllTransactions } = require('./controllers/adminController');
const { getAllDeposits, approveDeposit, rejectDeposit } = require('./controllers/depositController');
const { getAllWithdrawals, approveWithdrawal, rejectWithdrawal } = require('./controllers/withdrawalController');
const { authMiddleware, adminMiddleware } = require('./middleware/auth');

const router = express.Router();

router.use(authMiddleware, adminMiddleware);

router.get('/stats', getDashboardStats);
router.get('/users', getAllUsers);
router.put('/users/:userId/balance', updateUserBalance);
router.put('/users/:userId/toggle-status', toggleUserStatus);
router.get('/deposits', getAllDeposits);
router.put('/deposits/:depositId/approve', approveDeposit);
router.put('/deposits/:depositId/reject', rejectDeposit);
router.get('/withdrawals', getAllWithdrawals);
router.put('/withdrawals/:withdrawalId/approve', approveWithdrawal);
router.put('/withdrawals/:withdrawalId/reject', rejectWithdrawal);
router.get('/transactions', getAllTransactions);

module.exports = router;
