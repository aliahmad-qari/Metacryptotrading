const mongoose = require('mongoose');

const withdrawalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { 
    type: Number, 
    required: true,
    min: [0.01, 'Amount must be greater than 0']
  },
  method: { type: String, required: true, enum: ['PayPal', 'Bitcoin', 'USDT'] },
  walletAddress: { 
    type: String, 
    required: true,
    trim: true
  },
  status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
  adminNote: { type: String },
  createdAt: { type: Date, default: Date.now },
  processedAt: { type: Date }
});

module.exports = mongoose.model('Withdrawal', withdrawalSchema);
