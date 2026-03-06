# 🚀 Quick Start Guide

## Setup (One-time only)

### 1. Backend Setup
```bash
cd backend
npm install
npm run quick-setup
```

### 2. Frontend Setup  
```bash
cd ..
npm install
```

## Running the Application

### Terminal 1 - Backend
```bash
cd backend
npm start
```

### Terminal 2 - Frontend
```bash
npm run dev
```

## Access the Application

- **Frontend**: http://localhost:5173
- **Admin Panel**: http://localhost:5173/#/admin/login

## Default Credentials

**Admin:**
- Email: admin@metacryptotrading.net
- Password: admin123

**Test User:**
- Email: test@example.com  
- Password: password123
- Balance: $1000

## Features to Test

1. **User Features:**
   - Register new account
   - Login with test user
   - Submit deposit request
   - Submit withdrawal request
   - View transaction history

2. **Admin Features:**
   - Login to admin panel
   - View dashboard statistics
   - Manage users (edit balance)
   - Approve/reject deposits
   - Approve/reject withdrawals
   - View all transactions

## Troubleshooting

If you get errors:
1. Make sure both terminals are running
2. Check that ports 5000 and 5173 are available
3. Wait for "Server running on port 5000" message
4. Frontend should auto-open at http://localhost:5173

## Production Deployment

When ready to deploy:
1. Push code to GitHub
2. Deploy backend to Render/Railway
3. Deploy frontend to Vercel/Netlify
4. Update environment variables

The application is now ready to use! 🎉