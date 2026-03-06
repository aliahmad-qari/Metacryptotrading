# Metacryptotrading - Setup Instructions

## New Features Added

### 1. Deposit System
- Users can submit deposit requests with payment proof
- Supports PayPal, Bitcoin, and USDT
- Admin approval/rejection system

### 2. Withdrawal System  
- Users can request withdrawals to wallet addresses
- Balance validation
- Admin approval/rejection system

### 3. Transaction History
- Complete transaction logging
- Deposit, withdrawal, profit, and bonus tracking
- User and admin views

### 4. Admin Panel
- Dashboard with statistics
- User management (edit balance, suspend accounts)
- Deposit/withdrawal approval system
- Complete transaction oversight

## Setup Instructions

### Backend Setup

1. **Install Dependencies**
```bash
cd backend
npm install
```

2. **Environment Variables**
Create `.env` file in backend directory:
```
MONGO_URI=mongodb://localhost:27017/metacryptotrading
JWT_SECRET=metacryptotrading_jwt_secret_key_2024
NODE_ENV=development
PORT=5000
```

3. **Create Admin User**
```bash
cd backend
node create-admin.js
```
This creates an admin user:
- Email: admin@metacryptotrading.net
- Password: admin123

4. **Start Backend Server**
```bash
npm start
```

### Frontend Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Environment Variables**
Create `.env.local` file:
```
VITE_API_URL=http://localhost:5000
```

3. **Start Frontend**
```bash
npm run dev
```

## API Endpoints

### User Endpoints
- `POST /api/deposits/create` - Create deposit request
- `GET /api/deposits/user` - Get user deposits
- `POST /api/withdrawals/create` - Create withdrawal request
- `GET /api/withdrawals/user` - Get user withdrawals
- `GET /api/transactions/user` - Get user transactions

### Admin Endpoints
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users` - All users
- `PUT /api/admin/users/:id/balance` - Update user balance
- `PUT /api/admin/users/:id/toggle-status` - Suspend/activate user
- `GET /api/admin/deposits` - All deposits
- `PUT /api/admin/deposits/:id/approve` - Approve deposit
- `PUT /api/admin/deposits/:id/reject` - Reject deposit
- `GET /api/admin/withdrawals` - All withdrawals
- `PUT /api/admin/withdrawals/:id/approve` - Approve withdrawal
- `PUT /api/admin/withdrawals/:id/reject` - Reject withdrawal
- `GET /api/admin/transactions` - All transactions

## Database Models

### User Model (Extended)
- Added `role` field (user/admin)

### Deposit Model
- userId, amount, method, transactionId, proofUrl
- status (pending/approved/rejected)
- adminNote, createdAt, processedAt

### Withdrawal Model  
- userId, amount, method, walletAddress
- status (pending/approved/rejected)
- adminNote, createdAt, processedAt

### Transaction Model
- userId, type, amount, method, status
- description, createdAt

## Access URLs

- **User Dashboard**: http://localhost:5173/#/dashboard
- **Admin Panel**: http://localhost:5173/#/admin/login
- **Admin Login**: admin@metacryptotrading.net / admin123

## Features Overview

### User Features
1. **Deposit Funds**: Submit deposit requests with transaction proof
2. **Withdraw Funds**: Request withdrawals to crypto wallets or PayPal
3. **Transaction History**: View all financial activities
4. **Real-time Balance**: Updated balance after admin approvals

### Admin Features
1. **Dashboard**: Overview statistics (users, deposits, withdrawals, revenue)
2. **User Management**: Edit balances, suspend accounts
3. **Deposit Management**: Approve/reject deposit requests
4. **Withdrawal Management**: Approve/reject withdrawal requests  
5. **Transaction Oversight**: View all platform transactions

## Security Features
- JWT authentication for all protected routes
- Admin role-based access control
- Input validation and sanitization
- Balance verification for withdrawals
- Secure password hashing

## Production Deployment

1. **Backend**: Deploy to Render/Heroku with MongoDB Atlas
2. **Frontend**: Deploy to Vercel/Netlify
3. **Environment**: Update API URLs for production
4. **Database**: Use MongoDB Atlas connection string
5. **Admin**: Create production admin user

The system is now a fully functional crypto trading platform with complete deposit/withdrawal management and admin oversight capabilities.