const Withdrawal = require('../models/Withdrawal');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

const createWithdrawal = async (req, res) => {
  try {
    const { amount, method, walletAddress } = req.body;

    // Validation
    if (!amount || !method || !walletAddress) {
      return res.status(400).json({ success: false, message: 'Amount, method, and wallet address are required' });
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({ success: false, message: 'Amount must be a valid positive number' });
    }

    if (parsedAmount < 10) {
      return res.status(400).json({ success: false, message: 'Minimum withdrawal amount is $10' });
    }

    const validMethods = ['PayPal', 'Bitcoin', 'USDT'];
    if (!validMethods.includes(method)) {
      return res.status(400).json({ success: false, message: 'Invalid payment method' });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const userBalance = user.balance || 0;
    if (userBalance < parsedAmount) {
      return res.status(400).json({ 
        success: false, 
        message: `Insufficient balance. You have $${userBalance.toFixed(2)} but requested $${parsedAmount.toFixed(2)}` 
      });
    }

    const withdrawal = new Withdrawal({
      userId: req.user._id,
      amount: parsedAmount,
      method,
      walletAddress: walletAddress.trim(),
      status: 'pending'
    });

    await withdrawal.save();

    res.status(201).json({ success: true, message: 'Withdrawal request submitted successfully', withdrawal });
  } catch (error) {
    console.error('Withdrawal creation error:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error' });
  }
};

const getUserWithdrawals = async (req, res) => {
  try {
    const withdrawals = await Withdrawal.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, withdrawals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllWithdrawals = async (req, res) => {
  try {
    const withdrawals = await Withdrawal.find().populate('userId', 'firstName lastName email').sort({ createdAt: -1 });
    res.json({ success: true, withdrawals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const approveWithdrawal = async (req, res) => {
  try {
    const { withdrawalId } = req.params;
    const { adminNote } = req.body;

    const withdrawal = await Withdrawal.findById(withdrawalId);
    if (!withdrawal) {
      return res.status(404).json({ success: false, message: 'Withdrawal not found' });
    }

    if (withdrawal.status !== 'pending') {
      return res.status(400).json({ success: false, message: 'Withdrawal already processed' });
    }

    const user = await User.findById(withdrawal.userId);
    if (user.balance < withdrawal.amount) {
      return res.status(400).json({ success: false, message: 'User has insufficient balance' });
    }

    withdrawal.status = 'approved';
    withdrawal.adminNote = adminNote;
    withdrawal.processedAt = new Date();
    await withdrawal.save();

    user.balance -= withdrawal.amount;
    await user.save();

    const transaction = new Transaction({
      userId: withdrawal.userId,
      type: 'withdrawal',
      amount: withdrawal.amount,
      method: withdrawal.method,
      status: 'completed',
      description: `Withdrawal approved - ${withdrawal.method}`
    });
    await transaction.save();

    res.json({ success: true, message: 'Withdrawal approved', withdrawal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const rejectWithdrawal = async (req, res) => {
  try {
    const { withdrawalId } = req.params;
    const { adminNote } = req.body;

    const withdrawal = await Withdrawal.findById(withdrawalId);
    if (!withdrawal) {
      return res.status(404).json({ success: false, message: 'Withdrawal not found' });
    }

    if (withdrawal.status !== 'pending') {
      return res.status(400).json({ success: false, message: 'Withdrawal already processed' });
    }

    withdrawal.status = 'rejected';
    withdrawal.adminNote = adminNote;
    withdrawal.processedAt = new Date();
    await withdrawal.save();

    res.json({ success: true, message: 'Withdrawal rejected', withdrawal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createWithdrawal, getUserWithdrawals, getAllWithdrawals, approveWithdrawal, rejectWithdrawal };
