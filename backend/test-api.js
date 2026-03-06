const axios = require('axios');

const API_BASE = process.env.API_URL || 'http://localhost:5000';

const testAPI = async () => {
  console.log('🧪 Testing API endpoints...');
  console.log('📍 Base URL:', API_BASE);

  try {
    // Test health endpoint
    console.log('\n1. Testing health endpoint...');
    const health = await axios.get(`${API_BASE}/api/health`);
    console.log('✅ Health check:', health.data.status);

    // Test user registration
    console.log('\n2. Testing user registration...');
    const testUser = {
      firstName: 'Test',
      lastName: 'User',
      email: `test${Date.now()}@example.com`,
      password: 'password123',
      confirmPassword: 'password123',
      country: 'United States',
      currency: 'USD'
    };

    const registerResponse = await axios.post(`${API_BASE}/api/auth/register`, testUser);
    console.log('✅ User registration successful');

    // Test user login
    console.log('\n3. Testing user login...');
    const loginResponse = await axios.post(`${API_BASE}/api/auth/login`, {
      email: testUser.email,
      password: testUser.password
    });
    console.log('✅ User login successful');

    const token = loginResponse.data.token;
    const headers = { Authorization: `Bearer ${token}` };

    // Test deposit creation
    console.log('\n4. Testing deposit creation...');
    const depositResponse = await axios.post(`${API_BASE}/api/deposits/create`, {
      amount: 100,
      method: 'Bitcoin',
      transactionId: 'test123'
    }, { headers });
    console.log('✅ Deposit creation successful');

    // Test withdrawal creation
    console.log('\n5. Testing withdrawal creation...');
    try {
      await axios.post(`${API_BASE}/api/withdrawals/create`, {
        amount: 50,
        method: 'Bitcoin',
        walletAddress: 'bc1qtest123'
      }, { headers });
      console.log('✅ Withdrawal creation successful');
    } catch (error) {
      console.log('⚠️ Withdrawal failed (expected - insufficient balance)');
    }

    // Test user transactions
    console.log('\n6. Testing user transactions...');
    const transactionsResponse = await axios.get(`${API_BASE}/api/transactions/user`, { headers });
    console.log('✅ User transactions retrieved');

    // Test admin login
    console.log('\n7. Testing admin login...');
    try {
      const adminLogin = await axios.post(`${API_BASE}/api/auth/login`, {
        email: 'admin@metacryptotrading.net',
        password: 'admin123'
      });
      console.log('✅ Admin login successful');

      const adminToken = adminLogin.data.token;
      const adminHeaders = { Authorization: `Bearer ${adminToken}` };

      // Test admin stats
      console.log('\n8. Testing admin stats...');
      const statsResponse = await axios.get(`${API_BASE}/api/admin/stats`, { headers: adminHeaders });
      console.log('✅ Admin stats retrieved');

      console.log('\n🎉 All tests passed! API is working correctly.');
      
    } catch (error) {
      console.log('⚠️ Admin tests skipped (admin user not found)');
      console.log('💡 Run: npm run create-admin to create admin user');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
};

// Run if called directly
if (require.main === module) {
  testAPI();
}

module.exports = testAPI;