const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const resetAdmin = async () => {
  try {
    const mongoURI = 'mongodb+srv://ali-islamic:xlUR8DWnt7jpcw2M@cluster0.0nsjvku.mongodb.net/metaCryptotrading?retryWrites=true&w=majority';
    await mongoose.connect(mongoURI);
    
    console.log('Connected to MongoDB');
    
    const email = 'admin@metacryptotrading.net';
    const newPassword = 'admin123';
    
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    
    const result = await User.findOneAndUpdate(
      { email: email.toLowerCase() },
      { password: hashedPassword, role: 'admin', isActive: true },
      { new: true }
    );
    
    if (result) {
      console.log('✅ Admin password reset successfully!');
      console.log(`Email: ${email}`);
      console.log(`New Password: ${newPassword}`);
    } else {
      console.log('❌ Admin user not found. Creating a new one...');
      
      const admin = new User({
        firstName: 'Admin',
        lastName: 'User',
        email: email.toLowerCase(),
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
      console.log('✅ New Admin user created successfully!');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error resetting admin:', error);
    process.exit(1);
  }
};

resetAdmin();
