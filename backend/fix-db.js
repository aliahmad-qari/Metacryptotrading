const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const fixDatabase = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/metacryptotrading';
    
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Connected to MongoDB');
    
    // Get the users collection
    const db = mongoose.connection.db;
    const collection = db.collection('users');
    
    // Drop the problematic username index
    try {
      await collection.dropIndex('username_1');
      console.log('✅ Dropped username_1 index');
    } catch (error) {
      console.log('ℹ️ username_1 index not found or already dropped');
    }
    
    // List all indexes to verify
    const indexes = await collection.indexes();
    console.log('📋 Current indexes:', indexes.map(idx => idx.name));
    
    console.log('✅ Database fixed successfully');
    
  } catch (error) {
    console.error('❌ Error fixing database:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
};

fixDatabase();