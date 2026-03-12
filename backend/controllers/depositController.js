const Deposit = require('../models/Deposit');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

const createDeposit = async (req, res) => {
  try {
    const { amount, method, transactionId, proofUrl } = req.body;

    // Validation
    if (!amount || !method) {
      return res.status(400).json({ success: false, message: 'Amount and method are required' });
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return res.status(400).json({ success: false, message: 'Amount must be a valid positive number' });
    }

    if (parsedAmount < 10) {
      return res.status(400).json({ success: false, message: 'Minimum deposit amount is $10' });
    }

    const validMethods = ['PayPal', 'Bitcoin', 'USDT'];
    if (!validMethods.includes(method)) {
      return res.status(400).json({ success: false, message: 'Invalid payment method' });
    }

    const deposit = new Deposit({
      userId: req.user._id,
      amount: parsedAmount,
      method,
      transactionId: transactionId || null,
      proofUrl: proofUrl || null,
      status: 'pending'
    });

    await deposit.save();

    res.status(201).json({ success: true, message: 'Deposit request submitted successfully', deposit });
  } catch (error) {
    console.error('Deposit creation error:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error' });
  }
};

const getUserDeposits = async (req, res) => {
  try {
    const deposits = await Deposit.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, deposits });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllDeposits = async (req, res) => {
  try {
    const deposits = await Deposit.find().populate('userId', 'firstName lastName email').sort({ createdAt: -1 });
    res.json({ success: true, deposits });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const approveDeposit = async (req, res) => {
  try {
    const { depositId } = req.params;
    const { adminNote } = req.body;

    const deposit = await Deposit.findById(depositId);
    if (!deposit) {
      return res.status(404).json({ success: false, message: 'Deposit not found' });
    }

    if (deposit.status !== 'pending') {
      return res.status(400).json({ success: false, message: 'Deposit already processed' });
    }

    deposit.status = 'approved';
    deposit.adminNote = adminNote;
    deposit.processedAt = new Date();
    await deposit.save();

    const user = await User.findById(deposit.userId);
    user.balance += deposit.amount;
    await user.save();

    const transaction = new Transaction({
      userId: deposit.userId,
      type: 'deposit',
      amount: deposit.amount,
      method: deposit.method,
      status: 'completed',
      description: `Deposit approved - ${deposit.method}`
    });
    await transaction.save();

    res.json({ success: true, message: 'Deposit approved', deposit });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const rejectDeposit = async (req, res) => {
  try {
    const { depositId } = req.params;
    const { adminNote } = req.body;

    const deposit = await Deposit.findById(depositId);
    if (!deposit) {
      return res.status(404).json({ success: false, message: 'Deposit not found' });
    }

    if (deposit.status !== 'pending') {
      return res.status(400).json({ success: false, message: 'Deposit already processed' });
    }

    deposit.status = 'rejected';
    deposit.adminNote = adminNote;
    deposit.processedAt = new Date();
    await deposit.save();

    res.json({ success: true, message: 'Deposit rejected', deposit });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createDeposit, getUserDeposits, getAllDeposits, approveDeposit, rejectDeposit };
