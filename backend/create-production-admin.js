const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

// Use production MongoDB Atlas URI
const PRODUCTION_URI = 'mongodb+srv://ali-islamic:xlUR8DWnt7jpcw2M@cluster0.0nsjvku.mongodb.net/myDatabase?retryWrites=true&w=majority';

const createProductionAdmin = async () => {
  try {
    console.log('🚀 Creating Production Admin User');
    
    await mongoose.connect(PRODUCTION_URI);
    console.log('✅ Connected to Production Database');
    
    // Check if admin exists
    const existingAdmin = await User.findOne({ email: 'admin@metacryptotrading.net' });
    if (existingAdmin) {
      console.log('✅ Admin user already exists');
      console.log('Email: admin@metacryptotrading.net');
      console.log('Password: admin123');
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
    console.log('✅ Production Admin user created!');
    console.log('Email: admin@metacryptotrading.net');
    console.log('Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

createProductionAdmin();