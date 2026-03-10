const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

// MongoDB Atlas connection
const ATLAS_URI = 'mongodb+srv://ali-islamic:xlUR8DWnt7jpcw2M@cluster0.0nsjvku.mongodb.net/myDatabase?retryWrites=true&w=majority';

const quickSetup = async () => {
  try {
    console.log('🚀 Quick Setup for Metacryptotrading');
    console.log('📍 Using MongoDB Atlas (free tier)');
    
    // Connect to Atlas
    await mongoose.connect(ATLAS_URI);
    console.log('✅ Connected to MongoDB Atlas');
    
    // Check if admin exists
    const existingAdmin = await User.findOne({ email: 'admin@metacryptotrading.net' });
    if (existingAdmin) {
      console.log('✅ Admin user already exists');
    } else {
      // Create admin user
      const hashedPassword = await bcrypt.hash('admin123', 12);
      
      const admin = new User({
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@metacryptotrading.net'.toLowerCase(),
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
      console.log('✅ Admin user created');
    }
    
    // Create test user
    const testUserEmail = 'test@example.com';
    const existingTestUser = await User.findOne({ email: testUserEmail });
    
    if (!existingTestUser) {
      const testUserPassword = await bcrypt.hash('password123', 12);
      
      const testUser = new User({
        firstName: 'Test',
        lastName: 'User',
        email: testUserEmail,
        password: testUserPassword,
        role: 'user',
        country: 'United States',
        currency: 'USD',
        balance: 1000, // Give test user some balance
        totalProfit: 0,
        bonus: 100,
        referralCode: 'TEST001',
        isActive: true
      });
      
      await testUser.save();
      console.log('✅ Test user created with $1000 balance');
    }
    
    console.log('\n🎉 Setup Complete!');
    console.log('\n📋 Credentials:');
    console.log('Admin: admin@metacryptotrading.net / admin123');
    console.log('Test User: test@example.com / password123');
    console.log('\n🌐 Atlas URI for .env:');
    console.log(ATLAS_URI);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
};

quickSetup();