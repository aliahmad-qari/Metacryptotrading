const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const createAdmin = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/metacryptotrading';
    await mongoose.connect(mongoURI);
    
    console.log('Connected to MongoDB');
    
    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@metacryptotrading.net' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }
    
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    const admin = new User({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@metacryptotrading.net',
      password: hashedPassword,
      role: 'admin',
      country: 'United States',
      currency: 'USD',
      balance: 0,
      totalProfit: 0,
      bonus: 0,
      referralCode: 'ADMIN001',
      isActive: true
    });
    
    await admin.save();
    console.log('Admin user created successfully!');
    console.log('Email: admin@metacryptotrading.net');
    console.log('Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();