const Withdrawal = require('../models/Withdrawal');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

const createWithdrawal = async (req, res) => {
  try {
    const { amount, method, walletAddress } = req.body;

    if (!amount || !method || !walletAddress) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const user = await User.findById(req.user._id);
    if (user.balance < amount) {
      return res.status(400).json({ success: false, message: 'Insufficient balance' });
    }

    const withdrawal = new Withdrawal({
      userId: req.user._id,
      amount,
      method,
      walletAddress,
      status: 'pending'
    });

    await withdrawal.save();

    res.status(201).json({ success: true, message: 'Withdrawal request submitted', withdrawal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
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
