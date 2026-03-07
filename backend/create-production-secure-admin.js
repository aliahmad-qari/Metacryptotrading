const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const User = require('./models/User');

// Enhanced production admin creation with better security practices
const createProductionSecureAdmin = async () => {
  try {
    console.log('🚀 Creating Production Secure Admin User');
    
    // Get MongoDB URI from environment or use production fallback
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://ali-islamic:xlUR8DWnt7jpcw2M@cluster0.0nsjvku.mongodb.net/myDatabase?retryWrites=true&w=majority';
    
    // Connect to MongoDB with better error handling
    console.log('🔍 Connecting to MongoDB...');
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000
    });
    
    console.log('✅ Connected to MongoDB');
    
    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@metacryptotrading.net' });
    if (existingAdmin) {
      console.log('✅ Admin user already exists');
      console.log('Email: admin@metacryptotrading.net');
      console.log('Password: admin123 (if not changed)');
      process.exit(0);
    }
    
    // Generate secure random password
    const generateSecurePassword = () => {
      const password = crypto.randomBytes(12).toString('base64').slice(0, 12);
      return password;
    };
    
    const securePassword = generateSecurePassword();
    const hashedPassword = await bcrypt.hash(securePassword, 12);
    
    // Create admin user with enhanced security
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
      isActive: true,
      createdAt: new Date()
    });
    
    // Save admin to database
    await admin.save();
    
    console.log('✅ Production Admin user created successfully!');
    console.log('📧 Email: admin@metacryptotrading.net');
    console.log('🔑 Password: ' + securePassword);
    console.log('🔒 Password has been securely hashed and stored');
    console.log('📝 Note: Change this password immediately after first login');
    console.log('🔐 Admin role has been assigned with full permissions');
    console.log('📊 Admin can now access /admin routes');
    
    // Show admin routes available
    console.log('\n📋 Available Admin Routes:');
    console.log('GET /api/admin/stats - Dashboard statistics');
    console.log('GET /api/admin/users - List all users');
    console.log('PUT /api/admin/users/:userId/balance - Update user balance');
    console.log('PUT /api/admin/users/:userId/toggle-status - Toggle user status');
    console.log('GET /api/admin/deposits - View all deposits');
    console.log('PUT /api/admin/deposits/:id/approve - Approve deposit');
    console.log('PUT /api/admin/deposits/:id/reject - Reject deposit');
    console.log('GET /api/admin/withdrawals - View all withdrawals');
    console.log('PUT /api/admin/withdrawals/:id/approve - Approve withdrawal');
    console.log('PUT /api/admin/withdrawals/:id/reject - Reject withdrawal');
    console.log('GET /api/admin/transactions - View all transactions');
    
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
    console.error('⚠️ Possible causes:');
    console.error('  1. MongoDB connection failed');
    console.error('  2. Admin already exists with different email');
    console.error('  3. Database permissions issue');
    process.exit(1);
  }
};

// Run the script
createProductionSecureAdmin();