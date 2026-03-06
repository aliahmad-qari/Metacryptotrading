# Metacryptotrading - Deployment Guide

## 🚀 Quick Deployment Checklist

### Backend Deployment (Render/Railway/Heroku)

1. **Environment Variables**
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/metacryptotrading
JWT_SECRET=your_super_secure_jwt_secret_key_2024
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

2. **Build Command**: `npm install`
3. **Start Command**: `npm start`

### Frontend Deployment (Vercel/Netlify)

1. **Environment Variables**
```
VITE_API_URL=https://your-backend-domain.onrender.com
```

2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`

## 🔧 Local Development Setup

### 1. Backend Setup
```bash
cd backend
npm install
```

**Local Development (.env):**
```
MONGO_URI=mongodb://localhost:27017/metacryptotrading
JWT_SECRET=metacryptotrading_jwt_secret_key_2024
NODE_ENV=development
PORT=5000
```

**Production (.env.production):**
```
MONGO_URI=mongodb+srv://ali-islamic:xlUR8DWnt7jpcw2M@cluster0.0nsjvku.mongodb.net/myDatabase?retryWrites=true&w=majority
JWT_SECRET=your_secure_production_jwt_secret
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-frontend-domain.vercel.app
```

Create admin user:
```bash
npm run create-admin
```

Start server:
```bash
npm start
```

### 2. Frontend Setup
```bash
npm install
```

Create `.env.local` file:
```
VITE_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

## 📊 Database Setup (MongoDB Atlas)

1. Create MongoDB Atlas account
2. Create new cluster
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for all)
5. Get connection string
6. Replace in MONGO_URI environment variable

## 🔐 Admin Access

**Default Admin Credentials:**
- Email: `admin@metacryptotrading.net`
- Password: `admin123`
- URL: `/admin/login`

**Change admin password after first login!**

## 🌐 API Endpoints Reference

### Authentication
- `POST /api/auth/login` - User/Admin login
- `POST /api/auth/register` - User registration

### User Operations
- `POST /api/deposits/create` - Submit deposit request
- `GET /api/deposits/user` - Get user deposits
- `POST /api/withdrawals/create` - Submit withdrawal request
- `GET /api/withdrawals/user` - Get user withdrawals
- `GET /api/transactions/user` - Get user transactions

### Admin Operations
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users` - All users management
- `PUT /api/admin/users/:id/balance` - Update user balance
- `GET /api/admin/deposits` - Manage deposits
- `PUT /api/admin/deposits/:id/approve` - Approve deposit
- `GET /api/admin/withdrawals` - Manage withdrawals
- `PUT /api/admin/withdrawals/:id/approve` - Approve withdrawal
- `GET /api/admin/transactions` - All transactions

## 🛠 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Add your frontend domain to CORS allowedOrigins in server.js
   - Set FRONTEND_URL environment variable

2. **Database Connection**
   - Check MongoDB Atlas IP whitelist
   - Verify connection string format
   - Ensure database user has proper permissions

3. **Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token expiration (7 days default)
   - Ensure admin role is set correctly

4. **API Calls Failing**
   - Check VITE_API_URL points to correct backend
   - Verify backend is running and accessible
   - Check browser network tab for errors

### Environment-Specific Fixes

**Development:**
- Use `http://localhost:5000` for API URL
- Use local MongoDB or Atlas connection

**Production:**
- Use HTTPS URLs only
- Set NODE_ENV=production
- Use production MongoDB Atlas cluster

## 📱 Features Overview

### User Features
✅ User registration and login
✅ Dashboard with balance display
✅ Deposit request system (PayPal, Bitcoin, USDT)
✅ Withdrawal request system
✅ Transaction history
✅ Real-time balance updates

### Admin Features
✅ Admin login and dashboard
✅ User management (edit balance, suspend accounts)
✅ Deposit approval/rejection system
✅ Withdrawal approval/rejection system
✅ Complete transaction oversight
✅ Platform statistics and analytics

### Security Features
✅ JWT authentication
✅ Role-based access control
✅ Password hashing (bcrypt)
✅ Input validation
✅ CORS protection
✅ Balance validation for withdrawals

## 🚀 Production Deployment Steps

### Step 1: Deploy Backend
1. Push code to GitHub
2. Connect to Render/Railway
3. Set environment variables
4. Deploy and get backend URL

### Step 2: Deploy Frontend
1. Update VITE_API_URL with backend URL
2. Push to GitHub
3. Connect to Vercel/Netlify
4. Deploy and get frontend URL

### Step 3: Update CORS
1. Add frontend URL to backend CORS settings
2. Redeploy backend

### Step 4: Create Admin User
1. SSH into backend or use admin creation script
2. Create admin user with secure credentials

### Step 5: Test Everything
1. Test user registration/login
2. Test deposit/withdrawal flows
3. Test admin panel access
4. Verify all API endpoints work

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Check backend logs
3. Verify all environment variables are set
4. Test API endpoints directly
5. Check database connections

The platform is now production-ready with complete financial management capabilities!