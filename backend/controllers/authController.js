const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateReferralCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, country, currency, phone, referral } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields"
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match"
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const referralCode = generateReferralCode();

    // Clear any existing problematic indexes first
    try {
      await User.collection.dropIndex('username_1');
    } catch (e) {
      // Index doesn't exist, continue
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      country: country || '',
      currency: currency || 'USD',
      phone: phone || '',
      password: hashedPassword,
      referredBy: referral || null,
      referralCode,
      balance: 0,
      totalProfit: 0,
      bonus: 0,
      miningLevel: 1,
      isActive: true
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        country: newUser.country,
        currency: newUser.currency,
        phone: newUser.phone,
        balance: newUser.balance,
        totalProfit: newUser.totalProfit,
        referralCode: newUser.referralCode
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    // Handle duplicate key errors specifically
    if (error.code === 11000) {
      if (error.message.includes('email')) {
        return res.status(400).json({
          success: false,
          message: "Email already registered"
        });
      }
      return res.status(400).json({
        success: false,
        message: "Account already exists"
      });
    }
    
    res.status(500).json({
      success: false,
      message: error.message || 'Registration failed'
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    if (!user.isActive) {
      return res.status(400).json({
        success: false,
        message: "Account is deactivated"
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'metacryptotrading_jwt_secret_key_2024',
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        country: user.country,
        currency: user.currency,
        phone: user.phone,
        balance: user.balance,
        totalProfit: user.totalProfit,
        bonus: user.bonus,
        miningLevel: user.miningLevel,
        referralCode: user.referralCode
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Login failed'
    });
  }
};

module.exports = { register, login };