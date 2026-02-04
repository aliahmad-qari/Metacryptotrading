
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: String,
  currency: { type: String, default: 'USD' },
  phone: String,
  balance: { type: Number, default: 0 },
  totalProfit: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  referralCode: { type: String, unique: true },
  referredBy: String,
  miningLevel: { type: Number, default: 1 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
