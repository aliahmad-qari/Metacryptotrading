const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true, enum: ['deposit', 'withdrawal', 'profit', 'bonus'] },
  amount: { type: Number, required: true },
  method: { type: String },
  status: { type: String, default: 'completed', enum: ['pending', 'completed', 'failed'] },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
