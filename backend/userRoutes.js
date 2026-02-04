const express = require('express');
const router = express.Router();

// Add user routes here as needed
router.get('/profile', (req, res) => {
  res.json({ message: 'User profile endpoint' });
});

module.exports = router;