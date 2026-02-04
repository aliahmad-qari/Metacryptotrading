# Deployment Instructions

## Current Setup Status ✅

### Frontend (Vercel)
- **Live URL**: https://metacryptotrading.vercel.app
- **Environment**: Production
- **API Target**: https://metacryptotrading.onrender.com

### Backend (Render)
- **Live URL**: https://metacryptotrading.onrender.com
- **Environment**: Production
- **Database**: MongoDB Atlas

### Database (MongoDB Atlas)
- **Status**: Connected
- **Environment**: Production

## Environment Configuration

### Local Development
```bash
# .env.local (already created)
VITE_API_URL=http://localhost:5000
```

### Production (Vercel)
```bash
# .env.production (already updated)
VITE_API_URL=https://metacryptotrading.onrender.com
```

## How to Deploy Updates

### 1. Frontend Updates (Vercel)
```bash
# Build and test locally first
npm run build

# Push to your Git repository
git add .
git commit -m "Update frontend"
git push origin main

# Vercel will automatically deploy from your Git repository
```

### 2. Backend Updates (Render)
```bash
# Navigate to backend folder
cd backend

# Push backend changes to your Git repository
git add .
git commit -m "Update backend"
git push origin main

# Render will automatically deploy from your Git repository
```

## Vercel Environment Variables Setup

In your Vercel dashboard, make sure these environment variables are set:

1. Go to https://vercel.com/dashboard
2. Select your project: `metacryptotrading`
3. Go to Settings → Environment Variables
4. Add:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://metacryptotrading.onrender.com`
   - **Environment**: Production

## Testing the Setup

### Local Testing
```bash
# Start backend (in backend folder)
npm start

# Start frontend (in root folder)
npm run dev

# Test URLs:
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
# API Health: http://localhost:5000/api/health
```

### Production Testing
```bash
# Frontend: https://metacryptotrading.vercel.app
# Backend: https://metacryptotrading.onrender.com
# API Health: https://metacryptotrading.onrender.com/api/health
```

## API Endpoints

All API calls now properly route to:
- **Development**: `http://localhost:5000/api/*`
- **Production**: `https://metacryptotrading.onrender.com/api/*`

### Available Endpoints:
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/health` - Health check

## Troubleshooting

### If registration/login fails:
1. Check browser console for errors
2. Verify API URL in Network tab
3. Check Render backend logs
4. Ensure MongoDB Atlas is accessible

### If CORS errors occur:
- Backend already configured for both localhost and Vercel domains
- Check that Render backend is running

### If environment variables don't work:
1. Rebuild and redeploy on Vercel
2. Check Vercel environment variables in dashboard
3. Verify .env.production file is correct

## Next Steps

1. **Deploy to Vercel**: Push your changes to trigger automatic deployment
2. **Test Registration**: Try creating a new account on live site
3. **Test Login**: Try logging in with created account
4. **Monitor**: Check both Vercel and Render logs for any issues

Your MERN stack is now properly configured for production! 🚀