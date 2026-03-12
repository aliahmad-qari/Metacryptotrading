
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: String,
  currency: { type: String, default: 'USD' },
  phone: String,
  balance: { 
    type: Number, 
    default: 0,
    min: [0, 'Balance cannot be negative']
  },
  totalProfit: { 
    type: Number, 
    default: 0,
    min: [0, 'Total profit cannot be negative']
  },
  bonus: { 
    type: Number, 
    default: 0,
    min: [0, 'Bonus cannot be negative']
  },
  referralCode: { type: String, unique: true },
  referredBy: String,
  miningLevel: { type: Number, default: 1 },
  isActive: { type: Boolean, default: true },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  createdAt: { type: Date, default: Date.now }
});

// Ensure proper indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ referralCode: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('User', userSchema);
