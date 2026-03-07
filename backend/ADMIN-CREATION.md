# Admin Creation Scripts

This directory contains scripts for creating admin users in the Metacryptotrading platform.

## Available Scripts

### 1. create-secure-admin.js
**Purpose:** Create a secure admin user for local development
**Usage:** `node create-secure-admin.js`

### 2. create-production-secure-admin.js
**Purpose:** Create a secure admin user for production environment
**Usage:** `node create-production-secure-admin.js`

## Security Features

Both scripts include enhanced security features:

- **Secure Password Generation:** Uses crypto.randomBytes() for cryptographically secure random passwords
- **Strong Hashing:** Uses bcrypt with 12 salt rounds for password hashing
- **Role Verification:** Assigns admin role with proper permissions
- **Error Handling:** Comprehensive error handling with clear messages
- **Connection Timeout:** Configurable MongoDB connection timeout

## Usage Instructions

### For Local Development
1. Ensure MongoDB is running locally
2. Set up environment variables in `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017/metacryptotrading
   ```
3. Run the script:
   ```bash
   node create-secure-admin.js
   ```

### For Production
1. Ensure MongoDB Atlas connection is available
2. Set up environment variables in `.env.production` file:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/database?retryWrites=true&w=majority
   ```
3. Run the script:
   ```bash
   node create-production-secure-admin.js
   ```

## Script Features

### create-secure-admin.js
- Uses local MongoDB connection
- Generates cryptographically secure random password
- Provides clear success/error messages
- Shows available admin routes after creation
- Includes connection timeout for better error handling

### create-production-secure-admin.js
- Uses production MongoDB Atlas connection
- Includes production-specific error handling
- Same security features as development version
- Uses environment variable for MongoDB URI

## Security Best Practices

1. **Change Password Immediately:** After first login, change the generated password
2. **Use Strong Environment Variables:** Never commit MongoDB credentials
3. **Enable Two-Factor Authentication:** For admin accounts
4. **Regular Password Rotation:** Change admin passwords periodically
5. **Audit Logs:** Monitor admin activity

## Admin Routes Available

After creating an admin user, the following routes become available:

- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users` - List all users
- `PUT /api/admin/users/:userId/balance` - Update user balance
- `PUT /api/admin/users/:userId/toggle-status` - Toggle user status
- `GET /api/admin/deposits` - View all deposits
- `PUT /api/admin/deposits/:id/approve` - Approve deposit
- `PUT /api/admin/deposits/:id/reject` - Reject deposit
- `GET /api/admin/withdrawals` - View all withdrawals
- `PUT /api/admin/withdrawals/:id/approve` - Approve withdrawal
- `PUT /api/admin/withdrawals/:id/reject` - Reject withdrawal
- `GET /api/admin/transactions` - View all transactions

## Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check MongoDB service is running
   - Verify connection string is correct
   - Check network connectivity

2. **Admin Already Exists**
   - Script will detect existing admin
   - Use different email or delete existing admin

3. **Permission Denied**
   - Check MongoDB user permissions
   - Verify database credentials

### Error Messages

- `Error creating admin: MongoNetworkError: failed to connect`
  - MongoDB server not accessible

- `Error creating admin: E11000 duplicate key error`
  - Admin with same email already exists

- `Error creating admin: Authentication failed`
  - Invalid MongoDB credentials

## File Structure

```
backend/
├── create-secure-admin.js          # Enhanced local admin creation
├── create-production-secure-admin.js # Enhanced production admin creation
├── models/User.js                  # User model with role field
├── middleware/auth.js              # Authentication middleware
├── adminRoutes.js                  # Admin API routes
└── controllers/adminController.js  # Admin controller logic
```

## Dependencies

Both scripts require:
- `mongoose` - MongoDB ODM
- `bcryptjs` - Password hashing
- `crypto` - Cryptographically secure random generation
- `dotenv` - Environment variable management

## License

These scripts are part of the Metacryptotrading platform and should be used according to the project's licensing terms.