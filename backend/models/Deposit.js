const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { 
    type: Number, 
    required: true,
    min: [0.01, 'Amount must be greater than 0']
  },
  method: { type: String, required: true, enum: ['PayPal', 'Bitcoin', 'USDT'] },
  transactionId: { type: String },
  proofUrl: { type: String },
  status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
  adminNote: { type: String },
  createdAt: { type: Date, default: Date.now },
  processedAt: { type: Date }
});

module.exports = mongoose.model('Deposit', depositSchema);
